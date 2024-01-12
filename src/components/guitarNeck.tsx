import * as React from "react";
import * as Style from "../styles/styles";
import "../styles/global.css";
import {
  pentatonicIndexes,
  triadIndexes,
  notesColor,
  notesData,
  strings,
  diatonicChords,
} from "../constants";
import { getInterval } from "../utils";

type GuitarNeckProps = {
  selectedKey: string;
  isRelative: boolean;
  isPentatonic: boolean;
  isTriads: boolean;
  mode: string;
  chord: number;
};
const GuitarNeck: React.FC<GuitarNeckProps> = ({
  selectedKey,
  isRelative,
  isPentatonic,
  isTriads,
  mode,
  chord
}) => {
  const renderFrets = (): JSX.Element[] =>
    Array.from({ length: 20 }, (_, index) => (
      <Style.Fret key={index}></Style.Fret>
    ));

  const renderFretNumber = (): JSX.Element[] =>
    Array.from({ length: 19 }, (_, index) => (
      <Style.FretNumber key={index} style={{ left: 30 + index * 80 }}>
        {index + 1}
      </Style.FretNumber>
    ));

  const renderDots = (): JSX.Element => (
    <Style.Dots>
      {[3, 5, 7, 9, 15, 17, 19].map((dot) => (
        <Style.Dot key={dot} style={{ left: 30 + (dot - 1) * 80 }}></Style.Dot>
      ))}
    </Style.Dots>
  );

  const renderDoubleDots = (): JSX.Element => (
    <Style.Dots>
      {[12].map((dot) => (
        <Style.DoubleDot
          key={dot}
          style={{ left: 30 + (dot - 1) * 80 }}
        ></Style.DoubleDot>
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

  const renderNotes = (
    notesOnAString: string[],
    stringIndex: number
  ): JSX.Element => (
    <Style.Notes>
      {notesOnAString.map((note, fretIndex) => {
        const relativeNote = getInterval(selectedKey, note);
        const displayNote =
          (!isRelative && !isPentatonic && !isTriads) ||
          (!isPentatonic && !isTriads && isRelative) ||
          (isPentatonic && pentatonicIndexes[mode].includes(relativeNote)) ||
          (isTriads && triadIndexes[mode].includes(relativeNote));
        const highlight = !!chord && diatonicChords[chord].includes(relativeNote)

        return (
          <Style.Note
            key={fretIndex}
            style={{
              display: displayNote ? "inline" : "none",
              top: 19 + stringIndex * 45,
              left: 120 + (fretIndex - 1) * 80,
              backgroundColor: highlight? "#dd2d4a" : notesColor[relativeNote],
            }}
          >
            {isRelative ? relativeNote : note}
          </Style.Note>
        );
      })}
    </Style.Notes>
  );

  return (
    <Style.NeckContainer>
      {renderFrets()}
      {renderDots()}
      {renderDoubleDots()}
      {renderStrings()}
      {renderOpenNotes()}
      {renderFretNumber()}
      {notesData.map((notes, index) => renderNotes(notes, index))}
    </Style.NeckContainer>
  );
};

export default GuitarNeck;
