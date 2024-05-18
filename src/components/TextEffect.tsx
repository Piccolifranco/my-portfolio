"use client";
import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "FRONT-END DEVELOPER.",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "PROGRAMMER.",
        1000,
        "WEB DEVELOPER.",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-4xl font-semibold text-amber-700 dark:text-amber-500"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
