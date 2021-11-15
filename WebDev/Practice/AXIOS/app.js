axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res=>{
        console.log(res.data.ticker.price);
    })
    .catch(err=>{
        console.log("Error caught",err);
    })

const axiosBitcoinPrice = async () => {
    try{
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price);
    }catch(e){
        console.log('Error caught', e);
    }
}
