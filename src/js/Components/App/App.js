import Component from "../../framework/Component";
import {Temperature} from "../Temperature/";

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    const t1 = document.createElement('div');
    new Temperature(t1);
    const t2 = document.createElement('div');
    new Temperature(t2);

    return ['Temperature range', t1, t2];
  }
}
