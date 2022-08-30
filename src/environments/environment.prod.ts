const baseUrl = 'https://songaappdev.herokuapp.com'

export const environment = {
production: true,
baseUrl: baseUrl,
account: baseUrl + '/api/account',
signin: baseUrl + '/api/authenticate',
signup: baseUrl + '/api/account',
forgotPassword: baseUrl + '/api/account/reset-password/init',
resetPassword: baseUrl + '/api/account/reset-password/finish',
categories: baseUrl + '/api/categories',
};
