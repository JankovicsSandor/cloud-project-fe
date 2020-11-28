export interface LocationDetail {
  id: number;
  name: string;
  locationName: string;
  locationData: LocationData[];
}

export interface LocationData {
  id: number;
  time: Date;
  facialExpression: FacialExpression;
}

export interface FacialExpression {
  name: string;
}
