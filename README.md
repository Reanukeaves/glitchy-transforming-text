![image](https://github.com/Reanukeaves/glitchy-transforming-text/blob/main/util/glitchyText.gif)

# Glitchy - A React component for cycling between texts with a glitch effect

Glitchy is a visual React component that allows you to cycle between two texts using a nice glitchy effect. It is a part of a cyberpunk-inspired React library I'm currently working on.

# Installation

```bash
    npm i glitchy-transforming-text
```

## Getting Started

To start using Glitchy, you can simply import it and use it as a component.

```js
import Glitchy from "glitchy-transforming-text";

<Glitchy transitionText="技術スタック">stack</Glitchy>;
```

## Props

- `transitionText`: _(string)_ The text you want to transition to. Required.
- `transitionDelay`: _(number)_ The delay (in milliseconds) before repeating the entire effect. The default is 4500.
- `displayType`: _("inline" | "block")_ The chosen display. Optional. The default is "inline".
- `className`: _(string)_ Optional. Add a classname to the parent div. The default is nothing.
- `randomChars`: _(string)_ Optional. The characters to use during the transition. The default is '~!@#$%^&\*\_-+=[]{}|;:",.<>?/¡£¢∞§¶•ªº–≠œ∑´®†¥¨ˆøπ‘“«åß∂ƒ©˙∆˚¬…æ≈ç√≤≥÷ʡ℅µ№▧▦▤▥▨▩█▪▫☗☖♠♣♧♡♢♤♧♨♪♫♬'
- `typography`: \_("h1" | "h2" | "h3" | "h4" | "p") Changes the text's wrapper tag. Optional. The default is "p".

### Example

```js
<Glitchy
  transitionText="技術スタック"
  typography="h1"
  className="neon"
  transitionDelay={100}
  randCharDelay={3000}
>
  stack
</Glitchy>
```

## Notes

Feel free to fork and submit pull requests
