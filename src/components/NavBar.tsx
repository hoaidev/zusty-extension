import useStore from "../store/store";

const Navigation = () => {
  const { storeButton, treeButton, actionButton, setActiveButton } = useStore();
  //props being passed down to their respective button components for highlighting
  return (
    <div className="flex items-center justify-around">
      <button
        onClick={() => setActiveButton("actionButton")}
        className={`flex-grow flex-shrink bg-light-codebg text-white hover:bg-code-o font-semibold py-2 px-4 border border-light-codebg rounded shadow ${
          actionButton ? "bg-orange-500" : "bg-light-codebg"
        }`}
      >
        Action Log
      </button>
      <button
        onClick={() => setActiveButton("treeButton")}
        className={`flex-grow flex-shrink bg-light-codebg text-white hover:bg-code-o font-semibold py-2 px-4 border border-light-codebg rounded shadow ${treeButton ? "bg-orange-500" : "light-codebg"}`}
      >
        Tree
      </button>
      <button
        onClick={() => setActiveButton("storeButton")}
        className={`flex-grow flex-shrink bg-light-codebg text-white hover:bg-code-o font-semibold py-2 px-4 border border-light-codebg rounded shadow ${
          storeButton ? "bg-orange-500" : "bg-light-codebg"
        }`}
      >
        Store
      </button>
    </div>
  );
};

export default Navigation;
