import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocaion.photo"
        alt="Exteriorphoto of {{ housingLocaion.name }}"
      />
      <h2 class="listing-heading">{{ housingLocaion.name }}</h2>
      <p class="listing-location">
        {{ housingLocaion.city }}, {{ housingLocaion.state }}
      </p>
    </section>
  `,
  styleUrls: ['./housing-location.component.scss'],
})
export class HousingLocationComponent {
  @Input()
  housingLocaion!: HousingLocation;
}
