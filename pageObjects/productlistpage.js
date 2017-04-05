var assert = require('chai').assert;

export const selectTops = () => {
    var tops = $('.ImageList-image')
    tops.click()

}

export const selectFilters = () => {

    var filter = $('.Button.Filters-refineButton')
    filter.click()

}


export const filterCount = () => {

    browser.waitForVisible('button.Button.Filters-refineButton  span', 300)
    var result = browser.getText('button.Button.Filters-refineButton  span')
    assert("(1)" == result)
}


export const productList = () => {

    browser.waitForVisible('.ProductList-products', 2000)
    browser.isVisible('.ProductList-products')
}