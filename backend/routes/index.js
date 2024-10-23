const user_route = require('./user');
const {coupon_route, photos_route} = require('./coupon');
const setting_route = require('./setting');
const inquiry_route = require('./inquiry');

module.exports = {
    user_route,
    coupon_route,
    photos_route,
    setting_route,
    inquiry_route
}