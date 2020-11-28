import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LocationDetail, OneEmotionDate } from '@shared';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'location-detail-view',
  templateUrl: './location-detail-view.component.html',
  styleUrls: ['./location-detail-view.component.scss'],
})
export class LocationDetailViewComponent implements OnInit, AfterViewInit {
  locData: OneEmotionDate;
  chart: any;

  commData: any;
  commChart: any;

  @Input() set locationData(value: OneEmotionDate) {
    console.log(value);
    this.locData = value;
  }
  @ViewChild('seriesDate') seriesDateElement;
  @ViewChild('commData') commDataElement;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.chart = am4core.create(
      this.seriesDateElement.nativeElement,
      am4charts.XYChart
    );
    // Set input format for the dates
    this.chart.dateFormatter.inputDateFormat = 'yyyy-MM-ddTHH:mm:ss';

    // Create axes
    let dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = this.chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.dateX = 'time';
    series.tooltipText = '{value}';
    series.strokeWidth = 2;
    series.minBulletDistance = 15;
    series.showOnInit = false;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = 'vertical';
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = 'middle';
    series.tooltip.label.textValign = 'middle';

    // Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color('#fff');

    let bullethover = bullet.states.create('hover');
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    this.chart.cursor = new am4charts.XYCursor();
    this.chart.cursor.behavior = 'panXY';
    this.chart.cursor.xAxis = dateAxis;
    this.chart.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    this.chart.scrollbarY = new am4core.Scrollbar();
    this.chart.scrollbarY.parent = this.chart.leftAxesContainer;
    this.chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    this.chart.scrollbarX = new am4charts.XYChartScrollbar();
    this.chart.scrollbarX.series.push(series);
    this.chart.scrollbarX.parent = this.chart.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;

    this.chart.data = this.locData.emotionResults;

    //Create commulative chart

    this.commChart = am4core.create(
      this.commDataElement.nativeElement,
      am4charts.XYChart
    );
    // Set input format for the dates
    this.commChart.dateFormatter.inputDateFormat = 'yyyy-MM-ddTHH:mm:ss';

    // Create axes
    let commDateAxis = this.commChart.xAxes.push(new am4charts.DateAxis());
    let commValueAxis = this.commChart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let commSeries = this.commChart.series.push(new am4charts.LineSeries());
    commSeries.dataFields.valueY = 'commulativeValue';
    commSeries.dataFields.dateX = 'time';
    commSeries.tooltipText = 'Change: {value}, Value: {commulativeValue}';
    commSeries.strokeWidth = 2;
    commSeries.minBulletDistance = 15;
    commSeries.showOnInit = false;

    // Drop-shaped tooltips
    commSeries.tooltip.background.cornerRadius = 20;
    commSeries.tooltip.background.strokeOpacity = 0;
    commSeries.tooltip.pointerOrientation = 'vertical';
    commSeries.tooltip.label.minWidth = 40;
    commSeries.tooltip.label.minHeight = 40;
    commSeries.tooltip.label.textAlign = 'middle';
    commSeries.tooltip.label.textValign = 'middle';

    // Make bullets grow on hover
    let commBullet = commSeries.bullets.push(new am4charts.CircleBullet());
    commBullet.circle.strokeWidth = 2;
    commBullet.circle.radius = 4;
    commBullet.circle.fill = am4core.color('#fff');

    let commBullethover = commBullet.states.create('hover');
    commBullethover.properties.scale = 1.3;

    // Make a panning cursor
    this.commChart.cursor = new am4charts.XYCursor();
    this.commChart.cursor.behavior = 'panXY';
    this.commChart.cursor.xAxis = commDateAxis;
    this.commChart.cursor.snapToSeries = commSeries;

    // Create vertical scrollbar and place it before the value axis
    this.commChart.scrollbarY = new am4core.Scrollbar();
    this.commChart.scrollbarY.parent = this.commChart.leftAxesContainer;
    this.commChart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    this.commChart.scrollbarX = new am4charts.XYChartScrollbar();
    this.commChart.scrollbarX.series.push(commSeries);
    this.commChart.scrollbarX.parent = this.commChart.bottomAxesContainer;

    commDateAxis.start = 0.79;
    commDateAxis.keepSelection = true;

    this.commChart.data = this.locData.emotionResults;
  }
}
