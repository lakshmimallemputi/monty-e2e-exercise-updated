import * as productlistpage from '../../pageObjects/productlistpage'
module.exports= function () {

    this.Given(/^I am viewing product list tops$/, productlistpage.selectTops);
    this.Given(/^I filter the product list$/, productlistpage.selectFilters)
    this.Then(/^Filter button has 1 filter$/, productlistpage.filterCount)
    this.Then(/^Filter returns a product list$/, productlistpage.productList)

};
