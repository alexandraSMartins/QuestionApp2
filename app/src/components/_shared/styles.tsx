import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  fontSize?: string;
  alignSelf?: "center" | "flex-start" | "flex-end";
}

interface TextProps extends Props {}
export const Text = styled.p<TextProps>`
  font-size: 12px;
  text-align: center;
  color: darkgray;
`;

interface TitleProps extends Props {}
export const Title = styled.h1<TitleProps>`
  font-size: 18px;
  text-align: center;
  color: darkgray;
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "flex-start")};
`;

interface FlexProps extends Props {
  direction?: "column" | "row";
}
export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "flex-start")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
`;

export const PaddedContainer = styled.div`
  padding: 1em;
`;

interface ButtonProps extends Props {
  borderRadius?: string;
}
export const Button = styled.button<ButtonProps>`
  background-color: gray;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
  padding: 2px;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "4px"};
  width: ${(props) => (props.width ? props.width : "6em")};
  height: ${(props) => (props.height ? props.height : "2em")};
  transition-duration: 0.4s;
  cursor: pointer;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  &:hover {
    background-color: lightgray;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: lightgray;
  }
`;
