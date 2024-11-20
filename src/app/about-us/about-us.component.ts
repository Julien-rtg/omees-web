import { Component } from '@angular/core';
import { NavbarComponent } from '../component/common/navbar/navbar.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
