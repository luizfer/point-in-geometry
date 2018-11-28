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

export default PointInPolygon;
