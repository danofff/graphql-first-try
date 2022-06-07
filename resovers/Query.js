exports.Query = {
  helloStr: () => {
    return "Hello from qraphQL";
  },
  products: (parent, args, context) => {
    const {filter} = args;
    const {products, reviews} = context;
    let filteredProducts = products;

    if(filter) {
      if(filter.onSale === true) {
        filteredProducts = filteredProducts.filter(product => product.onSale)
      } 
      else if(filter.onSale === false) {
        filteredProducts = filteredProducts.filter(product => !products.onSale)
      }

      if(filter.avgRating) {
        filteredProducts = filteredProducts.filter(product => {
          let sumRating = 0;
          let reviewCount = 0;
          reviews.forEach(review => {
            if(review.productId === product.id) {
              sumRating += review.rating;
              reviewCount++;
            }
          })
          const avgProductRating = sumRating / reviewCount;
          return avgProductRating >= filter.avgRating;
        })
      }
    }

    return filteredProducts;
  },
  product: (parent, {id}, context) => {
    const {products} = context;
    return products.find(prod => prod.id === id) || null;
  },
  categories: (parent, args, context) => {
    const {categories} = context;
    return categories;
  },
  category: (parent, {id}, context) => {
    const {categories} = context;
    return categories.find(cat => cat.id === id);
  }
}