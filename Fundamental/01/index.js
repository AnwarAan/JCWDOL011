//////////
//01
//////////
function findAreaRectangle(p, l) {
  return p * l;
}
console.log(findAreaRectangle(20, 10));

//////////
//02
//////////
function perimeterOfRectangle(p, l) {
  return p * 2 + l * 2;
}
console.log(perimeterOfRectangle(5, 2));

//////////
//03
//////////
const PI = 3.14;
function diameter(r) {
  return r * 2;
}
console.log(diameter(7));

function circumreference(p, r) {
  return 2 * p * r;
}
console.log(circumreference(PI, 7));

function areaOfCircle(p, r) {
  return p * r * r;
}
console.log(areaOfCircle(PI, 7));

//////////
//04
//////////
function angleOfTriangle(a) {
  return Math.abs(180 - a);
}
console.log(angleOfTriangle(90));

//////////
//05
//////////
function betweenTwoDates(date) {
  const date1 = new Date().getDate();
  const date2 = new Date(date).getDate();
  return date1 - date2;
}
console.log(betweenTwoDates("01/01/2000"));

//////////
//06
//////////
function convertDays(d) {
  const year = Math.floor(d / 365);
  const month = Math.floor((d % 365) / 30);
  const day = (d % 365) % 30;
  return `year ${year}, month ${month}, day ${day}`;
}
console.log(convertDays(400));
