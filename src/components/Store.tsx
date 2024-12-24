import useStore from "../store/store";
import ReactJson from "@microlink/react-json-view";

const Store = () => {
  const { store } = useStore();

  const storeConverted = Object.fromEntries(store.entries());

  return (
    <>
      <p className="text-center text-xl font-bold text-white my-5 mt-3 mb-0">
        Store:
      </p>
      <div
        className="flex justify-center align-center h-10/12"
        style={{ overflowY: "auto", height: "93vh" }}
      >
        <ReactJson
          src={storeConverted}
          theme="hopscotch"
          displayDataTypes={false}
          enableClipboard={false}
          quotesOnKeys={false}
          style={{ fontSize: "12px" }}
        />
      </div>
    </>
  );
};

export default Store;
