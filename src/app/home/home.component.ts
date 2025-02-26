import { Component } from '@angular/core';
import { NavbarComponent } from '../component/common/navbar/navbar.component';
import { FooterComponent } from '../component/common/footer/footer.component';
import { HorizontalContentComponent } from "../component/common/horizontal-content/horizontal-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HorizontalContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
