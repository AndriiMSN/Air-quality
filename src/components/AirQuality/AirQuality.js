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
      latitude: 50.4501,
      longitude: 30.5234,
      number: 20,
      background: BackgroundColor(20),
      state: "Киевская",
      city: "Киев",
      street: "вулиця Хрещатик, 14",
      date: "20 сетнября 2020, 19:00"
    },
    {
      latitude: 48.2819800,
      longitude: 37.17585,
      number: null,
      background: BackgroundColor(null),
      state: "Донецкая",
      city: "Покровск",
      street: "м-н Шахтарський",
      date: "20 сетнября 2020, 19:00"
    },
    {
      latitude: 49.9935,
      longitude: 36.2304,
      number: 163,
      background: BackgroundColor(163),
      state: "Харьковская",
      city: "Харьков",
      street: "вулиця Полтавський Шлях, 126",
      date: "20 сетнября 2020, 19:00"
    }, {
      latitude: 46.4825,
      longitude: 30.7233,
      number: 67,
      background: BackgroundColor(67),
      state: "Одесская",
      city: "Одесса",
      street: "вулиця Дерибасовская, 14",
      date: "20 сетнября 2020, 19:00"
    }, {
      latitude: 49.8397,
      longitude: 24.0297,
      number: 128,
      background: BackgroundColor(128),
      state: "Львівська",
      city: "Львів",
      street: "вулиця Соборна, 14",
      date: "20 сетнября 2020, 19:00"
    }, {
      latitude: 48.4647,
      longitude: 35.0462,
      number: 214,
      background: BackgroundColor(214),
      state: "Дніпровська",
      city: "Дніпро",
      street: "вулиця Металургів, 14",
      date: "20 сетнября 2020, 19:00"
    },
    {
      latitude: 48.5079,
      longitude: 32.2623,
      number: 301,
      background: BackgroundColor(301),
      state: "Кропивни́цка",
      city: "Кропивни́цкий",
      street: "вулиця Центральна, 14",
      date: "20 сетнября 2020, 19:00"
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