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

const majorScaleInEachKey: KeyChart = {
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
const getRelative = (key: string, note: string): number => {
  const scale = majorScaleInEachKey[key];
  const noteIndex = scale.indexOf(note);

  return noteIndex + 1;
};

const IndexPage: React.FC = () => {
  const [selectedKey, changeKey] = React.useState<string>('C');
  const [isRelative, setToRelative] = React.useState<boolean>(false);
  const [isPentatonic, setToPentatonic] = React.useState<boolean>(false);
  const [isTriads, setTriads] = React.useState<boolean>(false);
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
          (!isRelative && !isPentatonic && !isTriads ) ||
          (!isPentatonic && !isTriads && isRelative && relativeNote > 0 && relativeNote < 8) ||
          (isPentatonic && [1, 2, 3, 5, 6].includes(relativeNote)) ||
          (isTriads && [1, 3, 5].includes(relativeNote));

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
      <h1>
        Guitar neck visualiser
      </h1>
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
      </Style.Config>
      <Style.Config>
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
    </>
  );
};

export default IndexPage

export const Head: HeadFC = () =>
  <>
    <title>Guitar neck visualizer | Interactive CAGED System | Pentatonic Scale | Triads</title>
    <meta name="google-adsense-account" content="ca-pub-7208801641886266" />
  </>
