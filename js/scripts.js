$.getJSON("http://freegeoip.net/json/", function(data) {
  var countryCode = data.country_code;

  var links = {
    UA: "https:amazon.com",
    USA: "https:google.com",
    DE: "https:google.de",
    RU: "https:google.ru"
  };

  console.log(links);
  console.log(countryCode);

  if (countryCode == "UA") {
    var viewlink = document.querySelector("#link");
    viewlink.href = "https:amazon.com";
  } else if (countryCode == "USA") {
    var viewlink = document.querySelector("#link");
    viewlink.href = "https:google.com";
  } else if (countryCode == "DE") {
    var viewlink = document.querySelector("#link");
    viewlink.href = "https://www.google.de";
  } else if (countryCode == "RU") {
    var viewlink = document.querySelector("#link");
    viewlink.href = "https://www.google.ru";
  } else {
    var viewlink = document.querySelector("#link");
    viewlink.href = "https:amazon.com";
  }
});
