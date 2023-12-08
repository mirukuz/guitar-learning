import * as React from "react";
import "../styles/global.css";
import * as Style from "../styles/styles";
import { allKeys } from "../constants";
import GuitarNeck from "./guitarNeck";

const StatefulGuitarNeck: React.FC = () => {
  const [selectedKey, changeKey] = React.useState<string>("C");
  const [isRelative, setToRelative] = React.useState<boolean>(false);
  const [isPentatonic, setToPentatonic] = React.useState<boolean>(false);
  const [isTriads, setTriads] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<string>("ionian");
  const [currentChord, setCurrentChord] = React.useState<number>(0);

  return (
    <>
      <GuitarNeck
        selectedKey={selectedKey}
        isPentatonic={isPentatonic}
        isRelative={isRelative}
        isTriads={isTriads}
        mode={mode}
        chord={currentChord}
      />
      <Style.Config>
        <p>Set Chords:</p>
        <div style={{ display: "flex" }}>
          <div>
            <input
              type="number"
              max="7"
              min="1"
              value={currentChord}
              onChange={(e) => setCurrentChord(parseInt(e.target.value))}
            />
          </div>
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

export default StatefulGuitarNeck;
