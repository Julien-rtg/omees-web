import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/common/footer/footer.component';
import { NavbarComponent } from './component/common/navbar/navbar.component';
import { HorizontalContentComponent } from "./component/common/horizontal-content/horizontal-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FooterComponent, NavbarComponent, HorizontalContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'omees-web';
}