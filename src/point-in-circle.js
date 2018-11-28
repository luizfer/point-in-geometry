const PointInCircle = (point, centerCircle, ray) => {
  
  var originOne = centerCircle[0] - point[0];
  var originTwo = centerCircle[1] - point[1];
  var radius = Math.pow(ray, 2);
  var dpc = Math.sqrt((Math.pow(originOne , 2)) + (Math.pow(originTwo, 2)))
  
  return dpc < radius;
};

export default PointInCircle;
