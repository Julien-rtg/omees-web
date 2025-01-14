import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit {
  ngAfterViewInit() {
    const swiperContainer = document.querySelector('swiper-container');

    if (swiperContainer && swiperContainer.shadowRoot) {
      const shadowRoot = swiperContainer.shadowRoot;

      const nextButton = shadowRoot.querySelector('.swiper-button-next svg') as SVGElement;
      const prevButton = shadowRoot.querySelector('.swiper-button-prev svg') as SVGElement;

      if (nextButton || prevButton) {
        nextButton.style.width = '20px';
        nextButton.style.height = '20px';
        nextButton.style.fill = '#fff';

        prevButton.style.width = '20px';
        prevButton.style.height = '20px';
        prevButton.style.fill = '#fff';
      }
    }
  }
}
