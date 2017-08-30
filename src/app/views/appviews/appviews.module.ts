import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';

import {StarterViewComponent} from "./starterview.component";
import {LoginComponent} from "./login.component";

import {PeityModule } from '../../components/charts/peity';
import {SparklineModule } from '../../components/charts/sparkline';
import { DeliverablesComponent } from './components/deliverables/deliverables.component';

@NgModule({
  declarations: [
    StarterViewComponent,
    LoginComponent,
    DeliverablesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    SparklineModule,
    FormsModule,
    GridModule
  ],
  exports: [
    StarterViewComponent,
    LoginComponent,
    DeliverablesComponent
  ],
})

export class AppviewsModule {
}
