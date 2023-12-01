import * as React from "react"
import "../styles/global.css"
import * as Style from "../styles/styles"
import type { HeadFC } from "gatsby"
const allKeys: string[] = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

interface KeyChart {
  [key: string]: string[];
}

interface NoteColor {
  [key: string]: string;
}

interface Modes {
  [mode: string]: KeyChart
}

interface Indexes {
  [mode: string]: string[]
}

const ionian: KeyChart = {
  "C": ["C", "D", "E", "F", "G", "A", "B", "C"],
  "G": ["G", "A", "B", "C", "D", "E", "Gb", "G"],
  "D": ["D", "E", "Gb", "G", "A", "B", "Db", "D"],
  "A": ["A", "B", "Db", "D", "E", "Gb", "Ab", "A"],
  "E": ["E", "Gb", "Ab", "A", "B", "Db", "Eb", "E"],
  "B": ["B", "Db", "Eb", "E", "Gb", "Ab", "Bb", "B"],
  "Gb": ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F", "Gb"],
  "Db": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C", "Db"],
  "Ab": ["Ab", "Bb", "C", "Db", "Eb", "F", "G", "Ab"],
  "Eb": ["Eb", "F", "G", "Ab", "Bb", "C", "D", "Eb"],
  "Bb": ["Bb", "C", "D", "Eb", "F", "G", "A", "Bb"],
  "F": ["F", "G", "A", "Bb", "C", "D", "E", "F"]
}

const aeolian: KeyChart = {
  "C": ["C", "D", "Eb", "F", "G", "Ab", "Bb", "C"],
  "G": ["G", "A", "Bb", "C", "D", "Eb", "F", "G"],
  "D": ["D", "E", "F", "G", "A", "Bb", "Db", "D"],
  "A": ["A", "B", "C", "D", "E", "F", "G", "A"],
  "E": ["E", "Gb", "G", "A", "B", "C", "D", "E"],
  "B": ["B", "Db", "D", "E", "Gb", "G", "A", "B"],
  "Ab": ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb", "Ab"],
  "Gb": ["Gb", "Ab", "A", "B", "Db", "D", "E", "Gb"],
  "Db": ["Db", "Eb", "Fb", "Gb", "Ab", "A", "Cb", "Db"],
  "Eb": ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db", "Eb"],
  "Bb": ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab", "Bb"],
  "F": ["F", "G", "Ab", "A", "C", "Db", "Eb", "F"],
}

const modes: Modes = {
  ionian,
  aeolian
}

