import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccordoionComponent } from 'src/app/components/assesment/accordoion/accordoion.component';

@Component({
  selector: 'app-assesment-modal',
  templateUrl: './assesment-modal.page.html',
  styleUrls: ['./assesment-modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,AccordoionComponent]
})
export class AssesmentModalPage {

  constructor() { }



}
