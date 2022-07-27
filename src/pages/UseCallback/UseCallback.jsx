/*
一、useCallback重要概念: Referential Equality
(一)什麼是Referential Equality?
123 === 123 // true
"React" === "React" // true
{} === {} // false
[] === [] // false
It occupies a different space of memory. (does not have referential equality)
後兩者(typeof Object)雖然看起來相同，但實際上占用不同的内存空间(不符合eferential equality)。

(二)Memorized Function
function ff() { return () => "React" }
const react1 = ff()
const react2 = ff()
react1 === react2 // false
when React re-renders a component it recreates these functions. (does not have referential equality)
當 React 重新渲染組件時，會重新創建這些函數，即使他們看起來一樣且來源一致(因不符合ferential equality)。
useCallback return a definition of a memorized function.
useCallback返回一個memoized function的定義。

二、useCallback使用範例

三、參考資料: https://www.youtube.com/watch?v=FB_kOSHk1DM
*/

import React, { useState, useEffect, useCallback } from "react";

const UseCallback = () => {
  const [userInput, setuserInput] = useState("");
  const [result, setResult] = useState(0);
  const [arrResult, setArrResult] = useState([]);

  const [num1] = useState(4);
  const [num2] = useState(5);

  // const sum = () => num1 + num2;
  // 在變動state觸發組件re-render時，創造了新的sum function，引發useEffect的運行(sum變動)，執行log。

  const sum = useCallback(() => num1 + num2, [num1, num2]);
  // 將num1, num2置於dependency array
  // 即使在Input中輸入資料變動userInput state，也不會再產生新的function，因此也不會引發useEffect的運行。

  useEffect(() => {
    console.log(`New sum: ${sum()}`);
    setResult(sum());
    // React useState 辨識其為相同的 primitive value 因此沒有觸發 endless loop。
    // 但在邏輯上其造成endless Loop，因為setResult變動state觸發re-render=>創造新sum=>運行useEffect=>變動state=>創造新sum...
  }, [sum]);

  // const buildArray = () => [num1, num2];
  // 在變動state觸發組件re-render時，創造了新的buildArray function，引發useEffect的運行(buildArray變動)，執行log。

  const buildArray = useCallback(() => [num1, num2], [num1, num2]);
  // 將num1, num2置於dependency array
  // 即使在Input中輸入資料變動userInput state，也不會再產生新的function，因此也不會引發useEffect的運行。

  useEffect(() => {
    console.log(`New array: ${buildArray()}`);
    setArrResult(buildArray());
    // array並非primitive data type，React useState辨識更動後的值不相同，引發無限loop。
    // ！The endless rendering loop problem.
  }, [buildArray]);

  return (
    <main className="page-flex">
      <section>
        <h1>useCallback</h1>
        <input
          type="text"
          placeholder="input"
          value={userInput}
          onChange={(e) => setuserInput(e.target.value)}
        />
      </section>
    </main>
  );
};

export default UseCallback;
