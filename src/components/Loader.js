import React from 'react';



function Loader({text, delay}) {
  const spans = [];

  for (let i = 0; i < text.length; i++) {
    const spanDelay = delay * i;
    const color = i % 2 === 0 ? "#fff" : "#00ed64";
    spans.push(
      <span
        key={i}
        style={{animationDelay: `${spanDelay}s`,color: color}}
      >
        {text.charAt(i)}
      </span>
    );
  }

  return (
    <div className="loader loaderText">
      {spans}
    </div>
  );
}
export default Loader;