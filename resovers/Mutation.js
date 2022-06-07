const {v4: uuid} = require('uuid');
const { reviews } = require('../db');

exports.Mutation = {
  addCategory: (parent, args, context) => {
    const {name} = args.input;
    const {categories} = context;

    const newCategory = {
      id: uuid(),
      name
    }

    categories.push(newCategory);
    console.log(categories);

    return newCategory;
  },
  addProduct: (parent, args, context) => {
    const {name, onSale, categoryId, price, description, quantity, image} = args.input;
    const {products} = context;
    const newProduct = {
      id: uuid(),
      name,
      onSale,
      image,
      categoryId,
      price,
      quantity,
      description,
      reviews: []
    }
    products.push(newProduct);

    return newProduct;
  },
  addReview: (parent, args, context) => {
    const {date, title, comment, rating, productId } = args.input;
    const {reviews} = context;

    const newReview = {
      date, 
      title, 
      comment, 
      rating, 
      productId
    }
    reviews.push(newReview);

    return newReview;
  },
  deleteCategory: (parent, args, context) => {
    const {id} = args;
    context.categories = context.categories.filter(cat => cat.id !== id);
    context.products = context.poroducts.map(prod => {
      if(prod.categoryId === id) {
        return {
          ...prod,
          categoryId: null
        }
      }
      return prod;
    })
    return true;
  },

  deleteProduct: (parent, args, context) => {
    const {id} = args;
    context.products = context.products.filter(prod => prod.id !== id);

    context.reviews = context.reviews.filter(review => review.prodId !== id);

    return true;
  },

  updateCategory: (parent, args, context) => {
    const {id, input} = args;
    const {categories} = context;

    const catIdx = categories.findIndex(cat => cat.id === id);

    categories[catIdx] = {
      ...categories[catIdx],
      ...input
    }

    return categories[catIdx];
  },
  updateProduct: (parent, args, context) => {
    const {id, input} = args;
    const {products} = context;
    const prodIdx = products.findIndex(prod => prod.id === id);

    products[prodIdx] = {
      ...products[prodIdx],
      ...input
    }

    return products[prodIdx];
  }
}