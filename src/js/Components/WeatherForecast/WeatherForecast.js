import Component from "../../framework/Component";
import {WeatherItem} from "../WeatherItem";

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
    // this.onClick = this.onClick.bind(this);
  }

  render() {
    return [
      ...this.props.forecast.map(dayFC => ({
        tag: WeatherItem,
        props: dayFC,
      })),
    ];
  }
}
