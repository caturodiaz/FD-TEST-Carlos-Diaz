export const getData = () => {
    fetch('../products.json')
        .then(function(response){
            return response.json();
        })
        .then(function(json) {
            console.log(json.products);
        })

}