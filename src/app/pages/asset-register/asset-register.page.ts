import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssetRegisterCategoryComponent } from 'src/app/components/asset-register-category/asset-register-category.component';
import { AssetResgisterComponent } from 'src/app/components/asset-resgister/asset-resgister.component';
import { ellipse } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CustomtabsComponent } from 'src/app/components/customtabs/customtabs.component';

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
    CustomtabsComponent,
  ],
})
export class AssetRegisterPage implements OnInit {
  currentTab: string = 'tab1';
  segment: string = '';

  handleTabChange(tab: string) {
    this.currentTab = tab;
    // Add additional logic as needed when a tab changes
    console.log(`Selected Tab: ${this.currentTab}`);
  }

  selectedTab = 'tab1';
  constructor() {
    addIcons({
      ellipse,
    });
  }

  ngOnInit() {}
}
