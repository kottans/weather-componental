import Component from "../../framework/Component";
import {PrettyNumber} from "../PrettyNumber";
import AppState from "../../Services/AppState";

export default class CountControls extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch('COUNT', this.updateMyself);
  }

  init() {
    ['increment', 'decrement', 'updateMyself']
      .forEach(methodName => this[methodName] = this[methodName].bind(this));
    this.state = {
      value: this.props.value * 2,
      quantifier: 7,
    };
  }

  updateMyself(subState) {
    // .... transform response
    console.log('PNumber in CountControls', subState);
    // do update
    this.updateState(subState);
  }

  render() {
    return [
      {
        tag: 'button',
        content: '-',
        eventHandlers: {
          click: this.decrement,
        },
      },
      {
        tag: 'button',
        content: '+',
        eventHandlers: {
          click: this.increment,
        },
      }

    ];
  }

  increment(){
    AppState.update('COUNT', {
      value: this.state.value + this.state.quantifier,
    });
  }

  decrement() {
    AppState.update('COUNT', {
      value: this.state.value - this.state.quantifier,
    });
  }
}
