interface KeyChart {
  [key: string]: string[];
}

interface NoteColor {
  [key: string]: string;
}

interface Modes {
  [mode: string]: KeyChart;
}

interface Indexes {
  [mode: string]: string[];
}

export const strings: string[] = ["e", "b", "g", "d", "a", "e"];

export const allKeys: string[] = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

export const ionian: KeyChart = {
  C: ["C", "D", "E", "F", "G", "A", "B", "C"],
  G: ["G", "A", "B", "C", "D", "E", "Gb", "G"],
  D: ["D", "E", "Gb", "G", "A", "B", "Db", "D"],
  A: ["A", "B", "Db", "D", "E", "Gb", "Ab", "A"],
  E: ["E", "Gb", "Ab", "A", "B", "Db", "Eb", "E"],
  B: ["B", "Db", "Eb", "E", "Gb", "Ab", "Bb", "B"],
  Gb: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F", "Gb"],
  Db: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C", "Db"],
  Ab: ["Ab", "Bb", "C", "Db", "Eb", "F", "G", "Ab"],
  Eb: ["Eb", "F", "G", "Ab", "Bb", "C", "D", "Eb"],
  Bb: ["Bb", "C", "D", "Eb", "F", "G", "A", "Bb"],
  F: ["F", "G", "A", "Bb", "C", "D", "E", "F"],
};

export const aeolian: KeyChart = {
  C: ["C", "D", "Eb", "F", "G", "Ab", "Bb", "C"],
  G: ["G", "A", "Bb", "C", "D", "Eb", "F", "G"],
  D: ["D", "E", "F", "G", "A", "Bb", "Db", "D"],
  A: ["A", "B", "C", "D", "E", "F", "G", "A"],
  E: ["E", "Gb", "G", "A", "B", "C", "D", "E"],
  B: ["B", "Db", "D", "E", "Gb", "G", "A", "B"],
  Ab: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb", "Ab"],
  Gb: ["Gb", "Ab", "A", "B", "Db", "D", "E", "Gb"],
  Db: ["Db", "Eb", "Fb", "Gb", "Ab", "A", "Cb", "Db"],
  Eb: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db", "Eb"],
  Bb: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab", "Bb"],
  F: ["F", "G", "Ab", "A", "C", "Db", "Eb", "F"],
};

export const modes: Modes = {
  ionian,
  aeolian,
};

export const notesData: string[][] = [
  [
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ],
  [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
  ],
  [
    "Ab",
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
  ],
  [
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
  ],
  [
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
  ],
  [
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ],
];

// export const notesColor: NoteColor = {
//   1: "#dd2d4a",
//   2: "#f15bb5",
//   3: "#ff9f1c",
//   4: "#fee440",
//   5: "#00bbf9",
//   6: "#9b5de5",
//   7: "#a7c957",
//   "0": "#bcb8b1",
// };

export const notesColor: NoteColor = {
  1: "#dd2d4a",
  // 2: "#dd2d4a",
  // 3: "#dd2d4a",
  // 4: "#dd2d4a",
  // 5: "#dd2d4a",
  // 6: "#dd2d4a",
  // 7: "#dd2d4a",
  // 0: "#dd2d4a",
};

export const pentatonicIndexes: Indexes = {
  ionian: ["1", "2", "3", "5", "6"],
  aeolian: ["1", "b3", "4", "5", "b7"],
};

export const triadIndexes: Indexes = {
  ionian: ["1", "3", "5"],
  aeolian: ["1", "b3", "5"],
};

export const diatonicChords: Indexes = {
  1: ["1", "3", "5"],
  2: ["2", "4", "6"],
  3: ["3", "5", "7"],
  4: ["4", "6", "1"],
  5: ["5", "7", "2"],
  6: ["6", "1", "3"],
  7: ["7", "2", "4"]
};
