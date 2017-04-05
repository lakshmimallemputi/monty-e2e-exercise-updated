import * as listpage from '../../pageObjects/listpage'
module.exports= function () {

    this.Given(/^I am viewing product list tops$/, listpage.hasText );


};
