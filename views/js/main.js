document.querySelector(".button").addEventListener("click", crypto)

function crypto() {
  let symbols = document.querySelector('#crypto').value
  console.log(symbols);

  //const url = (`https://cors-anywhere.herokuapp.com/https://api.lunarcrush.com/v2?data=assets&key=7go5ymwp08iu332bz58dz8&symbol=${symbols}`)
  fetch("https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": "03b2c3c528msh8a39ab844cd6ccep1e9cf3jsnc8a2c2ada400"
	}
})
    .then(res => res.json())
    .then(data => {
      for (var i = 0; i < data.length; i++) {
        if (symbols.toLowerCase() === data[i].symbol){
        console.log(data[i]);

      document.querySelector('.N').innerText = data[i].name
      document.querySelector('.p').innerText = "$" + data[i].current_price
      document.querySelector('.r').innerText = "Current Rank:" + " " + data[i].market_cap_rank
      document.querySelector('.s').innerText = "Symbol:" + " " + data[i].symbol
    }}
})}
function fetchCrypto() {

  //const url = (`https://cors-anywhere.herokuapp.com/https://api.lunarcrush.com/v2?data=assets&key=7go5ymwp08iu332bz58dz8&symbol=${symbols}`)
  fetch("https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=10&order=market_cap_desc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": "03b2c3c528msh8a39ab844cd6ccep1e9cf3jsnc8a2c2ada400"
	}
})
    .then(res => res.json())
    .then(data => {
      let innerHTML = ""
      data.forEach(element => {
        console.log(element);
        innerHTML = innerHTML + "<tr><td>" + element.name + "</td><td>" + "$ " + (element.current_price).toFixed(2) + "</td><td>" + element.market_cap_rank + "</td><td>" + element.symbol + "</td></tr>"

})

       document.querySelector('#data').innerHTML = innerHTML

      if (data[0].high_24h > 1) {
        document.querySelector('#print').innerHTML = Math.floor(data[0].high_24h)
      } else {
        document.querySelector('#print').innerHTML = data[0].high_24h
      }

    })
    .catch(err => {
      console.error("Error - couldn't find results, sorry!" + err)
    })
}

fetchCrypto()
