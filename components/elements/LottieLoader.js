import React, { useState } from 'react';
import Lottie from 'react-lottie';
import Pinjump from '../lottieLoader/loader.json';

const LottieControl = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const buttonStyle = {
    display: 'block',
    margin: '10px auto'
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Pinjump,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={80}
        width={80}
        isStopped={isStopped}
        isPaused={isPaused}
      />
      {/* <button style={buttonStyle} onClick={() => setIsStopped(true)}>stop</button>
      <button style={buttonStyle} onClick={() => setIsStopped(false)}>play</button>
      <button style={buttonStyle} onClick={() => setIsPaused(!isPaused)}>pause</button> */}
    </div>
  );
};

export default LottieControl;
