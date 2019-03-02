import Component from "../../framework/Component";
import {Temperature} from "../Temperature/";
import {Wind} from "../Wind";

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    const t1 = document.createElement('div');
    new Temperature(t1, { temperature: 25, unit: 'C' });

    const w1 = document.createElement('div');
    new Wind(w1, { speed: 100500, unit: 'mph' });

    return [
      'Temperature range',
      t1,
      {
        tag: Temperature,
        props: {
          temperature: 7,
          unit: 'C',
        },
      },
      {
        tag: Temperature,
        props: {
          temperature: 18,
          unit: 'C',
        },
      },
      {
        tag: Wind,
        props: {
          speed: 250,
          unit: 'mph',
        },
      },
      w1,
    ];
  }
}
