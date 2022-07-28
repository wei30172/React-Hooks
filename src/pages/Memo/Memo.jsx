/*
一、React.memo重要概念
useMemo memorizes the result of an expensive calculation. useMemo 記住計算結果，不需要在每次渲染時都重複執行獲得一樣的結果。
React.memo memorizes components. React.memo 記憶組件。

React.memo returns a new component after it wraps the component it received.
React.memo 在收到组件后返回一个新组件。

When We talk about React.memo it's not traditional memoization.
It does not keep this huge cache of props received in the past.
當我們談論 React.memo 時，它不是傳統的 memoization。它不會保留之前收到的(數量龐大的)props。


it just looks at the previous one: previous props vs. its receiving. (Change if props changed)
它著重在比較先前的props與收到的props的差異。當兩者不同時才更新。

二、React.memo使用範例

三、參考資料: https://www.youtube.com/watch?v=oR8gUi1LfWY
*/

import React from "react";
import { TodoList } from "../../components";
import "./Memo.scss";

const Memo = () => {
  return (
    <main className="memo-page">
      <section>
        <h1>React.memo</h1>
        <TodoList />
      </section>
    </main>
  );
};

export default Memo;
