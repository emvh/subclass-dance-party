var ShakyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="jellyfish"></span>');
  this.setPosition(top, left);
};

ShakyDancer.prototype = Object.create(Dancer.prototype);
ShakyDancer.prototype.constructor = ShakyDancer;

ShakyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node;
};
