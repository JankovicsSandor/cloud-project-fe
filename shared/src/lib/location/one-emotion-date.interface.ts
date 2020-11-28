export interface OneEmotionDate {
  emotionId: number;
  emotionName: string;
  emotionResults: OneEmotionValue[];
}

export interface OneEmotionValue {
  time: Date;
  value: number;
  commulativeValue: number;
}
