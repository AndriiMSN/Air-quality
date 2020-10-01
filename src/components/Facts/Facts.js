import React from 'react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Facts.scss';

import 'swiper/components/effect-coverflow/effect-coverflow.scss';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Facts = ({ title, slides }) => {
  const factsSlides = slides.map((slideInfo) => <SwiperSlide key={slideInfo.id}>
    <img src={slideInfo.imgUrl} alt="slide-image" />
    <div>
      <p className="facts-slide-desc">
        {slideInfo.desc}
      </p>
    </div>
  </SwiperSlide>);

  return (
    <section id="facts" className="facts container">
      <h2 className="facts-title">{title}</h2>
      <div className="swiper-button-prev" />
      <Swiper
        effect="coverflow"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
            speed: 600,
            observer: true,
            preventInteractionOnTransition: true,
            slidesPerGroup: 1,
            effect: 'coverflow',
            centeredSlides: true,
            coverflowEffect: {
              rotate: 0,
              slideShadows: false,
            },
          },
          // when window width is >= 480px
          767: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            effect: 'slide'
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
            effect: 'slide'
          }
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.facts-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="facts-pagination-bullet ${className}"></span>`;
          },
        }}
      >
        {factsSlides}
      </Swiper>
      <div className="swiper-button-next" />
      <div className="facts-pagination" />
    </section>
  );
};

export default Facts;