import * as React from 'react';
import { PureComponent } from 'react';

let Level = (num) => {
  if (num == null) { return 'Неизвестно' }
  if (num <= 50) { return 'Низкий уровень' }
  if (num > 50 && num <= 100) { return 'Умереный уровень' }
  if (num > 100 && num <= 150) { return 'Вредный для уязвимых групп' }
  if (num > 150 && num <= 200) { return 'Нездоровый' }
  if (num > 200 && num <= 300) { return 'Очень нездоровый' }
  if (num > 300) { return 'Опасный' }

}

export default class CityInfo extends PureComponent {
  render() {

    const { info } = this.props;
    console.log(info);
    return (
      <div className="popup">
        <div className="popup-status">
          <div className="popup-status-legend">
            <div className="popup-status-legend-number" style={{ backgroundColor: `#${info.background}` }}>
              <span>{(info?.number) ? (info.number) : '?'}</span>
            </div>
            <div className="popup-status-legend-title">
              <p className="popup-status-legend-title-level">
                {Level(info?.number)}
              </p>
              <p className="popup-status-title-date" style={{ fontSize: "20px" }}>
                20 сетнября 2020, 19:00
              </p>
            </div>
          </div>

          <div style={{ fontSize: "17px", lineHeight: "20px" }} className="popup-status-legend-address">
            <p>
              {info?.street}<br />
              город {info?.city}, {info?.state} область
            </p>
          </div>
        </div>

      </div>
    );
  }
}