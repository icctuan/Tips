// 双向绑定，页面上有一个input框，对象inputValue.value和input框的值绑定变化，并在控制台打印值
// <input id="example" />

const dom = document.getElementById('example')
const inputValue = {
  _value: undefined,
  set value(val) {
    this._value = val
    console.log(val)
    dom.value = val
  },
  get value() {
    return this._value
  }
}
dom.oninput = (e) => {
  const { value } = e.target
  inputValue.value = value
}