const getProducts=()=>{                       //obtengo el stock del json
    fetch('../data/stock.json')
        .then((resp)=>resp.json())
        .then(data=>{
            pintarProducto(data)
        })
}

getProducts()