export interface Placements {
  id?: number;
  rules?: Rule[];
  status?: string;
  name?: string;
  description?: string;
  placementCode?: string;
  targetedAdUnitIds?: [];
  lastModifiedDateTime?: lastModifiedDateTime;
}

export interface lastModifiedDateTime {
  date?: date;
  hour?: number;
  minute?: number;
  second?: number;
  timeZoneId?: string;
}

export interface date {
  day?: number;
  month?: number;
  year?: number;
}

export interface Rule {
  desde?: number;
  hasta?: number;
}
