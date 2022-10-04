/**
 * 問題１：
 * setTimeoutの実行から１秒後にブラウザの
 * コンソールに'hello Tom'と表示されるように
 * 実装してみましょう。
 *
 * ※必ずperson.helloメソッドは解答内で使用してください。
 */
const person = {
  hello: function () {
    return "hello Tom";
  },
};

setTimeout(() => {
  const helloTom = person.hello();
  console.log(helloTom)
}, 1000)
