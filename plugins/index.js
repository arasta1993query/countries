export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  const  separator = (value) => {
    return (+value || 0)
      .toString()
      .replace(/^-?\d+/g, m =>
        m.replace(/(?=(?!\b)(\d{3})+$)/g, ",")
      );
  }
  inject('separator', separator)
}
