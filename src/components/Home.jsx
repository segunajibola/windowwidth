import React from "react";
import WindowWidth from "./WindowWidth";

const Home = (props) => {
  const [showWidthSize, setShowWidthSize] = React.useState(false);

  function showWidth() {
    setShowWidthSize(prev => !prev);
  }

  return (
    <div className="dark:bg-gray-800 dark:text-gray-100 h-[90vh] flex flex-col justify-evenly">
      <div>
        <h1 className="text-2xl text-center">Window Width</h1>
        <p className="text-xl text-center">Check width of any device</p>
      </div>

      <button
        className="rounded-lg p-2.5 mx-auto active:inset-1 active:scale-110 transition delay-100 bg-gray-500 text-white"
        onClick={showWidth}
      >
        {showWidthSize ? "Hide width" :"Check width of this device"}
      </button>

      <div className="text-lg text-center mt-6">
        {showWidthSize ? <WindowWidth /> : "click button to show width"}
      </div>
    </div>
  );
};

export default Home;
