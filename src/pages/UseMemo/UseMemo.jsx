/*
一、UseMemo重要概念
useMemo與React.memo
useMemo memorizes the result of an expensive calculation. useMemo 記住計算結果，不需要在每次渲染時都重複執行獲得一樣的結果。
React.memo memorizes components. React.memo 記憶組件。

useMemo與useCallback
useMemo memorizes the output of a function.
useMemo gives us the result of the function that it calls.
useMemo 記住函數輸出的結果，給我們調用函數的結果。
useCallback memorizes the function itself.
useCallback give us a function with referential equality that we can call later.
useCallback 記憶函數本身，給我們稍後可以調用的符合referential equality的函數。

useMemo is providing a memoried result from the expensive function and that is not needing to be recalculated every time
useMemo 提供了函數的結果記憶，如果值沒有變動不需要每次都重新計算。

When we use useMemo We actually use it when the returned value is not a primitive value.
For example arrays or objects.
當我們使用 useMemo 時，我們實際上用在回傳的值非primitive value時。

二、UseMemo使用範例

三、參考資料: https://www.youtube.com/watch?v=oR8gUi1LfWY
*/
import React, { useState, useEffect, useMemo, useCallback } from "react";

const expensiveFn1 = (n) => {
  return n <= 1 ? n : n * n;
};

const expensiveFn3 = () => {
  for (let i = 0; i < 100000000; i++) {
    // do something expencive
  }
  return [1, 2, 3, 4];
};

const UseMemo = () => {
  const [userInput, setuserInput] = useState("");
  const [userNumber, setuserNumber] = useState("");

  // useCallback返回一個memoized function的定義
  const expensiveFn2 = useCallback((n) => {
    return n <= 1 ? n : n * n;
  }, []);


  // useMemo 記住函數輸出的結果
  const result1 = useMemo(() => expensiveFn1(userNumber), [userNumber]);
  // expensiveFn1函數在組件外，不需要將其函數置於dependency array。

  const result2 = useMemo(
    () => expensiveFn2(userNumber),
    [userNumber, expensiveFn2],
  );
  // expensiveFn2函數在組件內，將其函數置於dependency array。

  const result3 = useMemo(() => expensiveFn3(), []);
  // expensiveFn3函數不在組件內，不需要將其函數置於dependency array。

  useEffect(() => {
    console.log("New result1");
  }, [result1]);

  useEffect(() => {
    console.log("New result2");
  }, [result2]);
  // 實際上在變動state觸發組件re-render時，會創造了新的expensiveFn2 function。
  // 但因result2回傳primitive value可辨識其是否真的變動，進而判斷是否執行result2的計算。

  useEffect(() => {
    console.log("New result3");
  }, [result3]);
  // 在變動state觸發組件re-render時，創造了新的expensiveFn3 function。
  // 且因result3回傳並非primitive value，因此會值續執行result3的計算。

  return (
    <main className="page-flex">
      <section>
        <h1>UseMemo</h1>
        <input
          type="number"
          placeholder="Enter a Number"
          value={userNumber}
          onChange={(e) => setuserNumber(e.target.value)}
        />
        <p>Number1: {result1 || "--"}</p>

        <br />
        <input
          type="text"
          placeholder="Rrandom Input"
          value={userInput}
          onChange={(e) => setuserInput(e.target.value)}
        />
      </section>
    </main>
  );
};

export default UseMemo;
