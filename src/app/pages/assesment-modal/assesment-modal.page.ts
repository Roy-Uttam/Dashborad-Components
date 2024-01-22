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
  imports: [IonicModule, CommonModule, FormsModule, AccordoionComponent],
})
export class AssesmentModalPage implements OnInit {
  // myArray: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  Assets: any[] = [
    
    {assetName: 'Silo 1', status: 'asset pending' },
    {assetName: 'Silo 1', status: 'asset pending' },
    {assetName: 'Silo 1', status: 'asset pending' },

     
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.Assets);
  }
}
