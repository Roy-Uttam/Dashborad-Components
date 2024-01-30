import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-customtabs',
  templateUrl: './customtabs.component.html',
  styleUrls: ['./customtabs.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  animations: [
    trigger('tabAnimation', [
      state('tab1', style({ transform: 'translateX(0)' })),
      state('tab2', style({ transform: 'translateX(-100%)' })),
      // Add more states for additional tabs

      transition('* => *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CustomtabsComponent implements OnInit {
  @Input() selectedTab: string = 'tab1';

  
  @Output() tabChange: EventEmitter<string> = new EventEmitter<string>();

  tabChanged() {
    
    this.tabChange.emit(this.selectedTab);
  }

  ngOnInit() {
    console.log(this.selectedTab);
    
  }
}
