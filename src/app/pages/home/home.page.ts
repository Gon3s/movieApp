import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TrendingsComponent } from 'src/app/components/trendings/trendings.component';
import { MovieConstants } from 'src/app/constants/movie.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    TrendingsComponent,
  ],
})
export class HomePage implements OnInit {
  constructor(public movieConstant: MovieConstants) {}

  ngOnInit() {}
}
