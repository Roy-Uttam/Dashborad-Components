import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-asset-register-category',
  templateUrl: './asset-register-category.component.html',
  styleUrls: ['./asset-register-category.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AssetRegisterCategoryComponent implements OnInit {
  isBarOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBar() {
    this.isBarOpen = !this.isBarOpen;
  }
}
