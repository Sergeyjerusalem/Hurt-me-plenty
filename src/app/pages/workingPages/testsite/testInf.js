const GoogleCalc  = require('../googleCalc')
class TestInfromation extends GoogleCalc {
    constructor(driver) {
        super(driver)
        this.regionTest = "//div[@class = 'md-list-item-text ng-binding'][contains(text(), 'Region')]"
        this.yearTest = "//div[@class = 'md-list-item-text ng-binding'][contains(text(), 'Commitment')]";
        this.classTest = "//div[@class = 'md-list-item-text ng-binding'][contains(text(), 'VM')]";
        this.ssdTest = "//div[@class = 'md-list-item-text ng-binding cpc-cart-multiline flex'][contains(text(), 'Local')]";
        this.instanceTest = "//div[@class = 'md-list-item-text ng-binding cpc-cart-multiline flex'][contains(text(), 'Instance')]";
        this.totalCost = '//b[@class="ng-binding"]'


    }

};

module.exports = TestInfromation ;