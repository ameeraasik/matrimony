import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
  profileDetails: any[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  constructor(
    private servicesService: ServicesService,
    private activeRote: ActivatedRoute
  ) { }





  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.servicesService.getJSON().subscribe(res => {
      let id = this.activeRote.snapshot.paramMap.get('id');
      var profile = res;

      this.profileDetails = profile.filter((e: any) => e.id == id)

      console.log(this.profileDetails, "????????");


    })
  }
}
