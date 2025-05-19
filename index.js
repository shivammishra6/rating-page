const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

let rating = 0;

one.onclick = () => {
  one.style.backgroundColor = "white";
  two.style.backgroundColor = "hsl(210, 2%, 22%)";
  three.style.backgroundColor = "hsl(210, 2%, 22%)";
  four.style.backgroundColor = "hsl(210, 2%, 22%)";
  five.style.backgroundColor = "hsl(210, 2%, 22%)";
  rating = 1;
};
two.onclick = () => {
  one.style.backgroundColor = "hsl(210, 2%, 22%)";
  two.style.backgroundColor = "white";
  three.style.backgroundColor = "hsl(210, 2%, 22%)";
  four.style.backgroundColor = "hsl(210, 2%, 22%)";
  five.style.backgroundColor = "hsl(210, 2%, 22%)";
  rating = 2;
};
three.onclick = () => {
  one.style.backgroundColor = "hsl(210, 2%, 22%)";
  two.style.backgroundColor = "hsl(210, 2%, 22%)";
  three.style.backgroundColor = "white";
  four.style.backgroundColor = "hsl(210, 2%, 22%)";
  five.style.backgroundColor = "hsl(210, 2%, 22%)";
  rating = 3;
};
four.onclick = () => {
  one.style.backgroundColor = "hsl(210, 2%, 22%)";
  two.style.backgroundColor = "hsl(210, 2%, 22%)";
  three.style.backgroundColor = "hsl(210, 2%, 22%)";
  four.style.backgroundColor = "white";
  five.style.backgroundColor = "hsl(210, 2%, 22%)";
  rating = 4;
};
five.onclick = () => {
  one.style.backgroundColor = "hsl(210, 2%, 22%)";
  two.style.backgroundColor = "hsl(210, 2%, 22%)";
  three.style.backgroundColor = "hsl(210, 2%, 22%)";
  four.style.backgroundColor = "hsl(210, 2%, 22%)";
  five.style.backgroundColor = "white";
  rating = 5;
};

document.getElementById("submit").onclick = () => {
  if (rating == 0) alert("Please select a number to rate");
  else {
    document.getElementById("entrySection").style.display = "none";
    document.getElementById("thankYouSection").style.display = "block";
    document.getElementById("finalRating").innerText=`You selected ${rating} out of 5`
  }
};
