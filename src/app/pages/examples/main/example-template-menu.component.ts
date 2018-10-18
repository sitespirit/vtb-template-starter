import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example-template-menu',
  templateUrl: './example-template-menu.component.html'
})
export class ExampleTemplateMenuComponent implements OnInit {

  itinerary: any;

  constructor(private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {}

}
