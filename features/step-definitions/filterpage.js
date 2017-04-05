import * as filterpage from '../../pageObjects/filterpage'


module.exports = function () {

    this.Given(/^I filter by option "([^"]*)"$/, filterpage.filterByColour)
    this.Given(/^I select colour 'Black'$/, filterpage.filterByColourBlack)
    this.When(/^I apply these filters$/,filterpage.apply)


}
