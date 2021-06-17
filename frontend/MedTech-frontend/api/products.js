const API_ENDPOINT =   `http://localhost:3000/getProducts`


const getProducts = async () => {
    const response = await fetch(API_ENDPOINT)
    const json = await response.json()

    console.log(json)
    return json.data.products
}

export { getProducts };
