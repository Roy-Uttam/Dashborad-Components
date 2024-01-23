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
  @Input() item: any;
  @Input() AssetTypes: any[] = [];
  @Input() valueLength: any[] = [];

  assetValues: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.item.values.forEach((i: any) => {
      this.assetValues.push(i);
    });

    this.assetValues.forEach((asset) => {
      if (asset.status === 'Asset Approved') {
        asset.bgColor = 'bg-green-600';
      }
      if (asset.status === 'Asset Rejected By Approver') {
        asset.bgColor = 'bg-rose-500';
      }
      if (asset.status === 'Asset Registeration Pending') {
        asset.bgColor = 'bg-orange-500';
      }
      if (asset.status === 'Asset Approval Pending') {
        asset.bgColor = 'bg-amber-400';
      }
    });

    console.log(this.assetValues);
  }
}
