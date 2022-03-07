"use strict";
exports.__esModule = true;
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(x, islikeselected) {
        var _this = this;
        this.Onclick = function () {
            if (_this.islikeselected) {
                _this.islikeselected = !_this.islikeselected;
                _this.count -= 1;
            }
            else {
                _this.islikeselected = !_this.islikeselected;
                _this.count += 1;
            }
        };
        this.count = x;
        this.islikeselected = islikeselected;
    }
    Like.prototype.getCount = function () {
        return this.count;
    };
    return Like;
}());
exports.Like = Like;
/*
Test for Git
*/
