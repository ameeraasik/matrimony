import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ServicesService } from './services.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailspageComponent } from './pages/detailspage/detailspage.component';
import { TindersliderComponent } from './pages/tinderslider/tinderslider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DetailspageComponent,
    TindersliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
