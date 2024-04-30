/* global AFRAME */
AFRAME.registerComponent('spawn-in-circle', {
  schema: {
    radius: { type: 'number', default: 1 }
  },

  init: function () {
    var el = this.el;
    var center = el.getAttribute('position');

    // Get a random angle for the position
    var angleRad = this.getRandomAngleInRadians();
    // Calculate a random position on the circle
    var circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
    // Add the circle position to the center to get the world position
    var worldPoint = { x: circlePoint.x + center.x, y: center.y, z: circlePoint.y + center.z };
    // Set the position of the entity
    el.setAttribute('position', worldPoint);
  },

  getRandomAngleInRadians: function () {
    return Math.random() * Math.PI * 2;
  },

  randomPointOnCircle: function (radius, angleRad) {
    var x = Math.cos(angleRad) * radius;
    var y = Math.sin(angleRad) * radius;
    return { x: x, y: y };
  }
});
