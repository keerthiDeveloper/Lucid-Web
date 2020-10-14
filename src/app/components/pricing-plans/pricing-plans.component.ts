import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-plans',
  templateUrl: './pricing-plans.component.html',
  styleUrls: ['./pricing-plans.component.scss'],
})
export class PricingPlansComponent implements OnInit {
  planCard: any;
  pricingList: any;
  constructor() {
    this.planCard = [
      {
        userInfo: {
          name: 'John Doe',
          img: './assets/images/pricing/warstwa-7.png',
          role: 'CEO, THE RIVERS COMPANY',
        },
        content:
          'Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.',
      },
      {
        userInfo: {
          name: 'Dean Winchester',
          img: './assets/images/pricing/warstwa-16.png',
          role: 'UX DESIGNER, GOOGLE INC.',
        },
        content:
          "A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.",
      },
    ];
    this.pricingList = [
      {
        provision: 'FREE',
        price: '0',
        info:
          'Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.',
      },
      {
        provision: 'Personal',
        price: '25',
        info:
          'Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.',
      },
      {
        provision: 'Business',
        price: '50',
        info:
          'Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.',
      },
      {
        provision: 'Ultimate',
        price: '99',
        info:
          'Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.',
      },
    ];
  }
  ngOnInit(): void {}
}