const notesData: string[][] = [
  ['F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
  ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb'],
  ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D'],
  ['Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A'],
  ['Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E'],
  ['F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
];

const notesColor: NoteColor = {
  1: "#dd2d4a",
  2: "#f15bb5",
  3: "#ff9f1c",
  4: "#fee440",
  5: "#00bbf9",
  6: "#9b5de5",
  7: "#a7c957",
  "0": "#bcb8b1"
}

const pentatonicIndexes: Indexes = {
  ionian: ["1", "2", "3", "5", "6"],
  aeolian: ["1", "b3", "4", "5", "b7"]
}

const triadIndexes: Indexes = {
  ionian: ["1", "2", "3"],
  aeolian: ["1", "b3", "5"]
}

const getInterval = (note1: string, note2: string): string => {
  const index1 = allKeys.indexOf(note1);
  const index2 = allKeys.indexOf(note2);

  if (index1 === -1 || index2 === -1) {
    return ""; // Invalid note name
  }

  const distance = (index2 - index1 + allKeys.length) % allKeys.length;
  const intervalMapping: Record<number, string> = {
    0: '1',
    1: 'b2',
    2: '2',
    3: 'b3',
    4: '3',
    5: '4',
    6: 'b5',
    7: '5',
    8: 'b6',
    9: '6',
    10: 'b7',
    11: '7',
  };

  return intervalMapping[distance];
}

const getRelative = (key: string, note: string): string => {
  return getInterval(key, note)
};

const IndexPage: React.FC = () => {
  const [selectedKey, changeKey] = React.useState<string>('C');
  const [isRelative, setToRelative] = React.useState<boolean>(false);
  const [isPentatonic, setToPentatonic] = React.useState<boolean>(false);
  const [isTriads, setTriads] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<string>("ionian");
  const strings: string[] = ['e', 'b', 'g', 'd', 'a', 'e'];

  const renderFrets = (): JSX.Element[] =>
    Array.from({ length: 20 }, (_, index) => <Style.Fret key={index}></Style.Fret>);

  const renderFretNumber = (): JSX.Element[] =>
    Array.from({ length: 19 }, (_, index) => (
      <Style.FretNumber key={index} style={{ left: 30 + index * 80 }}>
        {index + 1}
      </Style.FretNumber>
    ));

  const renderDots = (): JSX.Element => (
    <Style.Dots>
      {[3, 5, 7, 9, 15, 17, 19].map(dot => (
        <Style.Dot key={dot} style={{ left: 30 + (dot - 1) * 80 }}></Style.Dot>
      ))}
    </Style.Dots>
  );

  const renderDoubleDots = (): JSX.Element => (
    <Style.Dots>
      {[12].map(dot => (
        <Style.DoubleDot key={dot} style={{ left: 30 + (dot - 1) * 80 }}></Style.DoubleDot>
      ))}
    </Style.Dots>
  );

  const renderStrings = (): JSX.Element => (
    <Style.Strings>
      {Array.from({ length: 6 }, (_, index) => (
        <Style.String key={index}></Style.String>
      ))}
    </Style.Strings>
  );

  const renderOpenNotes = (): JSX.Element => (
    <Style.OpenNotesContainer>
      {strings.map((string, index) => (
        <Style.OpenNote key={index} className={string}>
          {string.toUpperCase()}
        </Style.OpenNote>
      ))}
    </Style.OpenNotesContainer>
  );

  const renderNotes = (notesOnAString: string[], stringIndex: number): JSX.Element => (
    <Style.Notes>
      {notesOnAString.map((note, fretIndex) => {
        const relativeNote = getRelative(selectedKey, note);
        const displayNote =
          (!isRelative && !isPentatonic && !isTriads) ||
          (!isPentatonic && !isTriads && isRelative) ||
          (isPentatonic && pentatonicIndexes[mode].includes(relativeNote)) ||
          (isTriads && triadIndexes[mode].includes(relativeNote));

        return (
          <Style.Note
            key={fretIndex}
            style={{
              display: displayNote ? 'inline' : 'none',
              top: 19 + stringIndex * 42,
              left: 120 + (fretIndex - 1) * 80,
              backgroundColor: notesColor[relativeNote]
            }}
          >
            {isRelative ? relativeNote : note}
          </Style.Note>
        );
      })}
    </Style.Notes>
  );

  return (
    <>
      <Style.Section>

        <Style.H1>
          Guitar neck visualiser
        </Style.H1>
      </Style.Section>
      <Style.NeckContainer>
        {renderFrets()}
        {renderDots()}
        {renderDoubleDots()}
        {renderStrings()}
        {renderOpenNotes()}
        {renderFretNumber()}
        {notesData.map((notes, index) => renderNotes(notes, index))}
      </Style.NeckContainer>
      <Style.Config>
        {allKeys.map(key => (
          <Style.BlueButton isSelected={selectedKey === key} key={key} onClick={() => changeKey(key)}>
            {key}
          </Style.BlueButton >
        ))}
        <Style.Button isSelected={mode=="ionian"} onClick={() => setMode("ionian")}>
          Major Scale
        </Style.Button >
        <Style.Button isSelected={mode=="aeolian"} onClick={() => setMode("aeolian")}>
          Minor Scale
        </Style.Button >
        <Style.Button isSelected={isRelative} onClick={() => setToRelative(!isRelative)}>
          Relative Notes
        </Style.Button >
        <Style.Button isSelected={isPentatonic} onClick={() => setToPentatonic(!isPentatonic)}>
          Pentatonic Scale
        </Style.Button>
        <Style.Button isSelected={isTriads} onClick={() => setTriads(!isTriads)}>
          Triads
        </Style.Button >
      </Style.Config>
      <Style.Section>
        <Style.P>Unlock the world of guitar playing with our interactive guitar neck tool. Whether you're a beginner or an
          experienced guitarist, this tool is designed to enhance your musical journey. Explore the fretboard, learn
          notes, experiment with scales, and master the art of playing chords.</Style.P>


        <Style.FeatureList>
          <Style.FeatureItem>
            <Style.H2>Interactive Guitar Neck:</Style.H2>
            <Style.SubFeatureList>
              <Style.SubFeatureItem>Navigate the fretboard with ease.</Style.SubFeatureItem>
              <Style.SubFeatureItem>Visualize and understand the placement of notes.</Style.SubFeatureItem>
            </Style.SubFeatureList>
          </Style.FeatureItem>

          <Style.FeatureItem>
            <Style.H2>Scale Explorer:</Style.H2>
            <Style.SubFeatureList>
              <Style.SubFeatureItem>Choose a key and explore the pentatonic scale.</Style.SubFeatureItem>
              <Style.SubFeatureItem>Learn how to create captivating melodies.</Style.SubFeatureItem>
            </Style.SubFeatureList>
          </Style.FeatureItem>

          <Style.FeatureItem>
            <Style.H2>Triad Generator:</Style.H2>
            <Style.SubFeatureList>
              <Style.SubFeatureItem>Discover triads in different positions.</Style.SubFeatureItem>
              <Style.SubFeatureItem>Elevate your chord progressions.</Style.SubFeatureItem>
            </Style.SubFeatureList>
          </Style.FeatureItem>
        </Style.FeatureList>
      </Style.Section>

      <Style.Footer>
        <Style.P>Whether you're practicing scales, improvising, or composing, our interactive tool is here to guide you. Start
          your musical journey today!</Style.P>
        <Style.P><Style.Em>Note: Practice responsibly and enjoy the process of learning and creating music.</Style.Em></Style.P>
      </Style.Footer>
    </>
  );
};

export default IndexPage

export const Head: HeadFC = () =>
  <>
    <title>Interactive Guitar Visualiser</title>
    <meta name="google-site-verification" content="Wv55rN_tLL7O-6Rp0ZXis8O43Un4LsETGNniFItxrQ0" />
    <meta name="description" content="Explore the guitar neck with our interactive visualizer. Easily see all notes, play in different keys, and discover triads and pentatonic scales. Your ultimate guitar guide!" />
  </>
