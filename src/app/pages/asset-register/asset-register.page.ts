import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssetRegisterCategoryComponent } from 'src/app/components/asset-register-category/asset-register-category.component';
import { AssetResgisterComponent } from 'src/app/components/asset-resgister/asset-resgister.component';
import { ellipse } from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-asset-register',
  templateUrl: './asset-register.page.html',
  styleUrls: ['./asset-register.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AssetResgisterComponent,
  ],
})
export class AssetRegisterPage implements OnInit {
  constructor() {
    addIcons({
      ellipse,
    });
  }

  ngOnInit() {}
}
