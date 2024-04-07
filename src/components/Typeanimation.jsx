import { TypeAnimation } from 'react-type-animation';

const Typeanimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Welcome to Typing Verse',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Hit Enter to Start',
        1000,
        'Top Users on LeaderBoard',
        1000,
      ]}
      speed={50}
      className="text-4xl text-black font-bold uppercase "
      repeat={Infinity}
    />
  );
};

export default Typeanimation;