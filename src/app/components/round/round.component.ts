import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss'],
  standalone: true,
  imports: [RoundProgressComponent, IonicModule, CommonModule, FormsModule],
})
export class RoundComponent {
  current1 = 6;
  current2 = 33;
  current3 = 18;

  max1 = 30;
  max2 = 80;
  max3 = 50;
  stroke = 3;
  radius = 22;

  semicircle = false;
  rounded = false;
  responsive = false;
  clockwise = true;
  color1 = '#F00014';
  color2 = '#FF6E00';
  color3 = '#FFD200';
  background1 = '#F0001433';
  background2 = '#FF6E0033';
  background3 = '#FFD20066';
  duration = 800;
  animation = 'easeOutCubic';
  animationDelay = 0;
  animations = [
    'linearEase',
    'easeInQuad',
    'easeOutQuad',
    'easeInOutQuad',
    'easeInCubic',
    'easeOutCubic',
    'easeInOutCubic',
    'easeInQuart',
    'easeOutQuart',
    'easeInOutQuart',
    'easeInQuint',
    'easeOutQuint',
    'easeInOutQuint',
    'easeInSine',
    'easeOutSine',
    'easeInOutSine',
    'easeInExpo',
    'easeOutExpo',
    'easeInOutExpo',
    'easeInCirc',
    'easeOutCirc',
    'easeInOutCirc',
    'easeInElastic',
    'easeOutElastic',
    'easeInOutElastic',
    'easeInBack',
    'easeOutBack',
    'easeInOutBack',
    'easeInBounce',
    'easeOutBounce',
    'easeInOutBounce',
  ];
  gradient = false;
  realCurrent = 0;

  getOverlayStyle() {
    const isSemi = this.semicircle;
    const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      top: isSemi ? 'auto' : '50%',
      bottom: isSemi ? '5%' : 'auto',
      left: '50%',
      transform,
      fontSize: this.radius / 2 + 'px',
      radius: this.radius,
      
    };
  }
  constructor() {}
}
