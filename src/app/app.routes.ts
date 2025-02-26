import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { OurServicesComponent } from './our-services/our-services.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'connexion', component:ConnexionComponent},
    {path: 'our-services', component:OurServicesComponent}
  ];
