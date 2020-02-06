"use strict";

let sheetId = "1VHlB0XM5GBHVOi3aOOQU_6s-U_Kl41nLhq_zlfmhQiA";
let sheetNumber = 1;
let sheetUrl = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/" + sheetNumber + "/public/full?alt=json";
console.log(sheetUrl);

fetch(sheetUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendDates(json.feed.entry);
  });


function appendDates(dates) {
  console.log(dates);
  let htmlTemplate = "";
  for (let date of dates) {
    htmlTemplate += `
        <article class="touroption">
          <h4 class="place">${date['gsx$place']['$t']}</h4>
          <h4 class="date">${date['gsx$date']['$t']}</h4>
          <span class="lines"></span>
          <a href="${date['gsx$link']['$t']}"><p>get tickets</p></a>
        </article>
      `;
  }
  document.querySelector("#tourdiv").innerHTML += htmlTemplate;
}
