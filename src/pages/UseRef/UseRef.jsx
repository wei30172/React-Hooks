import React, { useState, useRef } from "react";

/*
一、useRef 與 useState的差別
(一)useRef重要規則
1. The value stays the same between renders.
渲染之間的值保持不變。
2. Updating the reference does not trigger a re-render.
更新ref不會觸發重新渲染。
(二)兩者差別
Updating the state triggers a re-render of the component.
更新state會觸發組件的重新渲染。

二、用useRef建構計數器
*/

const UseRef = () => {
  const [randomInput, setRandomInput] = useState("");
  const renderCounts = useRef(0);

  const handlecahnge = (e) => {
    // 當此函數執行時，因為State變動，所以會觸發該組件re-render
    setRandomInput(e.target.value);
    renderCounts.current++;
  };

  return (
    <div className="page-flex">
      <div>
        <h1>UseRef</h1>
        <a href="https://www.youtube.com/watch?v=s6UAuFzL308">
          <p className="btn">reference</p>
        </a>
        <input
          type="text"
          value={randomInput}
          placeholder="input"
          onChange={handlecahnge}
        />
        <br />
        <h3>Input {randomInput}</h3>
        <h3>Renders {renderCounts.current}</h3>
      </div>
    </div>
  );
};

export default UseRef;
