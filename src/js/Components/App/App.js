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
        // children: [], -- illegal
      },
      {
        tag: 'div',
        content: 'Me div',
        classList: ['nice'],
        attributes: [
          {
            name: 'title',
            value: 'Me definitely nice div',
          },
        ],
      },
      {
        tag: 'div',
        content: 'I am a parent div',
        attributes: [
          {
            name: 'title',
            value: 'I have got children',
          },
        ],
        children: [
          {tag:'div', content:'Child 1'},
          {
            tag:'div',
            content:'Child 2',
            children: [
              {tag:'div', content:'Child 2.1'},
              {tag:'div', content:'Child 2.2'},
              {tag:Temperature, props: {temperature:100, unit: 'K',}}
            ],
          },
          {tag:'div', content:'Child 3'},
          {
            tag: 'input',
            eventHandlers: [
              {
                eventType: 'change',
                // handler: this.handleChange, // bind(this): constructor(){this.method = this.method.bind(this);}
              },
            ],
          },
        ],
      }, // <div title="I have got children"><div>Child 1</dev><div>Child 2<d2.1/><d2.2/></dev><div>Child 2</dev> </div>
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
