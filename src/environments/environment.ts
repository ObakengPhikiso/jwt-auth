const baseUrl = 'https://songaappdev.herokuapp.com'
export const environment = {
  production: false,
  baseUrl: baseUrl,
  account: baseUrl + '/api/account',
  signin: baseUrl + '/api/authenticate',
  signup: baseUrl + '/api/register',
  forgotPassword: baseUrl + '/api/account/reset-password/init',
  resetPassword: baseUrl + '/api/account/reset-password/finish',
  categories: baseUrl + '/api/categories',
  productCategories: baseUrl + '/api/product-categories'
};

