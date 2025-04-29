import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { CardModel } from '../components/card/model/card.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve testar o receiveSearch() retornando o Card', () => {
    const mockCards: CardModel[] = [
      {
        title: 'Card1',
        description: 'Description 1',
        img: 'link.imagem',
        type: 1,
        removed: false,
      },
      {
        title: 'Card2',
        description: 'Description 2',
        img: 'link.imagem',
        type: 2,
        removed: false,
      },
    ];

    component.listCards = mockCards;
    component.receiveSearch('Card1');
    expect(component.filteredCards).toEqual([
      {
        title: 'Card1',
        description: 'Description 1',
        img: 'link.imagem',
        type: 1,
        removed: false,
      },
    ]);
  });

  it('deve testar o receiveSearch() com Card1 Removido', () => {
    const mockCards: CardModel[] = [
      {
        title: 'Card1',
        description: 'Description 1',
        img: 'link.imagem',
        type: 1,
        removed: true,
      },
      {
        title: 'Card2',
        description: 'Description 2',
        img: 'link.imagem',
        type: 2,
        removed: false,
      },
    ];

    component.listCards = mockCards;
    component.receiveSearch('Card');
    expect(component.filteredCards).toEqual([
      {
        title: 'Card2',
        description: 'Description 2',
        img: 'link.imagem',
        type: 2,
        removed: false,
      },
    ]);
  });

  it('deve testar o receiveSearch() com Search sem texto', () => {
    const mockCards: CardModel[] = [
      {
        title: 'Card1',
        description: 'Description 1',
        img: 'link.imagem',
        type: 1,
        removed: false,
      },
      {
        title: 'Card2',
        description: 'Description 2',
        img: 'link.imagem',
        type: 2,
        removed: false,
      },
    ];

    component.listCards = mockCards;
    component.receiveSearch('');

    expect(component.filteredCards.length).toBe(2);
    expect(component.filteredCards[0].title).toBe('Card1');
    expect(component.filteredCards[1].title).toBe('Card2');
  });

  it('deve testar o removeCard()', () => {
    const mockCards: CardModel[] = [
      {
        title: 'Card1',
        description: 'Description 1',
        img: 'link.imagem',
        type: 1,
        removed: false,
      },
      {
        title: 'Card2',
        description: 'Description 2',
        img: 'link.imagem',
        type: 2,
        removed: false,
      },
    ];

    component.listCards = mockCards;
    component.filteredCards = [...component.listCards];

    component.removeCard(0);

    expect(component.listCards[0].removed).toBeTrue();
    expect(component.filteredCards.length).toBe(1);
    expect(component.filteredCards[0].title).toBe('Card2');
  });
});
