import { RawNodeDatum } from "react-d3-tree";
import { create } from "zustand";

type NullableRecord = Record<string, unknown> | null;

export interface State {
  prevState: NullableRecord;
  nextState: NullableRecord;
  stateSnapshotArray: Array<SnapShot>;
  actionSnapshotArray: Record<string, unknown>[];
  diffArray: Array<ActionDiff>;
  activeTab: string;
  store: Record<string, unknown>;
  storeButton: boolean;
  treeButton: boolean;
  actionButton: boolean;
  d3data: RawNodeDatum | null;
}

interface Actions {
  setActiveButton: (buttonName: string) => void;
  setActiveTab: (activeTab: string) => void;
  addStateSnapshot: (snapshot: SnapShot) => void;
  addActionSnapshot: (action: Record<string, unknown>) => void;
  addDiffSnapshot: (diff: ActionDiff) => void;
  setPrevState: (pState: NullableRecord) => void;
  setNextState: (nState: NullableRecord) => void;
  setStore: (inputStore: Record<string, unknown>) => void;
  setD3data: (data: RawNodeDatum | null) => void;
}

const useStore = create<State & Actions>((set) => ({
  prevState: null,
  nextState: null,
  stateSnapshotArray: [],
  actionSnapshotArray: [],
  diffArray: [],
  activeTab: "actionLog",
  store: {},
  storeButton: false,
  treeButton: false,
  actionButton: true,
  d3data: null,
  setActiveButton: (buttonName: string) => {
    set(() => ({
      storeButton: buttonName === "storeButton",
      treeButton: buttonName === "treeButton",
      actionButton: buttonName === "actionButton",
    }));
  },
  setActiveTab: (activeTab: string) => set({ activeTab }),
  addStateSnapshot: (snapshot) =>
    set((state) => ({
      stateSnapshotArray: [...state.stateSnapshotArray, snapshot],
    })),
  addActionSnapshot: (action) =>
    set((state) => ({
      actionSnapshotArray: [...state.actionSnapshotArray, action],
    })),
  addDiffSnapshot: (diff) =>
    set((state) => ({ diffArray: [...state.diffArray, diff] })),
  setPrevState: (pState) => set({ prevState: pState }),
  setNextState: (nState) => set({ nextState: nState }),
  setStore: (inputStore) => set({ store: inputStore }),
  setD3data: (data) => set({ d3data: data }),
}));

export default useStore;