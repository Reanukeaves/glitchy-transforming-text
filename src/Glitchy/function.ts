import { useState, useEffect } from "react";

export type TransitionTextProps = {
  randCharDelay?: number;
  transitionDelay?: number;
  firstText: string;
  secondText: string;
  randomChars: string;
};

const TransitionText = ({
  firstText,
  secondText,
  randCharDelay,
  transitionDelay,
  randomChars
}: TransitionTextProps) => {
  const TRANSITION_DELAY = randCharDelay ? randCharDelay : 80; // delay in ms between each character transition 
  const REPEAT_DELAY = transitionDelay ? transitionDelay  : 4500; // delay in ms before repeating the entire effect
  const TRANSITION_CHARS = randomChars; // transition characters
  const [text, setText] = useState(secondText);

  useEffect(() => {
    let repeatInterval = setInterval(() => {
      const maxLength = Math.max(firstText.length, secondText.length);
      let i = 0;
      let transitionInterval = setInterval(() => {
        const destination = text === secondText ? firstText : secondText;
        // if all characters have been transitioned, clear interval and update text with destination text
        if (i >= maxLength) {
          clearInterval(transitionInterval);
          setText(destination);
          return;
        }

        // randomly select a transition character
        const transitionChar =
          TRANSITION_CHARS[Math.floor(Math.random() * TRANSITION_CHARS.length)];
        // update text with transition character
        setText(
          (prevText) =>
            prevText.substr(0, i) + transitionChar + prevText.substr(i + 1)
        );
        // increment counter
        i++;
      }, TRANSITION_DELAY);
    }, REPEAT_DELAY);

    // clear interval on unmount
    return () => clearInterval(repeatInterval);
  }, [firstText, secondText, text]);

  return text;
};

export default TransitionText;
