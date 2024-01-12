import * as React from "react";
import "../styles/global.css";
import { allKeys } from "../constants";
import { Select, Stack, Button } from "@chakra-ui/react";

import GuitarNeck from "./guitarNeck";

const StatefulGuitarNeck: React.FC = () => {
  const [selectedKey, changeKey] = React.useState<string>("C");
  const [isRelative, setToRelative] = React.useState<boolean>(false);
  const [isPentatonic, setToPentatonic] = React.useState<boolean>(false);
  const [isTriads, setTriads] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<string>("ionian");
  const [currentChord, setCurrentChord] = React.useState<number>(0);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeKey(event.target.value);
  };

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
      {/* <Style.Config>
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
      </Style.Config> */}
      <Stack spacing={4} direction="row" align="center" justify="center" mt={{ base: "10px", md: "20px", lg: "30px" }}>
        <Select placeholder="Select Key" onChange={handleSelectChange} width="200px">
          {allKeys.map((key) => (
            <option value={key}>{key}</option>
          ))}
        </Select>
        <Button
          colorScheme="teal"
          variant={mode == "ionian" ? "solid" : "outline"}
          size="md"
          onClick={() => setMode("ionian")}
        >
          Major Scale
        </Button>
        <Button
          colorScheme="teal"
          variant={mode == "aeolian" ? "solid" : "outline"}
          size="md"
          onClick={() => setMode("aeolian")}
        >
          Minor Scale
        </Button>
        <Button
          colorScheme="teal"
          variant={isRelative ? "solid" : "outline"}
          size="md"
          onClick={() => setToRelative(!isRelative)}
        >
          Relative Notes
        </Button>
        <Button
          colorScheme="teal"
          variant={isPentatonic ? "solid" : "outline"}
          size="md"
          // isSelected={isPentatonic}
          onClick={() => setToPentatonic(!isPentatonic)}
        >
          Pentatonic Scale
        </Button>
        <Button
          colorScheme="teal"
          variant={isTriads ? "solid" : "outline"}
          size="md"
          onClick={() => setTriads(!isTriads)}
        >
          Triads
        </Button>
      </Stack>
    </>
  );
};

export default StatefulGuitarNeck;
