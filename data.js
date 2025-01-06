"use strict";

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

const iconConts = document.querySelectorAll(".iconConts");
const colors = ["#37a477", "#336eeb", "#9233eb", "#33ebe2"];

iconConts.forEach(function (cont, i) {
  const colorIndex = i % colors.length;

  cont.style.background = colors[colorIndex];
});

const harm = document.querySelector(".harm");

const mobile = document.querySelector(".mobile");

harm.addEventListener("click", function () {
  mobile.classList.toggle("hidden");
  console.log("click");
});

const fname = document.querySelectorAll(".fname");
const namedisplay = document.querySelector(".name");
const job = document.querySelector(".job");
const test = document.querySelector(".test");

const names = [
  "Omolara Gbademosi",
  "Cheta Odigbo",
  "Sarah Ladipo",
  "Udeme Udoh",
];

const jobs = ["Nurse", "Businessman", "Business developer"];

const texts = [
  ` When ASUU called off the strike and my daughter was to go back to
              school, the money I was expecting wasn't forthcoming and my
              daughter is about to graduate. It’s FairMoney loans that helped
              us. I started a new business in school. It’s been going well, but
              I needed some money to buy things for this season. Can’t ask my
              parents because things are tight. I eventually used FairMoney
              loans, and my business has been growing.`,

  ` My favourite thing about my FairMoney account is the free transfer
              because I do a lot of transfers around salary period. When I’m now
              balancing my account, it won’t balance again because of the
              transfer charge. Never again. The thing I like is the all-in-one
              ness. Once money enters my account, I can easily transfer some to
              FairSave or FairLock. No excuses, no stress of transferring out.
              Everything is in one place.`,
  `    I remember when I got my first 2% cash back. I thought it was a
              debit. I wanted to fight. When I realised it was actually a
              credit, I grinned a lot. It was small, but I liked it. The biggest
              reason I like your cards is that I can pay for my Netflix
              comfortably. Before, I used my friend's card. For some reason, my
              other cards just don’t work. Now, I use my FairMoney card
              conveniently.`,
  ` Am limited to giving you 5 star FairMoney. You are my best app
              presently on my phone. App that gives me daily interest
              (FairSave), app that gives highest interest on my savings
              (Fairlock), App that gives me money when am broke (Fairmoney
              loan), App that gives me discount in my airtime and data purchase.
              Who dey breath!!! Fairmoney app- making life convenient; is just a
              click away. I love you and there's nothing you can do about it.`,
];

fname.forEach(function (name, i) {
  name.addEventListener("click", function (e) {
    console.log(e.target);

    fname.forEach(function (c) {
      c.classList.remove("activeName");
    });

    name.classList.add("activeName");

    names[i];
    namedisplay.textContent = this.textContent;

    job.textContent = jobs[i];
    test.textContent = texts[i];
  });
});
