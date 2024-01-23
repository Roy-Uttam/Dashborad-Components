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
      AssetType: 'silo',
      AssetName: 'silo 1',
      status: 'Asset Approval Pending',
    },
    {
      AssetType: 'bin',
      AssetName: 'bin 1',
      status: 'Asset Rejected By Approver',
    },
    {
      AssetType: 'silo',
      AssetName: 'silo 2',
      status: 'Asset Rejected By Approver',
    },
    {
      AssetType: 'Hopper',
      AssetName: 'Hopper 1',
      status: 'Asset Rejected By Approver',
    },

    {
      AssetType: 'bin',
      AssetName: 'bin 3',
      status: 'Asset Registeration Pending',
    },
    {
      AssetType: 'bin',
      AssetName: 'bin 4',
      status: 'Asset Approved',
    },
    {
      AssetType: 'silo',
      AssetName: 'silo 3',
      status: 'Asset Registeration Pending',
    },
    {
      AssetType: 'silo',
      AssetName: 'silo 4',
      status: 'Asset Approved',
    },
    {
      AssetType: 'Hopper',
      AssetName: 'Hopper 2',
      status: 'Asset Approved',
    },
    {
      AssetType: 'Hopper',
      AssetName: 'Hopper 3',
      status: 'Asset Registeration Pending',
    },
    {
      AssetType: 'Hopper',
      AssetName: 'Hopper 4',
      status: 'Asset Approval Pending',
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
  }
}
