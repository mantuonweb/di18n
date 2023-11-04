import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Mantu';
  language = 'en';
  changeLanguage() {
    if (this.language === 'en') {
      this.language = 'hi';
    } else {
      this.language = 'en';
    }
    localStorage.setItem('language', this.language);
    window.location.reload();
  }
  ngOnInit() {
    this.language = localStorage.getItem('language') ?? 'en';
  }
}
