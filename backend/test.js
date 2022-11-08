global.fetch = require('node-fetch')
const cc = require('cryptocompare')
cc.setApiKey('6479ea10b17aa9c2f9cf29631a4a8885740f5e54c6dac34a25f1485d917c4b25')
 
cc.histoDay('BTC', 'USD')
.then(prices => {
  console.log(prices)
})
.catch(console.error)
