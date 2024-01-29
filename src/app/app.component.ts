import { Component } from '@angular/core';
import {
  IonApp,
  IonSplitPane,
  IonChip,
  IonAvatar,
  IonContent,
  IonImg,
  IonRow,
  IonCol,
  IonGrid,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonIcon,
  IonFooter,
  IonText,
  IonToolbar,
  IonButton,
  IonRouterOutlet,
  IonMenu,
  IonMenuToggle,
  IonAccordion,
} from '@ionic/angular/standalone';
import { ellipse } from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonRouterOutlet,
    IonButton,
    IonToolbar,
    IonText,
    IonFooter,
    IonIcon,
    IonLabel,
    IonItem,
    IonAccordionGroup,
    IonGrid,
    IonCol,
    IonRow,
    IonImg,
    IonContent,
    IonAvatar,
    IonChip,
    IonSplitPane,
    IonApp,
    IonMenu,
    IonMenuToggle,
    IonAccordion

  ],
})
export class AppComponent {
  constructor() {
    addIcons({
      ellipse,
    });
  }
}
