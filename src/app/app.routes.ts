import { Routes } from '@angular/router';
import {Header} from './Component/header/header';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", pathMatch: "full", component: Header},
  {path: "about", pathMatch: "full", component: Header},
  {path: "contact", pathMatch: "full", component: Header}
]

export const AppRoutes = routes;
