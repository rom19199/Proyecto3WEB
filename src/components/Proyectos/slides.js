import React from 'react'
import p1 from '../../fotos/p1.jpg';
import p2 from '../../fotos/p2.jpg';
import p3 from '../../fotos/p3.jpg';
import './slides.css';


export const slidesInfo  = [
    {
        src: p1,
        alt:"Proyec1",
        desc : "PAGINA WEB"
       
    },

    // {
    //     src: p2,
    //     alt:"Proyect2",
    //     desc:"PAGINA WEB"
    // },

    {
        src: p3,
        alt:"Proyect3",
        desc:"MEMORIA"
    }

]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src}   alt = {slide.alt}  />

        <div className = "slide-desc">
            <span>{slide.desc}</span>
        </div>

    </div>

    

))

 export default slides;

