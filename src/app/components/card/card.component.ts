import { Component, Input } from '@angular/core';
import { CardModel } from './model/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() set infoCard(info: CardModel[]) {
    if (info) {
      console.log('Info', info);
    }
  }
}
