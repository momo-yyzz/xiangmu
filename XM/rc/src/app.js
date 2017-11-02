import React from 'react';
import ReactDOM from 'react-dom';
// jsx
let jsx = (
    <div>
        <span>React</span>
    </div>
);

// d
// 用一个对象描述的内容来创建 dom 结构, 把这些 dom 元素插入到 容器 里面
// jsx === virtual DOM
ReactDOM.render(
    jsx,
    document.getElementById('root')
);
