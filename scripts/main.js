
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

lowestGrade = "";
highestGrade = "";
let a = [];
let b = [];
let c = [];
let d = [];
let f = [];

for (const value of scores) {
    if (value > 90) {
      a.push(value);
      //  console.log(a);
    }
    else if (value > 80) {
      b.push(value);
      //  console.log(b);
    }
    else if (value > 70) {
      c.push(value);
      //  console.log(c);
    }
    else if (value > 60) {
      d.push(value);
      //  console.log(d);
    }
    else {
      f.push(value);
        // console.log(f); 
      }
  };
  

  
  
// How many of each grade?
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(f);

// What is the lowest grade?
for (const score of scores) {
  if (score <= 55) {
    lowestGrade = score;
  } else if (score > 95) {
    highestGrade = score;
  }
};
 console.log(lowestGrade);

// What is the highest grade?
console.log(highestGrade);