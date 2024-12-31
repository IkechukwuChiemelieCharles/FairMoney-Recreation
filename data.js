"use strict";
// const fname1 = document.querySelector("#omo");
// const fname2 = document.querySelector("#cheta");
// const fname3 = document.querySelector("#sarah");
// const fname4 = document.querySelector("#udeme");

// const test1 = document.querySelector(".omo");
// const test2 = document.querySelector(".cheta");
// const test3 = document.querySelector(".sarah");
// const test4 = document.querySelector(".udeme");

// const top1 = document.querySelector(".top1");
// const top2 = document.querySelector(".top2");
// const top3 = document.querySelector(".top3");
// const top4 = document.querySelector(".top4");

const fnames = document.querySelectorAll(".fname");

fnames.forEach(function (fname, i) {
  fname.addEventListener("click", function () {
    // console.log(this);
    const tests = document.querySelectorAll(".test");
    tests.forEach(function (test) {
      test.classList.remove("hide");
      console.log("clicked");
    });
    // tests.forEach(function (others) {
    tests[i].classList.add("hide");
    console.log("clicked2");

    // });
    // fnames[i].classList.toggle("activeName");
    // fnames[i].classList.remove("activeName");
  });
});

// fname1.addEventListener("click", function () {
//   test1.classList.remove("hide");
//   test2.classList.add("hide");
//   test3.classList.add("hide");
//   test4.classList.add("hide");

//   fname1.classList.remove("inActive");
//   fname1.classList.add("activeName");

//   fname2.classList.remove("activeName");
//   fname3.classList.remove("activeName");
//   fname4.classList.remove("activeName");

//   top1.classList.remove("hide");
//   top2.classList.add("hide");
//   top3.classList.add("hide");
//   top4.classList.add("hide");
// });
// fname2.addEventListener("click", function () {
//   test2.classList.remove("hide");
//   test1.classList.add("hide");
//   test3.classList.add("hide");
//   test4.classList.add("hide");

//   fname2.classList.remove("inActive");
//   fname2.classList.add("activeName");

//   fname1.classList.remove("activeName");
//   fname3.classList.remove("activeName");
//   fname4.classList.remove("activeName");

//   top2.classList.remove("hide");
//   top1.classList.add("hide");
//   top3.classList.add("hide");
//   top4.classList.add("hide");
// });
// fname3.addEventListener("click", function () {
//   test3.classList.remove("hide");
//   test1.classList.add("hide");
//   test2.classList.add("hide");
//   test4.classList.add("hide");

//   fname3.classList.remove("inActive");
//   fname3.classList.add("activeName");

//   fname1.classList.remove("activeName");
//   fname2.classList.remove("activeName");
//   fname4.classList.remove("activeName");

//   top3.classList.remove("hide");
//   top1.classList.add("hide");
//   top2.classList.add("hide");
//   top4.classList.add("hide");
// });
// fname4.addEventListener("click", function () {
//   test4.classList.remove("hide");
//   test1.classList.add("hide");
//   test2.classList.add("hide");
//   test3.classList.add("hide");

//   fname4.classList.remove("inActive");
//   fname4.classList.add("activeName");

//   fname1.classList.remove("activeName");
//   fname2.classList.remove("activeName");
//   fname3.classList.remove("activeName");

//   top4.classList.remove("hide");
//   top2.classList.add("hide");
//   top3.classList.add("hide");
//   top1.classList.add("hide");
// });

const flagDrop = document.querySelector(".flagDrop");
const flagMenu = document.querySelector(".flagMenu");
const down = document.querySelector(".down");
const up = document.querySelector(".up");
const maps = document.querySelectorAll(".map");

flagDrop.addEventListener("click", function () {
  flagMenu.classList.toggle("hide");
  down.classList.toggle("hide");
  up.classList.toggle("hide");
});

maps.forEach(function (map) {
  map.addEventListener("click", function () {
    flagDrop.innerHTML = map.innerHTML;
    flagMenu.classList.toggle("hide");
  });
});
