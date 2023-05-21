import { eachDayOfInterval } from "date-fns";

export const getDaysWithinYear = (): IActivity[] => {
  const allDays = eachDayOfInterval({
    start: new Date(2023, 1, 1),
    end: new Date(2023, 12, 31),
  });

  const newActivity = allDays.map((date) => {
    return {
      count: Math.floor(Math.random() * 10) + 1,
      date: date.toISOString(),
      level: Math.floor(Math.random() * 5) + 1,
    };
  });

  return newActivity;
};

export const getBoxColor = (count: number): string => {
  if (count <= 1) {
    return `bg-purple-50`;
  } else if (count === 2 || count === 3) {
    return `bg-purple-300`;
  } else if (count === 4 || count === 5) {
    return `bg-purple-400`;
  } else if (count === 6 || count === 7) {
    return `bg-purple-500`;
  } else {
    return `bg-purple-600`;
  }
};
