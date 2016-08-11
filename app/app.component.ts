import { Component, EventEmitter } from 'angular2/core';
import { Review } from './review.model';

@Component({
  selector: "review-details",
  inputs: ['review'],
  template: `
    <h4>{{ review.specialty }}</h4>
    <h4>{{ review.tastiness }}</h4>
  `
})

export class ReviewDetailsComponent {
  public review: Review;
}

//////////////////////////ReviewComponent/////////////////////
@Component({
  selector: "review-display",
  inputs: ['review'],
  directives: [ReviewDetailsComponent],
  template: `
    <h3>{{ review.name }}</h3>
    <div [hidden]="review.hidden">
      <h4>{{ review.specialty }}</h4>
      <h4>{{ review.tastiness }}</h4>
    </div>
  `
})

export class ReviewComponent {
  public review: Review;
  hide(){

  }
}

//////////////////////ReviewListComponent////////////////
@Component({
  selector: 'review-list',
  inputs: ['reviewList'],
  outputs: ['onReviewSelect'],
  directives: [ReviewComponent, ReviewDetailsComponent],
  template: `
  <review-display *ngFor="#currentReview of reviewList" (click)="reviewClicked(currentReview)" [class.selected]="currentReview === selectedReview" [review]="currentReview">
  </review-display>
  `
})

export class ReviewListComponent {
  public reviewList: Review[];
  public onReviewSelect: EventEmitter<Review>;
  public selectedReview: Review;
  constructor() {
    this.onReviewSelect = new EventEmitter();
  }

  reviewClicked(clickedReview: Review): void {
    console.log('child', clickedReview);
    this.selectedReview = clickedReview;
    if (clickedReview.hidden) {
      clickedReview.hidden = false;
    }
    else {
      clickedReview.hidden = true;
    }
    this.onReviewSelect.emit(clickedReview);
  }
}

////////////////////////appComponent///////////////
@Component({
  selector: 'my-app',
  directives: [ReviewListComponent],
  template: `
    <div class="container">
      <h1>Burger Week: Review</h1>
      <review-list [reviewList]="reviews"
      (onReviewSelect)="reviewWasSelected($event)">
      </review-list>
    </div>
  `
})

export class AppComponent {
  public reviews: Review[];
  constructor(){
    this.reviews = [
      new Review("Noraneko", "asian", 2, 0),
      new Review("Bar Bar", "american", 6, 1),
      new Review("Rialto", "southern", 1, 2),
      new Review("Killer Burger", "american", 7, 3),
      new Review("McDonald's", "american", 1, 4),
      new Review("Dave's Tavern", "american", 5, 5)
    ];

  }
  reviewWasSelected(clickedReview: Review): void {
    console.log('parent', clickedReview);
  }
}
