
## ReactAPI说明文档

#### forwardRef

**获取组件实例，调用实例方法。forwardRef也做不到，借助 forwardRef 后，我们也就是跟类组件一样，可以在组件上使用 ref 属性，然后将 ref 绑定到具体的 DOM 元素或者 class 组件上，也就是我们常说的 Refs 转发**

#### Refs 转发
有的时候，我们开发一个组件，这个组件需要对组件使用者提供一个 ref 属性，用于让组件使用者获取具体的 DOM 元素，我们就需要进行 Refs 转发

```tsx
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
```

**尤其是在我们编写高阶组件的时候，往往要实现 refs 转发。我们知道，一个高阶组件，会接受一个组件，返回一个包裹后的新组件，从而实现某种功能的增强。但也正是如此，我们添加 ref，获取的会是包裹后的新组件的实例，而非被包裹的组件实例，这就可能会导致一些问题。**

#### createRef

```tsx
// 简化后
export function createRef() {
  const refObject = {
    current: null,
  };
  return refObject;
}
```