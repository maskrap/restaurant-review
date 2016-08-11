import { Component, EventEmitter } from 'angular2/core';
import { Review } from './review.model';

@Component({
  selector: "review-display",
  inputs: ['review'],
  template: `
    <h3>{{ review.name }}</h3>
  `
})

export class ReviewComponent {
  public review: Review;
}

//////////////////////ReviewListComponent////////////////
@Component({
  selector: 'review-list',
  inputs: ['reviewList'],
  outputs: ['onReviewSelect'],
  directives: [ReviewComponent],
  template: `
  <review-display *ngFor="#currentReview of reviewList" (click)="reviewClicked(currentReview)" [class.selected]="currentReview === selectedReview" [review]="currentReview"></review-display>
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
