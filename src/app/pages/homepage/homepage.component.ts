import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  tab : any ;
  profileData: any;

  constructor(
    private servicesService: ServicesService,
    private toastr : ToastrService
  ) {
    // this.toastr.toastrConfig.enableHtml = true;
   }

  ngOnInit(): void {
    this.getData();
  }

  clickMarked(check: any){
    this.tab = check;
    this.toastr.success("Interested");
    this.profileData = this.profileData.filter ((i:{id:any;})=>i.id!=check);
  }
  clickPresent(check: any){
    this.tab = check;
    this.toastr.error("Not Interested");
    this.profileData = this.profileData.filter ((i:{id:any;})=>i.id!=check);
  }

  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

getData(){
  this.servicesService.getJSON().subscribe(res => {
    this.profileData = res;
  })
}

}
