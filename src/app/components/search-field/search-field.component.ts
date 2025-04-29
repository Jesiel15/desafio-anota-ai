import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss',
})
export class SearchFieldComponent {
  search: string = '';

  onSearch() {
    console.log('Buscando por:', this.search);
  }
}
