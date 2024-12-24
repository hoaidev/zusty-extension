import { useCallback, useEffect, useRef } from "react";
import Navigation from "./components/NavBar";
import ActionLog from "./components/ActionLog";
import StateSnapshots from "./components/StateSnapshots";
import Store from "./components/Store";
import ReactD3Tree from "./d3hierarchy/ReactD3Tree";
import useStore from "./store/store";

const App = () => {
  const { activeTab, addStateSnapshot, addDiffSnapshot, setStore, setD3data } =
    useStore();

  let count = 0;

  const connected = useRef<boolean>(false);
  const port = useRef<chrome.runtime.Port | null>(null);

  // listening to messages from background.js
  const setUpExtensionListener = useCallback(() => {
    if (!connected.current) {
      port.current = chrome.runtime?.connect();
      connected.current = !!port.current;
    }

    if (connected.current && port.current) {
      port.current.onMessage.addListener((message) => {
        if (message.body === "actionAndStateSnapshot") {
          const [name, action] = message.action.split("-");
          const store = JSON.parse(message.store);
          setStore(name, store);

          const timestamp = new Date().toLocaleString();
          const currentStateSnapshot = JSON.parse(message.nextState);
          const currentStateWithTimestamp = {
            timestamp,
            stateSnapshot: currentStateSnapshot,
          };
          addStateSnapshot(currentStateWithTimestamp);

          const prevState = JSON.parse(message.prevState);
          const nextState = JSON.parse(message.nextState);
          const currentDiffWithTimestamp = {
            action: action,
            actionCompleteTime: message.actionCompleteTime,
            prevState,
            nextState,
          };

          addDiffSnapshot(currentDiffWithTimestamp);
        }

        if (message.body === "treeComponents" && count < 1) {
          const data = JSON.parse(message.data);
          setD3data(data);
          count++;
        }
      });
    }
  }, [addDiffSnapshot, addStateSnapshot, count, setD3data, setStore]);

  // run the set up extension listner when the page loads
  useEffect(() => {
    setUpExtensionListener();
  }, [setUpExtensionListener]);

  return (
    <div className="flex h-screen bg-code-bg p-3">
      <div className="w-1/3 border-r-2 border-lt-grey">
        <Navigation />
        <StateSnapshots />
      </div>
      <div className="w-2/3">
        {activeTab === "tree" && <ReactD3Tree />}
        {activeTab === "actionLog" && <ActionLog />}
        {activeTab === "storeBtn" && <Store />}
      </div>
    </div>
  );
};

export default App;
