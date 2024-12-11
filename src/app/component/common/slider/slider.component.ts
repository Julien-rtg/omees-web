import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  public swiper: Swiper;

  public constructor() {
    this.swiper = new Swiper(".multiple-slide-carousel", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: ".multiple-slide-carousel .swiper-button-next",
        prevEl: ".multiple-slide-carousel .swiper-button-prev",
      },
      breakpoints: {
       1920: {
           slidesPerView: 3,
           spaceBetween: 30
       },
       1028: {
           slidesPerView: 2,
           spaceBetween: 30
       },
       990: {
           slidesPerView: 1,
           spaceBetween: 0
       }
     }
    });
  }
}
