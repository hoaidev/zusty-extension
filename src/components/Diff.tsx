import ReactJson from "@microlink/react-json-view"
import useStore from "../store/store"

const Diff = () => {
  const { prevState, nextState } = useStore()

  const renderObjectProperties = (obj: Record<string, unknown> | null) => {
    if (obj && typeof obj === "object") {
      return (
        <ReactJson
          src={obj}
          theme="hopscotch"
          displayDataTypes={false}
          enableClipboard={false}
          quotesOnKeys={false}
          style={{ fontSize: "12px" }}
        />
      )
    }
  }

  return (
    <div className="w-full flex flex-col h-[90vh] rounded-md border">
      <div className="basis-1/2">
        <h2 className="text-center text-lg font-bold">State Before Action:</h2>
        <div className="p-2">{renderObjectProperties(prevState)}</div>
      </div>
      <div className="basis-1/2">
        <h2 className="text-center text-lg font-bold">State After Action:</h2>
        <div className="p-2">{renderObjectProperties(nextState)}</div>
      </div>
    </div>
  )
}

export default Diff
