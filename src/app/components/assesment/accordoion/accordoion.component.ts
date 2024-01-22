import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AccordionCardComponent } from '../commonComponents/accordion-card/accordion-card.component';

@Component({
  standalone: true,
  selector: 'app-accordoion',
  templateUrl: './accordoion.component.html',
  styleUrls: ['./accordoion.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule, AccordionCardComponent],
})
export class AccordoionComponent implements OnInit {
  @Input() item: any[] = [];
  @Input() valueLength: any[] = [];

  constructor() {}

  ngOnInit(): void {


    console.log(this.item);
    
    
  }
}
