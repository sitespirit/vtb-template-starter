import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { VtbComponentsModule } from '@sitespirit/vtb-component-library';

import { ItineraryResolver } from './resolvers/itinerary.resolver';

import { AppComponent } from './app.component';

import { ExampleTemplateMenuComponent } from './pages/examples/main/example-template-menu.component';
import { ExampleTemplateOneComponent } from './pages/examples/one/example-template-one.component';
import { ExampleTemplateTwoComponent } from './pages/examples/two/example-template-two.component';

import { MyTemplateComponent } from './pages/mytemplate/mytemplate.component';
import { MinisiteComponent } from './pages/minisite/minisite.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    ExampleTemplateMenuComponent,
    ExampleTemplateOneComponent,
    ExampleTemplateTwoComponent,
    MyTemplateComponent,
    MinisiteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      component: MinisiteComponent,
      pathMatch: 'full',
      resolve: {
        itinerary: ItineraryResolver
      }
    }, {
      path: 'examples',
      component: ExampleTemplateMenuComponent,
      pathMatch: 'full'
    },
    {
      path: 'examples/1',
      component: ExampleTemplateOneComponent,
      pathMatch: 'full',
      resolve: {
        itinerary: ItineraryResolver
      }
    }, {
      path: 'examples/2',
      component: ExampleTemplateTwoComponent,
      pathMatch: 'full',
      resolve: {
        itinerary: ItineraryResolver
      }
    }
  ]),
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDa6wr3FY1sGlEpAzL2riOeMVGxdUGmCjI'
  }),
  HttpClientModule,
  VtbComponentsModule.forRoot(environment)
],
providers: [ItineraryResolver],
bootstrap: [AppComponent]
})
export class AppModule { }
