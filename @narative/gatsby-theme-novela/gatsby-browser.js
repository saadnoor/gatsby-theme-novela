exports.onInitialClientRender = require('./gatsby/browser/onInitialClientRender');
exports.onRouteUpdate = require('./gatsby/browser/onRouteUpdate');
exports.shouldUpdateScroll = require('./gatsby/browser/shouldUpdateScroll');
// const { React } = require('react');
// const {SimpleBottomNavigation} = require('./src/components/BottomNavBar/BottomNavBar').default;
// exports.wrapPageElement = ({ element, props }) => {
//     // props provide same data to Layout as Page element will get
//     // including location, data, etc - you don't need to pass it
//     return <SimpleBottomNavigation {...props}>{element}</SimpleBottomNavigation>
//   }