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
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  // isModalOpen = false;

  // setOpen(isOpen: boolean) {
  //   this.isModalOpen = isOpen;
  // }
  ngOnInit() {
    //   document.addEventListener("DOMContentLoaded", function(event) {
    //     document.getElementById('createProductButton').click();
    // });
  }
}
