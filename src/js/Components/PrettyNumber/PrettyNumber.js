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
      value: this.props.value,
    };
  }

  render() {
    const element = this.state.value !== undefined ? [
      {
        tag: 'span',
        content: this.state.value,
        classList: 'even-nicer',
      },
      {
        tag: 'span',
        content: 'I am not a number! I am a digital (numeric) personality!'
      },
    ] : '';

    console.log('PN render', element);
    return element;
  }
}
