/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Pack",
  30,
  "grey",
  15,
  26,
  25,
  false,
  "December 5, 2018 15:00:00 PST"
);

var content = "<h1>" + everydayPack.name + "</h1>";

for (var val in everydayPack) {
  if (typeof everydayPack[val] === "object") {
    content += "<li>" + val + ":";
    for (var i in everydayPack[val]) {
      content += i + "=" + everydayPack[val][i];
    }
    content += "</li>";
  } else content += "<li>" + val + ":" + everydayPack[val] + "</li>";
}
// const content = `
//   <main>
//     <article>
//       <h1>${everydayPack.name}</h1>
//       <ul>
//         <li>Volume: ${everydayPack.volume}</li>
//         <li>Color: ${everydayPack.color}</li>
//         <li>Age: ${everydayPack.backpackAge()}</li>
//         <li>Number of pockets: ${everydayPack.pocketNum}</li>
//         <li>Left strap length: ${everydayPack.strapLength.left}</li>
//         <li>Right strap length: ${everydayPack.strapLength.right}</li>
//         <li>Lid status: ${everydayPack.lidOpen}</li>
//       </ul>
//     </article>
//   </main>
// `;

document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
