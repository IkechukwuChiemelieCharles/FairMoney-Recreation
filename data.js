// const fnames = document.querySelectorAll(".fname");
// const tests = document.querySelectorAll(".test");

// fnames.forEach(function (fname) {
//   fname.addEventListener("click", function () {
//     tests.forEach(function (test) {
//       test.classList.remove("hide");
//     });
//   });
// });

const fname1 = document.querySelector("#omo");
const fname2 = document.querySelector("#cheta");
const fname3 = document.querySelector("#sarah");
const fname4 = document.querySelector("#udeme");

const test1 = document.querySelector(".omo");
const test2 = document.querySelector(".cheta");
const test3 = document.querySelector(".sarah");
const test4 = document.querySelector(".udeme");

fname1.addEventListener("click", function () {
  test1.classList.remove("hide");
  test2.classList.add("hide");
  test3.classList.add("hide");
  test4.classList.add("hide");

  fname1.classList.remove("inActive");
  fname1.classList.add("activeName");

  fname2.classList.remove("activeName");
  fname3.classList.remove("activeName");
  fname4.classList.remove("activeName");
});
fname2.addEventListener("click", function () {
  test2.classList.remove("hide");
  test1.classList.add("hide");
  test3.classList.add("hide");
  test4.classList.add("hide");

  fname2.classList.remove("inActive");
  fname2.classList.add("activeName");

  fname1.classList.remove("activeName");
  fname3.classList.remove("activeName");
  fname4.classList.remove("activeName");
});
fname3.addEventListener("click", function () {
  test3.classList.remove("hide");
  test1.classList.add("hide");
  test2.classList.add("hide");
  test4.classList.add("hide");

  fname3.classList.remove("inActive");
  fname3.classList.add("activeName");

  fname1.classList.remove("activeName");
  fname2.classList.remove("activeName");
  fname4.classList.remove("activeName");
});
fname4.addEventListener("click", function () {
  test4.classList.remove("hide");
  test1.classList.add("hide");
  test2.classList.add("hide");
  test3.classList.add("hide");

  fname4.classList.remove("inActive");
  fname4.classList.add("activeName");

  fname1.classList.remove("activeName");
  fname2.classList.remove("activeName");
  fname3.classList.remove("activeName");
});
