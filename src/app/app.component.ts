import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokupon-test-angular';
  url: string;
  errorMessage: string = '';
  system: string = 'Укажите поисковую систему';

  searchText(text: string, system: string) {
    if (this.dataValidation(text, system)) {
      if (system === 'ask') {
        this.url = 'https://uk.' + system + '.com/web?o=0&l=dir&qo=serpSearchTopBox&q=' + text;
      } else {
        this.url = 'https://www.' + system + '.com/search?q=' + text;
      }
      window.location.href = this.url;
    }
  }

  dataValidation(text: string, system: string):boolean {
    if (text.match(/[A-ZА-Я0-9]+/gi) && system !== 'Укажите поисковую систему') {
      return true;
    } else {
      if (text.length < 1) {
        this.errorMessage = 'Введите текст для поиска';
      } else if (!text.match(/[A-ZА-Я0-9]+/gi)) {
        this.errorMessage = 'Введите корректный запрос';
      } else if (system === 'Укажите поисковую систему') {
        this.errorMessage = 'Выберите систему для поиска';
      }
      return false;
    }
  }

  deleteErrorMessage() {
    this.errorMessage = '';
  }

}
