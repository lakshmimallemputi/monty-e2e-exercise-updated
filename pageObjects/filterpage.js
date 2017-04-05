
//TODO: Make following selectors parameterized so that can be used for other selectors
export const filterByColour = () => {

    browser.click("//div[@class='Refinements is-shown']//span[contains(text(),'Colour')]")

}

export const filterByColourBlack = () => {

    browser.click("//div[@class='Refinements is-shown']//span[contains(text(),'black')]")
}

export const apply = () => {

    browser.click(".Button.Refinements-applyButton")


}