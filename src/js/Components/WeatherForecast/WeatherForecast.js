import Component from "../../framework/Component";
import {WeatherItem} from "../WeatherItem";

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
    // this.onClick = this.onClick.bind(this);
  }

  init() {
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log('Wow! Me clicked!!!!!');
  }

  render() {
    return [
      ...this.props.forecast.map(dayFC => ({
        tag: WeatherItem,
        props: dayFC,
      })),
      {
        tag: 'button',
        content: 'Click me!',
        eventHandlers: {
            click: this.onClick,
          },
      },

    ];
  }
}
