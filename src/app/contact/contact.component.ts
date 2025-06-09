import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit(): void {
    if (this.name && this.email && this.message) {
      alert(`Thank you, ${this.name}! Your message has been sent.`);
      // აქ შეგიძლია რეალურად დააპროექტო API-სთვის ან სხვა ლოგიკა
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      alert('Please fill in all fields.');
    }
  }
}
