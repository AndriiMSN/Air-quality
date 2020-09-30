import React, { Component } from 'react';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  Layer
} from 'react-map-gl';
import ControlPanel from './ControlPanel';
import Pins from './Pins';
import CityInfo from './CityInfo';

const TOKEN = 'pk.eyJ1IjoiYW5kcmlpbXNuIiwiYSI6ImNrZGYzZ200YTJudXQyeHNjMjk2OTk2bjUifQ.njqMX6x6U946yjJdWwA7mA';



const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: "32px",
  padding: '10px'
};

const fullscreenControlStyle = {
  position: 'absolute',
  top: "29px",
  right: "27px",
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  bottom: "72px",
  left: "32px",
  padding: '10px'
};

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: "32px",
  padding: '10px'
};
// 
export default class AirQuality extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 48.3,
        longitude: 31,
        zoom: 5,
      },
      popupInfo: null,
    }
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _onClickMarker = city => {
    this.setState({ popupInfo: null });
    setTimeout(() => {
      this.setState({ popupInfo: city });
    }, 150);
  };
  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={0}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={true}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;
    return (

      <MapGL

        {...viewport}
        width="90%"
        height="550px"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
      >
        <Pins data={this.props.cities}
          onClick={this._onClickMarker}
        />

        {this._renderPopup()}

        <div style={geolocateStyle}>
          <GeolocateControl />
        </div>
        <div id="state-legend" class="legend">
          <div style={{ backgroundColor: "#A6A6A6" }}>
            <span >-</span>
            <span>302</span>
          </div>

          <div style={{ backgroundColor: "#96D962" }}>
            <span >0-50</span>
            <span>411</span>
          </div>

          <div style={{ backgroundColor: "#EEE851" }}>
            <span >51-100</span>
            <span>20</span>
          </div>

          <div style={{ backgroundColor: "#FFBD3E" }}>
            <span >101-150</span>
            <span>3</span>
          </div>


          <div style={{ backgroundColor: "#FF3030" }}>
            <span >151-200</span>
            <span>9</span>
          </div>

          <div style={{ backgroundColor: "#CD4AD9" }}>
            <span >201-300</span>
            <span>0</span>
          </div>

          <div style={{ backgroundColor: "#940000" }}>
            <span >301+</span>
            <span>0</span>
          </div>
        </div>

        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div style={navStyle}>
          <NavigationControl />
        </div>
        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>

        <ControlPanel containerComponent={this.props.containerComponent} />
      </MapGL>
    );
  }
}









