import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-feature',
  templateUrl: './overview-feature.component.html',
  styleUrls: ['./overview-feature.component.scss'],
})
export class OverviewFeatureComponent implements OnInit {
  cardList: any;
  constructor() {
    this.cardList = [
      {
        title: 'Responsive',
        content:
          'Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.',
        image: './assets/images/feature/monitor.png',
      },
      {
        title: 'Customizable',
        content:
          'Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.',
        image: './assets/images/feature/settings.png',
      },
      {
        title: 'Lovely design',
        content:
          'Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.',
        image: './assets/images/feature/like.png',
      },
      {
        title: 'Mobile Friendly',
        content:
          'Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.',
        image: './assets/images/feature/phone.png',
      },
    ];
  }
  ngOnInit(): void {}
}
