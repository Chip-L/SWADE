export type PowerRecordsModel = {
  records: PowerRecordModel[];
};

export type PowerRecordModel = {
  id: string;
  createdType: string;
  fields: PowerModel[];
};

export type PowerModel = {
  power_id: number;
  power: string;
  alternateName: string;
  relatedPower: string[];
  rank: string;
  powerPoints: string;
  range: string;
  rangeMultiplier: number;
  duration: string;
  durationMultiplier: number;
  summary: string;
  trappings: string;
  fullDescription: string;
  book: string;
  pageNumber: number;
  isSpecial: boolean;
  powerModifiers: string[];
};
