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

  var viewlink = document.querySelector("#link");
  viewlink.href = links[countryCode];

  console.log(viewlink);
});
