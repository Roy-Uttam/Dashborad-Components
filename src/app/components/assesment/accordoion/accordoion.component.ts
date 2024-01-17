import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccordionCardComponent } from '../commonComponents/accordion-card/accordion-card.component';

@Component({
  selector: 'app-accordoion',
  templateUrl: './accordoion.component.html',
  styleUrls: ['./accordoion.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AccordionCardComponent
  ],
})
export class AccordoionComponent  {

  constructor() { }



}
