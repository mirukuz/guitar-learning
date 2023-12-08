import * as React from "react";
import "../styles/global.css";
import * as Style from "../styles/styles";
import type { HeadFC } from "gatsby";
import { allKeys } from "../constants";
import GuitarNeck from "../components/guitarNeck";
import { diatonicChords } from "../constants";

const IndexPage: React.FC = () => {
  const [bpm, setBpm] = React.useState<number>(120);
  const [beatCounter, setBeatCounter] = React.useState<number>(0);
  const [selectedKey, changeKey] = React.useState<string>("C");
  const [isRelative, setToRelative] = React.useState<boolean>(false);
  const [isPentatonic, setToPentatonic] = React.useState<boolean>(false);
  const [isTriads, setTriads] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<string>("ionian");
  const [chords, setChords] = React.useState<number[]>([1, 6, 2, 5]);
  const [currentChord, setCurrentChord] = React.useState<number>(0);
  const [counterActive, setCounterActive] = React.useState(false);

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (counterActive) {
      const interval = (60 / bpm) * 1000;

      intervalId = setInterval(() => {
        const chordNow = chords[beatCounter % 4];

        // Change text color to the user-selected color
        setCurrentChord(chordNow);

        // Increment beat counter
        setBeatCounter((prevCounter) => prevCounter + 1);
      }, interval);
    }

    // Clean up on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [bpm, beatCounter, chords, counterActive]);

  const handleBpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBpm = parseInt(e.target.value, 10);
    setBpm(newBpm);
  };

  const handleToggleCounter = () => {
    setCounterActive((prevActive) => !prevActive);

    if (!counterActive) {
      setBeatCounter(0);
      setCurrentChord(0);
    }
  };

  const handleChordChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newChord = parseInt(e.target.value);
    setChords((prevChord) => {
      const updatedChords = [...prevChord];
      updatedChords[index] = newChord;
      return updatedChords;
    });
  };

  return (
    <>
      <Style.Section>
        <Style.H1>Guitar neck visualiser</Style.H1>
      </Style.Section>
      <GuitarNeck
        selectedKey={selectedKey}
        isPentatonic={isPentatonic}
        isRelative={isRelative}
        isTriads={isTriads}
        mode={mode}
        chord={currentChord}
      />
      <Style.Config>
        <Style.Button
          isSelected={counterActive == true}
          onClick={handleToggleCounter}
        >
          Play with Chords
        </Style.Button>
        <div>
          <label htmlFor="bpmInput">BPM:</label>
          <input
            type="number"
            id="bpmInput"
            value={bpm}
            onChange={handleBpmChange}
            min="1"
            max="300"
          />
        </div>
        <p>Set Chords:</p>
        <div style={{ display: "flex" }}>
          {chords.map((chord, index) => (
            <div key={index}>
              <input
                type="number"
                max="7"
                min="1"
                value={chord}
                onChange={(e) => handleChordChange(index, e)}
              />
            </div>
          ))}
        </div>
        <p>Current Chord: {currentChord}</p>
      </Style.Config>
      <Style.Config>
        {allKeys.map((key) => (
          <Style.BlueButton
            isSelected={selectedKey === key}
            key={key}
            onClick={() => changeKey(key)}
          >
            {key}
          </Style.BlueButton>
        ))}
      </Style.Config>
      <Style.Config>
        <Style.Button
          isSelected={mode == "ionian"}
          onClick={() => setMode("ionian")}
        >
          Major Scale
        </Style.Button>
        <Style.Button
          isSelected={mode == "aeolian"}
          onClick={() => setMode("aeolian")}
        >
          Minor Scale
        </Style.Button>
        <Style.Button
          isSelected={isRelative}
          onClick={() => setToRelative(!isRelative)}
        >
          Relative Notes
        </Style.Button>
        <Style.Button
          isSelected={isPentatonic}
          onClick={() => setToPentatonic(!isPentatonic)}
        >
          Pentatonic Scale
        </Style.Button>
        <Style.Button
          isSelected={isTriads}
          onClick={() => setTriads(!isTriads)}
        >
          Triads
        </Style.Button>
      </Style.Config>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Interactive Guitar Visualiser</title>
    <meta
      name="google-site-verification"
      content="Wv55rN_tLL7O-6Rp0ZXis8O43Un4LsETGNniFItxrQ0"
    />
    <meta
      name="description"
      content="Explore the guitar neck with our interactive visualizer. Easily see all notes, play in different keys, and discover triads and pentatonic scales. Your ultimate guitar guide!"
    />
  </>
);

// TODO:
// 1. disable scale button and triad button if no use
// 2. add the wheel of fifth
// 3. make page responsive
// 4. diatonic chords
// 5. arpegio routes
// 6. ability to add more chords
// 7. display diatonic scale accordingly like C - 1 3 5
// 8. set bmp then auto play
