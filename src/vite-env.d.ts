/// <reference types="vite/client" />
/// <reference types="chrome"/>

declare type NullableRecord = Record<string, unknown> | null;

declare interface ActionDiff {
  action: string;
  actionCompleteTime: number;
  prevState: NullableRecord;
  nextState: NullableRecord;
}

declare interface SnapShot {
  timestamp: string;
  stateSnapshot: NullableRecord;
}
