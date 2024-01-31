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

  elementToAppend: HTMLElement;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.elementToAppend = this.renderer.createElement('div');
    this.renderer.addClass(this.elementToAppend, 'appended-content');
    this.renderer.appendChild(
      this.elementToAppend,
      this.renderer.createText(this.segment)
    );
  }

  segmentChanged(event: any) {

    this.removeAppendedElement();

    const segmentButton = this.el.nativeElement.querySelector(
      `ion-segment-button[value="${event.detail.value}"]`
    );
    const targetElement = segmentButton.querySelector(`ion-segment-button div`);

    this.renderer.appendChild(targetElement, this.elementToAppend);
  }

  private removeAppendedElement() {
    if (this.elementToAppend.parentNode) {
      this.renderer.removeChild(
        this.elementToAppend.parentNode,
        this.elementToAppend
      );
    }
  }

  // segmentChanged(event: any) {
  //   // console.log('Selected segment:', this.segment);

  //   const segmentButton = this.el.nativeElement.querySelector(
  //     `ion-segment-button[value="${event.detail.value}"]`
  //   );

  //   const newDiv = this.renderer.createElement('div');

  //   const targetElement = segmentButton.querySelector(`ion-segment-button div`);

  //   this.renderer.setProperty(
  //     newDiv,
  //     'innerHTML',
  //     '<p>This is dynamically appended HTML!</p>'
  //   );

  //   this.renderer.appendChild(targetElement, newDiv);

  //   console.log(targetElement);

  // }

  ngOnInit() {}
}
