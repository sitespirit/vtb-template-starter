import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example-template-one',
  templateUrl: './example-template-one.component.html',
  styleUrls: ['./example-template-one.component.css']
})
export class ExampleTemplateOneComponent implements OnInit {

  itinerary: any;

  constructor(private _activatedRoute: ActivatedRoute) {
    const data = this._activatedRoute.snapshot.data;
    this.itinerary = data.itinerary;
  }

  ngOnInit() {}

}
