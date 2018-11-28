'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const PointInPolygon = (point, polygon) => {

  var x = point[0];
  var y = point[1];  
  var inside = false;

  for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      let xi = polygon[i][0], yi = polygon[i][1];
      let xj = polygon[j][0], yj = polygon[j][1];
      
      let intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }
    
  return inside;
};

const PointInCircle = (point, centerCircle, ray) => {
  
  var originOne = centerCircle[0] - point[0];
  var originTwo = centerCircle[1] - point[1];
  var radius = Math.pow(ray, 2);
  var dpc = Math.sqrt((Math.pow(originOne , 2)) + (Math.pow(originTwo, 2)));
  
  return dpc < radius;
};

exports.PointInPolygon = PointInPolygon;
exports.PointInCircle = PointInCircle;
