var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET users listing. */



router.get("/items", (req, res) => {
  const q = req.query.q; 

  axios
  .get("http://api.mercadolibre.com/sites/MLA/search?limit=4&q=" + q)
  .then((result) => {
    const myCategories = result.data.available_filters.find(c => c.id === 'category')
    const theCategories = myCategories.values;
    
    theCategories.sort(function (a,b){
      if (a.results > b.results) {
        return -1;
      }
      if (a.results < b.results) {
        return 1;
      }
      return 
    })
    

    const myProducts = result.data.results.map(myProduct => {return {
      id: myProduct.id,
      title: myProduct.title,
      price: {
        currency: myProduct.currency_id,
        amount: String(myProduct.price).split(".")[0],
        decimal: String(myProduct.price).split(".")[1] || "0"
      },
      address: myProduct.address.state_name,
      
      picture: myProduct.thumbnail,
      condition: myProduct.condition,
      free_shipping: myProduct.shipping.free_shipping,
    
    }})
    res.json({categories: theCategories[0].name,
      items: myProducts})
  })
  .catch(error => console.log(error))
  })
    

router.get('/items/:id', function(req, res) {
  //el param forman parte del path, no son cosas que nosotros le ponemos en la ruta
  const id = req.params.id
  axios.get('https://api.mercadolibre.com/items/' + id)
  .then(resultProduct => {
    const category = resultProduct.data.category_id;
    const resultProductProp = resultProduct.data
    axios.get('https://api.mercadolibre.com/items/' + id + '/description')
      .then(resultDescription => {
        axios.get('https://api.mercadolibre.com/categories/' + category)
          .then(resultCategory => {
            const resultCategoryMap = resultCategory.data.path_from_root.map(c => {return c.name})

            const myProducts = {

              categories: resultCategoryMap,
              item: { 
                id:  resultProductProp.id,
                title: resultProductProp.title,
                price: {
                  currency: resultProductProp.currency_id,
                  amount: String(resultProductProp.price).split(".")[0],
                  decimal: String(resultProductProp.price).split(".")[1] || "0"
                },
                picture: resultProductProp.pictures[0].url,
                condition: resultProductProp.condition,
                shipping: resultProductProp.shipping.free_shipping,
                sold_quantity: resultProductProp.sold_quantity
               
              },
              categoryId: category,
              description: resultDescription.data.plain_text,

            }
        res.json(myProducts)
      })
    .catch(function (err) {console.log("error", err)}) 
}).catch(function (err) {console.log("error", err)}) 
  }).catch(function (err) {console.log("error", err)}) 
});

module.exports = router;
