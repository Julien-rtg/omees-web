import { Component } from '@angular/core';
import { NavbarComponent } from '../component/common/navbar/navbar.component';
import { FooterComponent } from "../component/common/footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
