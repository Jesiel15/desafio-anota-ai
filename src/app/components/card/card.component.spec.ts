import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { CardModel } from './model/card.model';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve testar o deleteCard() e o emit do removeCard @Output()', () => {
    spyOn(component.removeCard, 'emit');
    component.deleteCard();
    expect(component.removeCard.emit).toHaveBeenCalled();
  });

  it('should set card when infoCard input is provided', () => {
    const mockCard: CardModel = {
      title: 'Card1',
      description: 'Description 1',
      img: 'link.imagem',
      type: 1,
      removed: false,
    };

    component.infoCard = mockCard;

    expect(component.card).toEqual(mockCard);
  });
});
