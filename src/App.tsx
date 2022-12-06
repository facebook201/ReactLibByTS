import React from 'react';

// 3. 子组件通过 forwardRef 获取 ref，并通过 ref 属性绑定 React 元素
const Child = React.forwardRef<HTMLInputElement>((props, ref) => (
  <input ref={ref} placeholder="value" />
));

class Parent extends React.Component {
    inputRef: any;
    constructor(props: any) {
        super(props)
        // 1. 创建 refs
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        setTimeout(() => {
            // 4. 使用 this.inputRef.current 获取子组件中渲染的 DOM 节点
            this.inputRef.current.value = 'new value'
        }, 2000)
    }
    render() {
        // 2. 传给子组件的 ref 属性
        return <Child ref={this.inputRef} />
    }
}

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
