import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.scss'],
  standalone:true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
})
export class LegendsComponent {

  constructor() { }

}
