import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';
import { CardModel } from '../components/card/model/card.model';
import { HeaderComponent } from '../components/header/header.component';
import { SearchFieldComponent } from '../components/search-field/search-field.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, CardComponent, HeaderComponent, SearchFieldComponent],
})
export class HomeComponent implements OnInit {
  listCards = new Array<CardModel>();
  filteredCards = new Array<CardModel>();

  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    this._homeService.getCards().subscribe((data: CardModel[]) => {
      this.listCards = data;
      this.filteredCards = [...this.listCards];
    });
  }

  receiveSearch(textSearch: string): void {
    const search = textSearch.trim().toLowerCase();

    if (!search) {
      this.filteredCards = [...this.listCards];
      return;
    }

    this.filteredCards = this.listCards.filter(
      (card) =>
        card.title.toLowerCase().includes(search) ||
        card.description.toLowerCase().includes(search)
    );
  }
}
