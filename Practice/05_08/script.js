/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

document
  .querySelectorAll(".lid-toggle")
  .forEach((btn) =>
    btn.click(
      (document.querySelector(".backpack__lid").innerHTML =
        "Lid status: <span>Opesn</span>")
    )
  );

//document.querySelector(".lid-toggle")
// backpack__lid
