import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-accordion-card',
  templateUrl: './accordion-card.component.html',
  styleUrls: ['./accordion-card.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
})
export class AccordionCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
