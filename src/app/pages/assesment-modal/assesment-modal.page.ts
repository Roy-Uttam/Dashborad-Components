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
  AssetTypesData: any[] = [];
  groupedAssets: any[] = [];

  assets = [
    {
      AssetType: 'Hopper',
      AssetName: 'Hopper',
      status: 'asset pending',
    },

    {
      AssetType: 'Hopper',
      AssetName: 'Hopper',
      status: 'asset pending',
    },
    {
      AssetType: 'silo',
      AssetName: 'silo 1',
      status: 'asset pending',
    },
    {
      AssetType: 'silo',
      AssetName: 'silo 2',
      status: 'asset pending',
    },
    {
      AssetType: 'bin',
      AssetName: 'bin 3',
      status: 'asset pending',
    },
    {
      AssetType: 'bin',
      AssetName: 'bin 4',
      status: 'asset pending',
    },
    {
      AssetType: 'silo',
      AssetName: 'silo 3',
      status: 'asset pending',
    },
    {
      AssetType: 'silo',
      AssetName: 'silo 4',
      status: 'asset pending',
    },
    {
      AssetType: 'Hopper',
      AssetName: 'Hopper',
      status: 'asset pending',
    },
    {
      AssetType: 'Hopper',
      AssetName: 'Hopper',
      status: 'asset pending',
    },
    {
      AssetType: 'bin',
      AssetName: 'bin 1',
      status: 'asset pending',
    },
    {
      AssetType: 'silo',
      AssetName: 'silo 5',
      status: 'asset pending',
    },
  ];

  constructor() {}

  ngOnInit() {
    const assetTypeGroups = new Set(this.assets.map((item) => item.AssetType));

    this.AssetTypesData = [];

    assetTypeGroups.forEach((newItem) =>
      this.AssetTypesData.push({
        AssetTypes: newItem,
        values: this.assets.filter((i) => i.AssetType === newItem),
      })
    );

    console.log(this.AssetTypesData);
  }
}
