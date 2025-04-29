import { Component, Input } from '@angular/core';
import { CardModel } from './model/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  card = new CardModel();

  @Input() set infoCard(card: CardModel) {
    if (card) {
      console.log('Info', card);
      this.card = card;
    }
  }
}
