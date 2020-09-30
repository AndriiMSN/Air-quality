import * as React from 'react';
import { PureComponent } from 'react';

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
              <p className="popup-status-legend-title-level">Умеренный уровень</p>
              <p className="popup-status-title-date">
                20 сентября 2020, 19:00
            </p>
            </div>
          </div>

          <div className="popup-status-legend-address">
            <p>
              вулиця Чумаченка, 4 <br />
              город Запорожье, Запорожская область
            </p>
          </div>
        </div>

      </div>
    );
  }
}