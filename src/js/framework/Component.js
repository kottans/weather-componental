export default class Component {
  constructor(host) {
    this.host = host;
    this._render();
  }
  _render() {
    this.host.innerHTML = "";
    const content = this.render();

    if (typeof content === 'string') {
      this.host.innerHTML = content;
    } else {
      content.map(item => {
        if (typeof item === 'string') {
          const htmlElement = document.createElement('div');
          htmlElement.innerHTML = item;
          return htmlElement;
        } else {
          return item;
        }
      }) // [string|HTMLElement] => [HTMLElement]
        .forEach(htmlElement => {
          this.host.appendChild(htmlElement);
        });
    }
  }
  /* @returns {string|[string|HTMLElement]} */
  render() {
    return 'OMG! They wanna see me!!!!!! Aaaaaa';
  }
}
