import { Component } from '@angular/core';
// This is the url for the model of cards
import { CardPlace } from 'src/app/shared/models/card';

@Component({
  selector: 'app-offers-block',
  templateUrl: './offers-block.component.html',
  styleUrls: ['./offers-block.component.scss']
})
export class OffersBlockComponent {

  // This is the array for filling in the information on the cards.
  cardPlace: CardPlace[] = [
    {
      image: '/assets/images/chicago.jpg',
      city: 'Chicago',
      price: '$600.00',
    },
    {
      image: '/assets/images/porto.jpg',
      city: 'Porto',
      price: '$600.00',
    },
    {
      image: '/assets/images/mire.jpg',
      city: 'Chicago',
      price: '$600.00',
    },
  ]
}
