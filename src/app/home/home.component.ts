import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';
import { CardModel } from '../components/card/model/card.model';
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, CardComponent, HeaderComponent],
})
export class HomeComponent implements OnInit {
  listCards = new Array<CardModel>()
  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    console.log('teste ngOnInit');
    this._homeService.getCards().subscribe((data: any[]) => {
      console.log('Cards recebidos:', data);
      this.listCards = data;
    });
  }
}
