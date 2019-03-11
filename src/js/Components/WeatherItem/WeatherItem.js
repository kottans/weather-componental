import Component from "../../framework/Component";
import {Temperature} from "../Temperature";
import {Wind} from "../Wind";

export default class WeatherItem extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: 'div',
        content: 'Me weather item',
        classList: ['nice'],
        attributes: [
          {
            name: 'title',
            value: 'Me definitely nice div',
          },
        ],
        children: [
          ` for ${this.props.date}`,
        ],
      },
      {
        tag: Temperature,
        props: {
          temperature: this.props.temperature,
          unit: this.props.units === 'metric' ? 'C' : 'F',
        },
      },
      {
        tag: Wind,
        props: {
          speed: this.props.windSpeed,
          unit: this.props.units === 'metric' ? 'km/h' : 'mph',
        },
      },
    ];
  }
}
