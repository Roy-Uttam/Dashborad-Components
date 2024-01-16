import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ChartsComponent implements OnInit {
  constructor() {}

  public chart: any;
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar',

      data: {
        labels: ['sim', 'MM', 'Electrical'],
        datasets: [
          {
            label: 'OPEN',
            borderRadius: 80,
            barPercentage: 0.7,
            categoryPercentage: 0.5,
            backgroundColor: 'rgba(230, 0, 120, 1)',
            data: ['75', '42', '78'],
          },
          {
            label: 'ONGOING',
            borderRadius: 80,
            barPercentage: 0.7,
            categoryPercentage: 0.5,
            backgroundColor: 'rgba(4, 187, 241, 1)',
            data: ['50', '70', '18'],
          },
          {
            borderRadius: 80,
            label: 'FINALISED',
            barPercentage: 0.7,
            categoryPercentage: 0.5,
            backgroundColor: 'rgba(148, 193, 46, 1)',
            data: ['60', '53', '37'],
          },
        ],
      },

      options: {
        events:[],
        responsive: true,
        aspectRatio: 2.5,

        plugins: {
          legend: {
            display: false,
          },
        },

        scales: {
          y: {
            title: {
              display: true,
              text: 'Assessment',
            },

            border: {
              dash: [5, 5],
              display: false,
            },

            beginAtZero: true,
            min: 0,
            max: 80,
            ticks: {
              stepSize: 20,
            },
          },

          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}
