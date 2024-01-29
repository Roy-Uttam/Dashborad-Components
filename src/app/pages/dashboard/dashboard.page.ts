import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssetCardsComponent } from 'src/app/components/asset-cards/asset-cards.component';
import { ChartsComponent } from 'src/app/components/charts/charts.component';
import { ProgressComponent } from 'src/app/components/progress/progress.component';
import { LegendsComponent } from 'src/app/components/legends/legends.component';
import { FindingsComponent } from 'src/app/components/findings/findings.component';
import { RoundComponent } from 'src/app/components/round/round.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AssetCardsComponent,
    ChartsComponent,
    ProgressComponent,
    LegendsComponent,
    FindingsComponent,
    RoundComponent,
    FooterComponent,
  ],
})
export class DashboardPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
