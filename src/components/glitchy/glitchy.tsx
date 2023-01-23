import * as React from "react";
import TransitionText from "./function";

export interface GlitchyProps {
  children: string;
  randCharDelay?: number;
  transitionDelay?: number;
  transitionText: string;
  displayType?: "inline" | "block";
  className?: string;
  randomChars?: string;
  typography?: "h1" | "h2" | "h3" | "h4" | "p";
}

const Glitchy = (props: GlitchyProps) => {
  const randomChars =
    props.randomChars ||
    '~!@#$%^&*_-+=[]{}|;:",.<>?/¡£¢∞§¶•ªº–≠œ∑´®†¥¨ˆøπ‘“«åß∂ƒ©˙∆˚¬…æ≈ç√≤≥÷ʡ℅µ№▧▦▤▥▨▩█▪▫☗☖♠♣♧♡♢♤♧♨♪♫♬'; // default random chars
  const result = TransitionText({
    firstText: props.children,
    secondText: props.transitionText,
    randCharDelay: props?.randCharDelay,
    transitionDelay: props?.transitionDelay,
    randomChars,
  });

  const displayType =
    props.displayType === "inline" || props.displayType === "block"
      ? props.displayType
      : "inline";

  const typographyWrapper = (result: string) => {
    switch (props.typography) {
      case "h1":
        return <h1>{result}</h1>;
      case "h2":
        return <h2>{result}</h2>;
      case "h3":
        return <h3>{result}</h3>;
      case "h4":
        return <h4>{result}</h4>;
      case "p":
        return <p>{result}</p>;
      default:
        return <p>{result}</p>;
    }
  };
  const final = typographyWrapper(result);
  return (
    <div style={{ display: displayType }} className={props.className}>
      {final}
    </div>
  );
};

export default Glitchy;
