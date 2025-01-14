import { Component } from '@angular/core';
import { NavbarComponent } from '../component/common/navbar/navbar.component';
import { SliderComponent } from '../component/slider/slider.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NavbarComponent, SliderComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
