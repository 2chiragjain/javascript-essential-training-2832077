/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */
// JavaScript code​​​​​​‌‌‌​​​​​​​‌​​​‌‌​​‌​​‌‌‌​ below
// Write your answer here, then test your code.

// Change these boolean values to control whether you see
// the expected answer and/or hints

const deskArray = [
  "pen",
  "camera",
  "phone",
  "notebook",
  "headphones",
  "laptop",
  "light bulb",
  "USB drive",
  "elephant",
];

const processArray = (deskArray) => {
  let newDeskArr = [...deskArray];

  // Your code goes here
  newDeskArr.pop();
  newDeskArr.sort();
  newDeskArr.unshift(newDeskArr.pop());
  const usbindex = newDeskArr.indexOf("USB drive");

  //   console.log(usbindex);
  newDeskArr.push(newDeskArr.splice(usbindex, 1));

  // Your code ends here

  return newDeskArr;
};
const result = processArray(deskArray);

console.log(result);
