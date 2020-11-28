export interface LocationDetail {
  id: number;
  name: string;
  locationName: string;
  locationData: LocationData[];
}

export interface LocationData {
  id: number;
  time: Date;
  value: number;
  facialExpression: FacialExpression;
}

export interface FacialExpression {
  id: number;
  name: string;
}
