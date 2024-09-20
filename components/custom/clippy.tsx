import { useEffect, useState } from "react";

const sprites = {
  standing: "path/to/standing.png",
  standingWithSpeechBubble: "path/to/standing_with_speech_bubble.png",
  leftSideWalk: [
    "path/to/left_side_walk_1.png",
    "path/to/left_side_walk_2.png",
    "path/to/left_side_walk_3.png",
    "path/to/left_side_walk_4.png",
  ],
  rightSideWalk: [
    "path/to/right_side_walk_1.png",
    "path/to/right_side_walk_2.png",
    "path/to/right_side_walk_3.png",
    "path/to/right_side_walk_4.png",
  ],
};

const Clippy = () => {
  const [position, setPosition] = useState(0);
  const [sprite, setSprite] = useState(sprites.standing);
  const [walking, setWalking] = useState(false);

  useEffect(() => {
    let walkInterval: NodeJS.Timeout;
    let speechTimeout: NodeJS.Timeout;

    const walk = (direction: "left" | "right") => {
      setWalking(true);
      let step = 0;
      walkInterval = setInterval(() => {
        setSprite(
          direction === "left"
            ? sprites.leftSideWalk[step % sprites.leftSideWalk.length]
            : sprites.rightSideWalk[step % sprites.rightSideWalk.length]
        );
        setPosition((prev) => prev + (direction === "left" ? -5 : 5));
        step++;
      }, 100);
    };

    const stopWalking = () => {
      clearInterval(walkInterval);
      setWalking(false);
      setSprite(sprites.standingWithSpeechBubble);
      speechTimeout = setTimeout(() => {
        setSprite(sprites.standing);
        walk("left");
      }, 5000);
    };

    if (position < window.innerWidth / 2 && !walking) {
      walk("right");
    } else if (position >= window.innerWidth / 2 && walking) {
      stopWalking();
    }

    return () => {
      clearInterval(walkInterval);
      clearTimeout(speechTimeout);
    };
  }, [position, walking]);

  return (
    <img
      src={sprite}
      alt="Clippy"
      style={{
        position: "fixed",
        left: `${position}px`,
        bottom: "50%",
        transform: "translateY(50%)",
      }}
    />
  );
};

export default Clippy;