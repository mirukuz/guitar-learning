import * as React from "react";
import "../styles/global.css";
import * as Style from "../styles/styles";
import type { HeadFC } from "gatsby";
import StatefulGuitarNeck from "../components/StatefulGuitarNeck";

const IndexPage: React.FC = () => {
  const [componentCount, setComponentCount] = React.useState<number>(1);

  const handleDuplicate = () => {
    setComponentCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <Style.Section>
        <Style.H1>Guitar neck visualiser</Style.H1>
      </Style.Section>
      <Style.Config>
        <Style.Button onClick={handleDuplicate}>Add New</Style.Button>
      </Style.Config>
      {Array.from({ length: componentCount }, (_, index) => (<StatefulGuitarNeck />))}
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
