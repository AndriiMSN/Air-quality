import React from 'react';
import CitiesMap from './MapToolTips'
import './AirQuality.scss';


const AirQuality = () => {
  let BackgroundColor = (num) => {
    if (num == null) { return 'A6A6A6' }
    if (num <= 50) { return '96D962' }
    if (num > 50 && num <= 100) { return 'EEE851' }
    if (num > 100 && num <= 150) { return 'FFBD3E' }
    if (num > 150 && num <= 200) { return 'FF3030' }
    if (num > 200 && num <= 300) { return 'CD4AD9' }
    if (num > 300) { return '940000' }

  }
  const CITIES = [
    {
      latitude: 50,
      longitude: 31,
      number: null,
      background: BackgroundColor(null)
    },
    {
      latitude: 50,
      longitude: 33,
      number: 50,
      background: BackgroundColor(50)
    },
    {
      latitude: 50,
      longitude: 35,
      number: 100,
      background: BackgroundColor(100)
    }, {
      latitude: 50,
      longitude: 37,
      number: 150,
      background: BackgroundColor(150)
    }, {
      latitude: 50,
      longitude: 39,
      number: 200,
      background: BackgroundColor(200)
    }, {
      latitude: 50,
      longitude: 27,
      number: 300,
      background: BackgroundColor(300)
    },
    {
      latitude: 50,
      longitude: 29,
      number: 301,
      background: BackgroundColor(301)
    }
  ]

  return (

    <section id="quality" className={'air-q container'}>
      <h2 className="air-q-title">Индекс качества воздуха в режиме реального времени</h2>

      <CitiesMap cities={CITIES} />

      <p className="air-q-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
    </section>
  );
};

export default AirQuality;