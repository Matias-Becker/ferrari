const getProducts=()=>{
    fetch('/data/stock.json')
        .then((resp)=>resp.json())
        .then(data=>{
            pintarProducto(data)
        })
}

getProducts()