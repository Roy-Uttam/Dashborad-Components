import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TestPage implements OnInit {
  //   segment: string = 'custom1';

  //   elementToAppend: HTMLElement;

  //   constructor(private renderer: Renderer2, private el: ElementRef) {}

  //   segmentChanged(event: any) {

  //     this.elementToAppend = this.renderer.createElement('div');
  //     this.renderer.addClass(this.elementToAppend, 'appended-content');
  //     this.renderer.appendChild(
  //       this.elementToAppend,
  //       this.renderer.createText(event.detail.value)
  //     );

  //     const segmentButton = this.el.nativeElement.querySelector(
  //       `ion-segment-button[value="${event.detail.value}"]`
  //     );
  //     const targetElement = segmentButton.querySelector(`ion-segment-button div`);

  //     this.removeAppendedElement();
  //     this.renderer.appendChild(targetElement, this.elementToAppend);

  //     const activeClass = this.el.nativeElement.querySelector(
  //       '.segment-button-checked'
  //     );
  //     console.log(activeClass);
  //   }

  //   private removeAppendedElement() {
  //     if (this.elementToAppend.parentNode) {
  //       this.renderer.removeChild(
  //         this.elementToAppend.parentNode,
  //         this.elementToAppend
  //       );
  //     }
  //   }

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

  // showhide2(event: any) {
  //   var btn2 = document.getElementById('.title');
  //   btn2?.classList?.add('active');

  //   if (btn2) {
  //     btn2?.classList?.add('active');
  //   }
  //   btn2?.classList?.remove('active');

  //   console.log(event.detail);
  //   console.log(btn2);

  // }

  ngOnInit() {}
}
