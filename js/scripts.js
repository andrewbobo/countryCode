$.getJSON("http://freegeoip.net/json/", function(data) {
  var countryCode = data.country_code;

  var links = {
    UA: "https:google.com",
    USA: "https:google.com",
    DE: "https:google.de",
    RU: "https:google.ru"
  };

  console.log(links);
  console.log(countryCode);

  var viewLInk = document.querySelector("#link");
  if (countryCode == "UA") {
    viewLInk.href = "https:google.ru";
  } else if (countryCode == "USA") {
    viewlink.href = "https:google.com";
  } else if (countryCode == "DE") {
    viewlink.href = "https://www.google.de";
  } else if (countryCode == "RU") {
    viewlink.href = "https://www.google.";
  }
});
