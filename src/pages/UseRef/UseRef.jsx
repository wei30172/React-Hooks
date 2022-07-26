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
(三)注意事項
Kind of allows us access to the dom. If the developer starts grabbing the value of the input with useRef that is bad.
Do things in a reactful way, only use useRef to create a reference. Set focus is a prime example of reason do that.
useRef類似於我們操作dom的方式，應避免誤用useRef脫離一般react開發的模式。
只使用useRef來創建reference，Set focus是一適合使用useRef的典型範例。

二、useRef使用範例(包含用useRef建構計時器)

三、參考資料: https://www.youtube.com/watch?v=s6UAuFzL308
*/

import React, { useState, useRef } from "react";

const UseRef = () => {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);

  const renderCounts = useRef(0);
  const inputRef = useRef();
  const timerId = useRef(null);

  // 範例一
  const handlecahnge = (e) => {
    // 當此函數執行時，因State變動，會觸發組件re-render
    setRandomInput(e.target.value);
    // renderCounts紀錄render次數，但本身變動不觸發re-render
    renderCounts.current++;
  };

  // 範例二
  const focusOnInput = () => {
    inputRef.current.focus();
  };

  // 範例三
  const startTimer = () => {
    // 使用useRef持續記錄timerId
    timerId.current = setInterval(() => {
      // 當每秒執行一次此函數時，因State變動，會觸發組件re-render
      setSeconds((prev) => prev + 1);
      // renderCounts紀錄render次數，但本身變動不觸發re-render
      renderCounts.current++;
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renderCounts.current++;
      setSeconds(0);
    }
  };

  // useEffect(() => {
  //   focusOnInput()
  // },[])

  return (
    <div className="page-flex">
      <div>
        <h1>UseRef</h1>
        <h2>Renders: {renderCounts.current}</h2>
        <br />

        <h2>Input</h2>
        <input
          ref={inputRef}
          type="text"
          value={randomInput}
          placeholder="input"
          onChange={handlecahnge}
        />
        <br />
        <h3>User input: {randomInput}</h3>
        <br />

        <h2>Focus</h2>
        <button className="btn" onClick={focusOnInput}>
          Focus
        </button>
        <br />

        <h2>Timer</h2>
        <h3>Seconds: {seconds}</h3>
        <section className="flex">
          <button className="btn" onClick={startTimer}>
            Start
          </button>
          <button className="btn" onClick={stopTimer}>
            Stop
          </button>
          <button className="btn" onClick={resetTimer}>
            Reset
          </button>
        </section>
      </div>
    </div>
  );
};

export default UseRef;
