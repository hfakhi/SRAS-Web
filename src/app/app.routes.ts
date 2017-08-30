import {Routes} from "@angular/router";


import {StarterViewComponent} from "./views/appviews/starterview.component";
import {LoginComponent} from "./views/appviews/login.component";
import {DeliverablesComponent} from "./views/appviews/components/deliverables/deliverables.component"

import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";


export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'starterview', pathMatch: 'full'},

  // App views ------
  {
    path: 'workingProgram', component: BasicLayoutComponent,
    children: [
      {path: 'deliverables', component: DeliverablesComponent},
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: 'starterview', component: StarterViewComponent}
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: 'starterview'}
];
