import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.page.html',
  styleUrls: ['./navigation-menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SideMenuComponent]
})
export class NavigationMenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
