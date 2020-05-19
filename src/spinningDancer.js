var SpinningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="starfish"></span>');
  this.setPosition(top, left);
};

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node;
};