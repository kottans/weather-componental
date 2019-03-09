import Component from "../../framework/Component";
import {Temperature} from "../Temperature";
export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: Temperature,
        props: {
          temperature: 18,
          unit: 'K',
        },
      },
      {
        tag: Temperature,
        props: {
          temperature: 180,
          unit: 'K',
        },
      },
      {
        tag: Temperature,
        props: {
          temperature: 1800,
          unit: 'K',
        },
      },
    ];
  }
}
