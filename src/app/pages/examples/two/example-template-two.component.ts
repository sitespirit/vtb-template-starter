import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example-template-two',
  templateUrl: './example-template-two.component.html',
  styleUrls: ['./example-template-two.component.css']
})
export class ExampleTemplateTwoComponent implements OnInit {

  itinerary: any;

  constructor(private _activatedRoute: ActivatedRoute) {
    const data = this._activatedRoute.snapshot.data;
    this.itinerary = data.itinerary;
  }

  ngOnInit() {}

}
