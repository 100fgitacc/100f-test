
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.css';
import Image from 'next/image';

const Slider = ({projects}) => {

    const [activeProject, setActiveProject] = useState(null);
    const handleMouseEnter = (index) => {
        setActiveProject(index);
    };

    const handleMouseLeave = () => {
    setActiveProject(null);
    };

    const handleClick = (index) => {
    setActiveProject(index);
    };

  return (
        <Swiper
        className='projects-slider'
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        >
            {projects.map((project, index) => (
            <SwiperSlide
                key={index}
                className='slide-wrapper'
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index)}
            >
                <p className={`project-list-item-info-text ${activeProject === index ? 'visible' : ''}`}>
                {project.text}
                </p>
                <Image src={project.img} alt="project-item"  width={212} height={124}/>
            </SwiperSlide>
            ))}
        </Swiper>
  );
};

export default Slider;