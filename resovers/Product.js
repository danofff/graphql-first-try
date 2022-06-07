exports.Product = {
  category: (parent, args, context) => {
    const categoryId = parent.categoryId;
    const {categories} = context;
    return categories.find(category => category.id === categoryId);
  },
  reviews: (parent, args, context) => {
    const {reviews} = context;
    const {id} = parent;

    return reviews.filter(review => id === review.productId);
  }
};