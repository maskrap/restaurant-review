System.register(['angular2/core', './review.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, review_model_1;
    var ReviewComponent, ReviewListComponent, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (review_model_1_1) {
                review_model_1 = review_model_1_1;
            }],
        execute: function() {
            ReviewComponent = (function () {
                function ReviewComponent() {
                }
                ReviewComponent = __decorate([
                    core_1.Component({
                        selector: "review-display",
                        inputs: ['review'],
                        template: "\n    <h3>{{ review.name }}</h3>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReviewComponent);
                return ReviewComponent;
            }());
            exports_1("ReviewComponent", ReviewComponent);
            //////////////////////ReviewListComponent////////////////
            ReviewListComponent = (function () {
                function ReviewListComponent() {
                    this.onReviewSelect = new core_1.EventEmitter();
                }
                ReviewListComponent.prototype.reviewClicked = function (clickedReview) {
                    console.log('child', clickedReview);
                    this.selectedReview = clickedReview;
                    this.onReviewSelect.emit(clickedReview);
                };
                ReviewListComponent = __decorate([
                    core_1.Component({
                        selector: 'review-list',
                        inputs: ['reviewList'],
                        outputs: ['onReviewSelect'],
                        directives: [ReviewComponent],
                        template: "\n  <review-display *ngFor=\"#currentReview of reviewList\" (click)=\"reviewClicked(currentReview)\" [class.selected]=\"currentReview === selectedReview\" [review]=\"currentReview\"></review-display>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReviewListComponent);
                return ReviewListComponent;
            }());
            exports_1("ReviewListComponent", ReviewListComponent);
            ////////////////////////appComponent///////////////
            AppComponent = (function () {
                function AppComponent() {
                    this.reviews = [
                        new review_model_1.Review("Noraneko", "asian", 2, 0),
                        new review_model_1.Review("Bar Bar", "american", 6, 1),
                        new review_model_1.Review("Rialto", "southern", 1, 2),
                        new review_model_1.Review("Killer Burger", "american", 7, 3),
                        new review_model_1.Review("McDonald's", "american", 1, 4),
                        new review_model_1.Review("Dave's Tavern", "american", 5, 5)
                    ];
                }
                AppComponent.prototype.reviewWasSelected = function (clickedReview) {
                    console.log('parent', clickedReview);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [ReviewListComponent],
                        template: "\n    <div class=\"container\">\n      <h1>Burger Week: Review</h1>\n      <review-list [reviewList]=\"reviews\"\n      (onReviewSelect)=\"reviewWasSelected($event)\">\n      </review-list>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map