import styled from "styled-components";

interface ButtonProps {
  isSelected?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.isSelected ? '#9b5de5' : '#bcb8b1')};
  color: white;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: #9b5de5 /* Darker gradient from pink to orange on hover */
  }
`;

export const BlueButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.isSelected ? '#ff9f1c' : '#bcb8b1')};
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: #ff9f1c; /* Darker gradient from blue to dark blue on hover */
  }
`;

export const NeckContainer = styled.div`
  position: relative;
  margin: 20px auto;
  width: var(--neck-width);
  height: var(--neck-height);
  background: linear-gradient(45deg, #5e3719, #b2a496); 
  box-shadow: inset -1px 0px 11px 0px rgba(0, 0, 0, 0.75);
`;

export const OpenNotesContainer = styled.ul`
  position: absolute;
  top: 10px;
  left: -35px;
`;

export const OpenNote = styled.li`
  margin-bottom: 21px;
  font-size: 18px;
  color: #fff;

  &.active {
    color: #fa990f;
  }
`;

export const FretNumber = styled.div`
  position: absolute;
  top: 260px;
`;

export const Fret = styled.div`
  float: left;
  width: 3px;
  height: var(--neck-height);
  background: #d7d6d6;
  margin-left: 75px;
  border-right: 2px solid #686868;

  &:first-child {
    position: absolute;
    width: 50px;
    left: -52px;
    top: 0;
    margin-left: 0;
    background: #211f1d;
  }
`;

export const Dots = styled.ul`
  position: absolute;
  width: 1200px;
  height: 20px;
  top: 44%;
`;

export const Dot = styled.li`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #383530;
`;

export const DoubleDot = styled.li`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #383530;
`;

export const Strings = styled.ul`
  position: absolute;
  left: 0;
  top: 20px;
  width: var(--neck-width);
  height: var(--neck-height);
`;

export const String = styled.li`
  height: 1px;
  display: inline-block;
  width: 100%;
  background: #c8bb93;
  margin-bottom: var(--gap-string);
  border-bottom: 2px solid #958963;
  box-sizing: border-box;

  &:nth-child(2) {
    height: 2px;
  }

  &:nth-child(3) {
    height: 3px;
  }

  &:nth-child(4) {
    height: 4px;
  }

  &:nth-child(5) {
    height: 5px;
  }

  &:nth-child(6) {
    height: 6px;
  }
`;

export const Notes = styled.ul`
  position: absolute;
  width: var(--neck-width);
  height: 258px;
  overflow-x: hidden;
`;

export const Note = styled.li`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: #fa990f;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const Config = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FeatureList = styled.ol`
    list-style-type: none;
    padding: 0;
`;

export const FeatureItem = styled.li`
    margin-bottom: 10px;
`;

export const SubFeatureList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`;

export const SubFeatureItem = styled.li`
    margin-bottom: 5px;
`;

export const HowToUseList = styled.ol`
    list-style-type: none;
    padding: 0;
`;

export const H1 = styled.h1`
    font-weight: 600;
    font-size: 1.8rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

export const H2 = styled.h2`
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
`;

export const HowToUseItem = styled.li`
    margin-bottom: 10px;
`;

export const SubHowToUseList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`;

export const SubHowToUseItem = styled.li`
    margin-bottom: 5px;
`;

export const Em = styled.em`
    color: #666;
`;

export const P = styled.p`
    font-weight: 400;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
`;