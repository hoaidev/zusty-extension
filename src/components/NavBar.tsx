import { MouseEvent } from "react";
import useStore from "../store/store";

const Navigation = () => {
  const {
    storeButton,
    treeButton,
    actionButton,
    setActiveButton,
    setActiveTab,
  } = useStore();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveButton(e.currentTarget.getAttribute("data-button") ?? "");
    setActiveTab(e.currentTarget.getAttribute("data-tab") ?? "");
  };

  return (
    <div className="flex items-center justify-around">
      <button
        onClick={handleClick}
        data-button="actionButton"
        data-tab="actionLog"
        className={`flex-grow flex-shrink bg-light-codebg text-white hover:bg-code-o font-semibold py-2 px-4 border border-light-codebg rounded shadow ${
          actionButton ? "bg-orange-500" : "bg-light-codebg"
        }`}
      >
        Action Log
      </button>
      <button
        onClick={handleClick}
        data-button="treeButton"
        data-tab="tree"
        className={`flex-grow flex-shrink bg-light-codebg text-white hover:bg-code-o font-semibold py-2 px-4 border border-light-codebg rounded shadow ${
          treeButton ? "bg-orange-500" : "light-codebg"
        }`}
      >
        Tree
      </button>
      <button
        onClick={handleClick}
        data-button="storeButton"
        data-tab="storeBtn"
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
