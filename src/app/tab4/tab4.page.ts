import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab4Page {

  selectedDate: string = '';
  events: { date: string, description: string }[] = [];

  constructor() { }

  showEvent() {
    if (this.selectedDate) {
      this.events.push({ date: this.selectedDate, description: 'Consulta marcada!' });
      this.selectedDate = '';
    }
  }

}

