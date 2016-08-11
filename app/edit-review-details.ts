import {Component} from 'angular2/core';
import {Review} from './review.model';

@Component({
  selector: 'edit-review-details',
  inputs: ['review'],
  template: `
    <div class="review-form">
      <h3>Edit Review: </h3>
      <input [(ngModel)]="review.name" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="review.specialty" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="review.tastiness" class="col-sm-8 input-lg"/>
    </div>
  `
})

export class EditReviewDetailsComponent {
  public review: Review;
}
