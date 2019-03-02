import Component from "../../framework/Component";
export default class Temperature extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    return '7&deg;C';
  }
}
