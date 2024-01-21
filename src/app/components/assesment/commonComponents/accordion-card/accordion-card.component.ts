import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { pencil, trash } from 'ionicons/icons';
@Component({
  selector: 'app-accordion-card',
  templateUrl: './accordion-card.component.html',
  styleUrls: ['./accordion-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AccordionCardComponent implements OnInit {
  @Input() Type_name: string = '';
  @Input() AssetStatus: string = '';
  @Input() AssetBgColor: string = '';

  constructor() {
    addIcons({ pencil, trash });
  }

  textClass = 'text-white';
  assetName = 'Asset Name';
  ngOnInit() {
  }
}
