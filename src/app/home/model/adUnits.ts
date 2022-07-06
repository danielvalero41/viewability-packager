export interface adUnit {
  id?: string;
  name?: string;
  description?: string;
  parentId?: string;
  adUnitSizes?: AdUnitSize[];
  adSenseSettings?: AdSenseSetting;
  adSenseSettingsSource?: string;
  parentPath?: parentPath[];
  adUnitCode?: string;
  isInterstitial?: boolean;
  isNative?: boolean;
  isFluid?: boolean;
  explicitlyTargeted?: boolean;
  appliedLabelFrequencyCaps?: any[];
  effectiveLabelFrequencyCaps?: any[];
  appliedLabels?: any[];
  effectiveAppliedLabels?: any[];
  effectiveTeamIds?: any[];
  appliedTeamIds?: any[];
  refreshRate?: any;
  smartSizeMode?: string;
  status?: string;
  hasChildren?: boolean;
  targetWindow?: string;
  externalSetTopBoxChannelId?: any;
  isSetTopBoxEnabled?: boolean;
  applicationId?: any;
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

export interface parentPath {
  id?: string;
  name?: string;
  adUnitCode?: string;
}

export interface AdUnitSize {
  size?: Size;
  environmentType?: string;
  companions?: any[];
  fullDisplayString?: string;
  isAudio?: boolean;
}

export interface Size {
  width?: number;
  height?: number;
  isAspectRatio?: boolean;
}

export interface AdSenseSetting {
  adSenseEnabled?: boolean;
  borderColor?: string;
  titleColor?: string;
  backgroundColor?: string;
  textColor?: string;
  urlColor?: string;
  adType?: string;
  borderStyle?: string;
  fontFamily?: string;
  fontSize?: string;
}
