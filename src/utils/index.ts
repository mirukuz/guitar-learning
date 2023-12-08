import { allKeys } from "../constants";

export const getInterval = (note1: string, note2: string): string => {
  const index1 = allKeys.indexOf(note1);
  const index2 = allKeys.indexOf(note2);

  if (index1 === -1 || index2 === -1) {
    return ""; // Invalid note name
  }

  const distance = (index2 - index1 + allKeys.length) % allKeys.length;
  const intervalMapping: Record<number, string> = {
    0: "1",
    1: "b2",
    2: "2",
    3: "b3",
    4: "3",
    5: "4",
    6: "b5",
    7: "5",
    8: "b6",
    9: "6",
    10: "b7",
    11: "7",
  };

  return intervalMapping[distance];
};
