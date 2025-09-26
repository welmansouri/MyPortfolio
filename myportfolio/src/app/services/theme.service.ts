import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private root = document.documentElement;

  init() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setDark(saved ? saved === 'dark' : prefersDark);
  }
  setDark(on: boolean) {
    this.root.classList.toggle('dark', on);   
    localStorage.setItem('theme', on ? 'dark' : 'light');
  }
  toggle() { this.setDark(!this.root.classList.contains('dark')); }

  getDark(): boolean {
  const saved = localStorage.getItem('theme');
  return saved ? saved === 'dark'
               : window.matchMedia('(prefers-color-scheme: dark)').matches;
}

  constructor() { }
}
