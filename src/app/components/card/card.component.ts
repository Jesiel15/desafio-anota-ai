import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModel } from './model/card.model';
import { CardColorMap, CardEnum } from '../../shared/card.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
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

  @Output() removeCard = new EventEmitter<void>();

  deleteCard() {
    this.removeCard.emit();
  }

  getCardName(): string {
    return CardEnum[this.card.type];
  }

  getCardColor(): string {
    return CardColorMap[this.card.type as CardEnum] || '#6c757d';
  }
}
