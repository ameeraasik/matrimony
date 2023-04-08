import { Component } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from '../../keyframes';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tinderslider',
  templateUrl: './tinderslider.component.html',
  styleUrls: ['./tinderslider.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]
})
export class TindersliderComponent {
  public users: any[] = [
    {
      "id": 0,
      "picture": "assets/images/p1.jpg",
      "age": 23,
      "name": "Candace Coffey",
      "gender": "female"
    },
    {
      "id": 1,
      "picture": "assets/images/p1.jpg",
      "age": 40,
      "name": "Katrina Potter",
      "gender": "female"
    },
    {
      "id": 2,
      "picture": "assets/images/p1.jpg",
      "age": 35,
      "name": "Genevieve Hardy",
      "gender": "female"
    },
    {
      "id": 3,
      "picture": "assets/images/p1.jpg",
      "age": 30,
      "name": "Cabrera Jefferson",
      "gender": "male"
    },
    {
      "id": 4,
      "picture": "assets/images/p1.jpg",
      "age": 37,
      "name": "Guadalupe Keith",
      "gender": "female"
    }
  ];
  public index = 0;
  animationState!: string;
  parentSubject: Subject<string> = new Subject();

  constructor(private toastr: ToastrService) {

  }

  startAnimation(state: any) {

    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state: any) {
    this.index += 1;
    this.animationState = '';
    // this.index+=1;
    // }
  }
  cardAnimation(value: any) {
    if (value == "swipeleft") {
      this.toastr.error("Not Interested");
    } else {
      this.toastr.success("Interested");
    }
    this.startAnimation(value)
  }
}