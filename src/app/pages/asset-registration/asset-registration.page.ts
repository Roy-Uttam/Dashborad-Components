import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-asset-registration',
  templateUrl: './asset-registration.page.html',
  styleUrls: ['./asset-registration.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AssetRegistrationPage implements OnInit {
  segment: string = 'custom1';

  constructor() {}

  ngOnInit() {}
}
