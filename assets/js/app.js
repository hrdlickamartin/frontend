const $ = require('jquery');

require('bootstrap');
require('magnific-popup');
require('jquery-easing');

require('./contact_me');
require('./freelancer');
require('./jqBootstrapValidation');

$(document).ready(() => {

});

const imagesContext = require.context('../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
imagesContext.keys().forEach(imagesContext);