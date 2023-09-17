import React from 'react';
import './Button.css';

function Button({ text }) {
  return (
    <button
      id="button"
      type="submit"
      class=" absolute top-20 left-[45vw] w-[200px] h-[200px] text-center cursor-pointer leading-[2rem] text-[1.4em]  body-font font-Yeseva  hovicon effect-8"
    >
      <span className="btn_text">{text}</span>
    </button>
  );
}

export default Button;
