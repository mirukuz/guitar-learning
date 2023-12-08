import * as React from "react";
import * as Style from "../styles/styles";

export default () => (
  <Style.Section>
    <Style.P>
      Unlock the world of guitar playing with our interactive guitar neck tool.
      Whether you're a beginner or an experienced guitarist, this tool is
      designed to enhance your musical journey. Explore the fretboard, learn
      notes, experiment with scales, and master the art of playing chords.
    </Style.P>

    <Style.FeatureList>
      <Style.FeatureItem>
        <Style.H2>Interactive Guitar Neck:</Style.H2>
        <Style.SubFeatureList>
          <Style.SubFeatureItem>
            Navigate the fretboard with ease.
          </Style.SubFeatureItem>
          <Style.SubFeatureItem>
            Visualize and understand the placement of notes.
          </Style.SubFeatureItem>
        </Style.SubFeatureList>
      </Style.FeatureItem>

      <Style.FeatureItem>
        <Style.H2>Scale Explorer:</Style.H2>
        <Style.SubFeatureList>
          <Style.SubFeatureItem>
            Choose a key and explore the pentatonic scale.
          </Style.SubFeatureItem>
          <Style.SubFeatureItem>
            Learn how to create captivating melodies.
          </Style.SubFeatureItem>
        </Style.SubFeatureList>
      </Style.FeatureItem>

      <Style.FeatureItem>
        <Style.H2>Triad Generator:</Style.H2>
        <Style.SubFeatureList>
          <Style.SubFeatureItem>
            Discover triads in different positions.
          </Style.SubFeatureItem>
          <Style.SubFeatureItem>
            Elevate your chord progressions.
          </Style.SubFeatureItem>
        </Style.SubFeatureList>
      </Style.FeatureItem>
    </Style.FeatureList>
  </Style.Section>
);
