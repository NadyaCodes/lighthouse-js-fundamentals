const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

/* for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
} */

// use packingList[3]; to access a specific string

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}