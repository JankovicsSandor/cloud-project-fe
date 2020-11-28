import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationDataProviderService } from '@data-provider';
import { LocationDetail, OneEmotionDate, OneEmotionValue } from '@shared';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'cloud-project-fe-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
})
export class LocationDetailComponent implements OnInit {
  public detailValue$: ReplaySubject<OneEmotionDate[]> = new ReplaySubject();
  constructor(
    private route: ActivatedRoute,
    private detailService: LocationDataProviderService
  ) {
    const detailId = this.route.snapshot.paramMap.get('locationId');
    this.detailService
      .getOneLocationDetail(detailId)
      .pipe(
        map((value) => {
          let chartObject: OneEmotionDate[] = [
            <OneEmotionDate>{
              emotionId: 1,
              emotionName: 'Happiness',
              emotionResults: <OneEmotionValue[]>[],
            },
            <OneEmotionDate>{
              emotionId: 2,
              emotionName: 'Fear',
              emotionResults: <OneEmotionValue[]>[],
            },
            <OneEmotionDate>{
              emotionId: 3,
              emotionName: 'Surprise',
              emotionResults: <OneEmotionValue[]>[],
            },
          ];
          if (value) {
            for (const data of value.locationData) {
              let actualObject = chartObject.find(
                (item) => item.emotionId == data.facialExpression.id
              );

              let lastValue = 0;
              let lastObject =
                actualObject.emotionResults[
                  actualObject.emotionResults.length - 1
                ];
              if (lastObject) {
                lastValue = lastObject.commulativeValue;
              }

              actualObject.emotionResults.push(<OneEmotionValue>{
                time: data.time,
                value: data.value,
                commulativeValue: lastValue + data.value,
              });
            }
          }
          return chartObject;
        })
      )
      .subscribe(this.detailValue$);
  }

  ngOnInit(): void {}
}
