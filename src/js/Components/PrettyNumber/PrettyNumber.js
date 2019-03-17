import Component from "../../framework/Component";
import AppState from "../../Services/AppState";

export default class PrettyNumber extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch('COUNT', this.updateMyself);
  }

  updateMyself(subState) {
    // .... transform response
    console.log('PNumber', subState);
    // do update
    this.updateState(subState);
  }

  init() {
    this.updateMyself = this.updateMyself.bind(this);
    this.state = {
      value: 13,
    };
  }

  render() {
    return this.state.value !== undefined ? [
      {
        tag: 'div',
        content: this.state.value,
        classList: 'even-nicer',
      },
    ] : '';
  }
}
