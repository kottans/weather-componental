export default class Component {
  constructor(host, props = {}) {
    this.host = host;
    this.props = props;
    this.init();
    this._render();
  }
  init() {
  }
  updateState(stateDelta) {
    this.state = Object.assign({}, this.state, stateDelta);
    console.log(this.constructor.name + '.updateState', stateDelta, this.state);
    this._render();
  }
  _render() {
    this.host.innerHTML = "";
    let content = this.render();

    if (!Array.isArray(content)) {
      content = [ content ];
    }

    // console.log(content);

    content.map(item => this._vDomPrototypeElementToHtmlElement(item)) // [string|HTMLElement] => [HTMLElement]
      .forEach(htmlElement => {
        console.log(this.constructor.name + '_render() pre-append element', htmlElement, this.host);
        if (Array.isArray(htmlElement)) this.host.append(...htmlElement); else this.host.append(htmlElement);
        console.log(this.constructor.name + '_render() post-append element', htmlElement, this.host);

      });
  }
  /* @returns {string|[string|HTMLElement|Component]} */
  render() {
    return 'OMG! They wanna see me!!!!!! Aaaaaa';
  }

  /**
   *
   * @param {string|HTMLElement|Object} element
   * @private
   */
  _vDomPrototypeElementToHtmlElement(element) {
    if (typeof element === 'string') {
      let container;
      const containsHtmlTags = /[<>&]/.test(element);
      if (containsHtmlTags) {
        const dirtyTrickContainer = document.createElement('div'); // fake div, never actually used
        dirtyTrickContainer.innerHTML = element;
        container = Array.from(dirtyTrickContainer.childNodes);
      } else {
        container = document.createTextNode(element);
      }
      return container;
    } else {
      if (element.tag) {
        if (typeof element.tag === 'function') {

          const container = // document.createDocumentFragment();
            document.createElement(element.containerTag || 'div');
          new element.tag(container, element.props);
          console.log('render component', container.childNodes);

          return container;
        } else {
          // string
          const container = document.createElement(element.tag);
          if (element.content !== undefined) {
            container.innerHTML = element.content;
          }

          // ensure following element properties are Array
          ['classList', 'attributes', 'children'].forEach(item => {
            if (element[item] && !Array.isArray(element[item])) {
              element[item] = [element[item]];
            }
          });
          if (element.classList) {
            container.classList.add(...element.classList);
          }
          if (element.attributes) {
            element.attributes.forEach(attributeSpec => {
              container.setAttribute(attributeSpec.name, attributeSpec.value);
            });
          }

          // process eventHandlers
          if (element.eventHandlers) {
            Object.keys(element.eventHandlers).forEach(eventType => {
              container.addEventListener(eventType, element.eventHandlers[eventType]);
            });
          }

          // process children
          if (element.children) {
            element.children.forEach(el => {
              const htmlElement = this._vDomPrototypeElementToHtmlElement(el);
              if (Array.isArray(htmlElement)) this.host.append(...htmlElement); else this.host.append(htmlElement);
              // container.appendChild(htmlElement);
            });
          }

          return container;
        }
      }
      return element;
    }
  }
}
