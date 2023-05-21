import { useState } from "react";
import { activity as defaultActivity } from "./data/activity";
import { getBoxColor, getDaysWithinYear } from "./lib/functions";

const App = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  const [showLabels, setShowLabels] = useState(false);
  const [activity, setActivity] = useState<IActivity[]>(defaultActivity);

  const handleShowLabels = (): void => {
    setShowLabels((prev) => !prev);
  };

  const handleRandomize = (): void => {
    const newDays = getDaysWithinYear();
    setActivity(newDays);
  };

  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col gap-12 items-center justify-center">
        <h1 className="font-semibold text-2xl">
          Contribution heatmap using Tailwind + React&nbsp;
          <span className="font-normal text-lg">(experimental)</span>
        </h1>
        <hr className="w-full" />
        <div className="w-full flex">
          <div className="ml-auto">
            <button
              className="mx-1 border rounded-md border-blue-600 py-1 px-4 text-white font-semibold bg-blue-600 hover:bg-blue-600 hover:border-blue-600"
              onClick={handleRandomize}
            >
              Randomize
            </button>
            <button
              className="mx-1 border rounded-md border-red-600 py-1 px-4 text-white font-semibold bg-red-600 hover:bg-red-600 hover:border-red-600"
              onClick={handleShowLabels}
            >
              Show Labels
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="grid grid-rows-7 col-start-1 row-start-2">
            {days.map((day, idx) => (
              <div
                key={idx}
                className="text-gray-600 font-semibold h-4 text-sm"
              >
                {idx % 2 !== 0 ? day : null}
              </div>
            ))}
          </div>
          <div className="grid grid-rows-7 grid-flow-col gap-1 col-span-2">
            {activity?.map((item, idx) => (
              <div
                key={idx}
                className={`h-4 w-4 text-xs text-slate-700 flex items-center justify-center rounded-sm cursor-pointer ${getBoxColor(
                  item.count
                )}`}
              >
                {showLabels && item.count}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
