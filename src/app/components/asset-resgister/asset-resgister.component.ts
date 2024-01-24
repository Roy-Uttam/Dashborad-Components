import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssetRegisterCategoryComponent } from '../asset-register-category/asset-register-category.component';

@Component({
  selector: 'app-asset-resgister',
  templateUrl: './asset-resgister.component.html',
  styleUrls: ['./asset-resgister.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AssetRegisterCategoryComponent,
  ],
})
export class AssetResgisterComponent implements OnInit {
  isBarOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleBar() {
    this.isBarOpen = !this.isBarOpen;
  }
}
