exports.Category =  {
  products: (parent, args, context) => {
    //destructuring params purpously here to understand what tree prams we do receive
    const {products} = context;
    const {filter} = args;
    const {id} = parent;

    // filter by category
    let filteredProducts = products.filter(prod => prod.categoryId === id);

    //filter if filter param passed
    if(filter) {

      //filter by onSale property
      if(filter.onSale) {
        filteredProducts = filteredProducts.filter(prod => prod.onSale);
      }
      else {
        filteredProducts = filteredProducts.filter(prod => !prod.onSale);
      }

      // filter by on avgRating 
      
    }
    return filteredProducts
  }
};