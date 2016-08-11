System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Review;
    return {
        setters:[],
        execute: function() {
            Review = (function () {
                function Review(name, specialty, tastiness, id) {
                    this.name = name;
                    this.specialty = specialty;
                    this.tastiness = tastiness;
                    this.id = id;
                    this.approved = false;
                }
                return Review;
            }());
            exports_1("Review", Review);
        }
    }
});
//# sourceMappingURL=review.model.js.map