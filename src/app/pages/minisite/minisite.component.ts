import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PricesService } from '../../services/prices.service';

@Component({
  selector: 'app-template',
  templateUrl: './minisite.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinisiteComponent implements OnInit {
  itinerary: any;
  showMobileMenu: boolean;

  constructor(private _activatedRoute: ActivatedRoute, private pricesService:PricesService) {
    const data = this._activatedRoute.snapshot.data;
    this.itinerary = this.pricesService.init(data.itinerary);
  }

  ngOnInit() {
  }

}
