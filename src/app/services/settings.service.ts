import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private styleTagTheme = document.querySelector('#theme');
  private readonly themeDefault = `./assets/css/colors/default-dark.css`;

  constructor() { 
    const urlStyleTheme = localStorage.getItem('theme') || this.themeDefault;
    this.styleTagTheme.setAttribute('href', urlStyleTheme)
  }

  changeTheme(theme: string) {
    const urlStyleTheme = `./assets/css/colors/${theme}.css`;
    
    this.styleTagTheme.setAttribute('href', urlStyleTheme);
    localStorage.setItem('theme', urlStyleTheme);
    
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const linksTheme = document.querySelectorAll('.selector');

    linksTheme.forEach( element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.styleTagTheme.getAttribute('href');

      if( btnThemeUrl === currentTheme ) {
        element.classList.add('working')
      }
    })
  }

}
