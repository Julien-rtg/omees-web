import { Component } from '@angular/core';
import { NavbarComponent } from '../component/common/navbar/navbar.component';
import { FooterComponent } from "../component/common/footer/footer.component";
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

interface ContactSubject {
  id: string;
  label: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  subjects: ContactSubject[] = [
    { id: '1', label: 'Un trajet terminé' },
    { id: '2', label: 'Un trajet non effectué' },
    { id: '3', label: 'Mon compte' },
    { id: '4', label: 'À propos de l\'application' },
    { id: '5', label: 'Concernant un paiement' }
  ];

  constructor(
    private toastr: ToastrService
  ) {
    emailjs.init(environment.emailjs.publicKey);
  }

  async sendEmail() {
    const form = document.querySelector('form') as HTMLFormElement;
    if (!form) return;

    const formData = new FormData(form);
    
    const templateParams = {
      from_name: `${formData.get('name')} ${formData.get('lastname')}`,
      subject: this.getSubjectFromValue(formData.get('contact') as string),
      message: formData.get('message'),
      phone: formData.get('phone') || 'Non renseigné',
      reply_to: formData.get('email'),
    };

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams
      );
      this.toastr.success('Votre message a été envoyé avec succès !', 'Message envoyé', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
        progressBar: true
      });
      form.reset();
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      this.toastr.error('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.', 'Erreur', {
        timeOut: 5000,
        positionClass: 'toast-top-right',
        progressBar: true
      });
    }
  }

  private getSubjectFromValue(value: string): string {
    const subject = this.subjects.find(s => s.id === value);
    return subject ? subject.label : 'Autre demande';
  }
}
