import { Component } from '@angular/core';

@Component({
  selector: 'app-change-me-text',
  templateUrl: './change-me-text.component.html',
  styleUrl: './change-me-text.component.scss'
})
export class ChangeMeTextComponent {
  public changeMeText = 'This is HOST APPLICATION';

  constructor() {
    window.addEventListener('controlHostText', (e: any)=> {
      this.changeMeText = e?.detail;
    })
  }
}
