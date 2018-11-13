import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vtb-minisite',
  templateUrl: './minisite.component.html',
  styles: [`
    agm-map {
      width: 1028px;
      height: 426px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinisiteComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  itinerary: any;

  constructor(private _activatedRoute: ActivatedRoute) {
    const data = this._activatedRoute.snapshot.data;
    this.itinerary = data.itinerary;
  }

  ngOnInit() {
  }

}
