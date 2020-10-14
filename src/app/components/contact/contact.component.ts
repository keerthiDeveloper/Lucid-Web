import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactList: any;
  footerIcon: any;
  constructor() {
    this.contactList = [
      {
        icon: './assets/images/contact/phone.png',
        list: ['Phone: (415) 124-5678', 'Fax: (412) 123-8290'],
      },
      {
        icon: './assets/images/contact/pointer.png',
        list: ['1001 Brickell Bay Dr', 'Suite 1900 ', 'Miami, FL 33131'],
      },
      {
        icon: './assets/images/contact/envelope.png',
        list: ['support@yourname.com'],
      },
    ];
    this.footerIcon = [
      'behance',
      'dribbble',
      'twitter',
      'facebook',
      'linkedin',
    ];
  }

  ngOnInit(): void {}
}
