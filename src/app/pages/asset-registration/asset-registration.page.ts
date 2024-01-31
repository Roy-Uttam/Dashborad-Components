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

  selectedSegment: string = 'segment1'; // Default selected segment

  // Reference to the element you want to append
  elementToAppend: HTMLElement;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    // Initialize or create the element you want to append
    this.elementToAppend = this.renderer.createElement('div');
    this.renderer.addClass(this.elementToAppend, 'appended-content');
    this.renderer.appendChild(
      this.elementToAppend,
      this.renderer.createText('Electrical')
    );
  }

  segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log('Segment changed', event.detail.value);

    // Remove the appended element from the previous segment (if any)
    this.removeAppendedElement();

    // Append the element to the content of the clicked segment button
    const segmentButton = this.el.nativeElement.querySelector(
      `ion-segment-button[value="${event.detail.value}"]`
    );
    this.renderer.appendChild(segmentButton, this.elementToAppend);
  }

  private removeAppendedElement() {
    // Remove the appended element from its current parent
    if (this.elementToAppend.parentNode) {
      this.renderer.removeChild(
        this.elementToAppend.parentNode,
        this.elementToAppend
      );
    }
  }

  ngOnInit() {}
}
