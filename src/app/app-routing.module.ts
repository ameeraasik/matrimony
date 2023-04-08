import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DetailspageComponent } from './pages/detailspage/detailspage.component';
import { TindersliderComponent } from './pages/tinderslider/tinderslider.component';

const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"home-detils/:id",
    component:DetailspageComponent
  },
  {
    path:"tinder-slider",
    component:TindersliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
