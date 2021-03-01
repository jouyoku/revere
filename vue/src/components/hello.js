export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    msg2: String,
  },
  data: function () {
    return {
      msg3: this.msg2
    };
  }
}
