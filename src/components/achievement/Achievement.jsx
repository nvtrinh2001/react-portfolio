import React from 'react';
import './achievement.css';
import { GiDiamondTrophy } from 'react-icons/gi';
import { AiOutlineTrophy } from 'react-icons/ai';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

function Achievement() {
  return (
    <section id="achievement">
      <h5>Some Of My Learning Milestones</h5>
      <h2>Achievements</h2>

      <div className="container achievement__container">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          spaceBetween={40}
          className="mySwiper"
        >
          <SwiperSlide>
            <article className="achievement__item">
              <GiDiamondTrophy className="achievement__item-icon" />
              <h3 className="achievement__item-title">
                Erasmus Exchange Programme Scholarship
              </h3>
              <p className="achievement__item-desc">
                between Hanoi University of Science and Technoloy and Regensburg
                University of Applied Sciences
              </p>
              <p className="achievement__item-year">(2021-2022)</p>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="achievement__item">
              <GiDiamondTrophy className="achievement__item-icon" />
              <h3 className="achievement__item-title">Certificate of Merit</h3>
              <p className="achievement__item-desc">
                of the President of Hanoi University of Science and Technology
                for contributions in Academic Support Association
              </p>
              <p className="achievement__item-year">(2020-2021)</p>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="achievement__item">
              <AiOutlineTrophy className="achievement__item-icon" />
              <h3 className="achievement__item-title">Certificate of Merit</h3>
              <p className="achievement__item-desc">
                of the Vietnamese Students' Association for achievements in
                student activities and youth activities
              </p>
              <p className="achievement__item-year">(2020-2021)</p>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="achievement__item">
              <AiOutlineTrophy className="achievement__item-icon" />
              <h3 className="achievement__item-title">Certificate of Merit</h3>
              <p className="achievement__item-desc">
                of the Ho Chi Minh Youth Union for achievements in student
                activities and youth activities
              </p>
              <p className="achievement__item-year">(2019-2020)</p>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Achievement;
