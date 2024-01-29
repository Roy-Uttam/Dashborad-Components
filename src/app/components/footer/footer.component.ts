import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { menu } from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class FooterComponent implements OnInit {
  constructor() {
    addIcons({
      menu,
    });
  }

  ngOnInit() {}
}
