import { Component, OnInit } from '@angular/core';
// This is the url for the model of cards
import { CardPlace } from 'src/app/shared/models/card';

@Component({
  selector: 'app-offers-block',
  templateUrl: './offers-block.component.html',
  styleUrls: ['./offers-block.component.scss']
})
export class OffersBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // This is the array for filling in the information on the cards.
  cardPlace: CardPlace[] = [
    {
      image: '/assets/images/chicago.jpg',
      imageWidth: 1248,
      imageHeight: 767,
      city: 'Chicago',
      price: '$600.00',
    },
    {
      image: '/assets/images/porto.jpg',
      imageWidth: 1248,
      imageHeight: 929,
      city: 'Porto',
      price: '$600.00',
    },
    {
      image: '/assets/images/mire.jpg',
      imageWidth: 1248,
      imageHeight: 729,
      city: 'Chicago',
      price: '$600.00',
    },
  ]
}
