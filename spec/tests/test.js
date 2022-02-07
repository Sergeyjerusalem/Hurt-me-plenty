const DriverHolder = require('../../src/app/driverHolder/driverholder');
const CloudGoogle = require('../../src/app/pages/workingPages/cloudGoogle');
const GoogleCalc = require('../../src/app/pages/workingPages/googleCalc');
const TestInfromation = require('../../src/app/pages/workingPages/testsite/testInf')
const dh = new DriverHolder;


describe("A suite is just a function", function () {
    let driver = null;

    beforeAll(async function () {
        driver = await dh.getDriver();

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000
    })

    beforeEach(async function () {
        await driver.manage().window().maximize();
    });

    afterEach(async function () {
        await dh.clear();
    });

    afterAll(async function () {
        await driver.quit();
    });

    it("1st test suite", async function () {
        let cloudGoogle = new CloudGoogle(driver);
        let googleCalc = new GoogleCalc(driver);
        let testInformation = new TestInfromation(driver);
        await cloudGoogle.getPage('');
        await cloudGoogle.waitLabel('');
        await cloudGoogle.click('searchLabel');
        await cloudGoogle.waitSearchInput();
        await cloudGoogle.sendKeys('searchInput', 'Google Cloud Platform Pricing Calculator');
        await cloudGoogle.click('searchLabel');
        await cloudGoogle.waitSearchTitle();
        await cloudGoogle.selectSearchTitle(0);
        await googleCalc.SwitchtoFrame();
        await googleCalc.waitNumberOfInstance();
        await googleCalc.calcSendKeys('numberOfInstance', '4');
        await googleCalc.changeOperatingSys();
        await googleCalc.changeClass();
        await googleCalc.changeSeries();
        await googleCalc.changeType();
        await googleCalc.space();
        await googleCalc.addGPU();
        await googleCalc.addSSD();
        await googleCalc.addDatacenter();
        await googleCalc.addCommUsage();
        await googleCalc.click('addToEstimateButton');
        let regionText = await testInformation.getText('regionTest');
        expect(regionText).toContain('Frankfurt');
        let commitmentYear = await testInformation.getText('yearTest')
        expect(commitmentYear).toContain('1 Year');
        let classTest = await testInformation.getText('classTest');
        expect(classTest).toContain('regular');
        let ssdTest = await testInformation.getText('ssdTest');
        expect(ssdTest).toContain('2x375 GiB');
        let instanceTest = await testInformation.getText('instanceTest');
        expect(instanceTest).toContain('n1-standard-8');
        let totalCost = await testInformation.getText('totalCost');
        expect(totalCost).toContain('1,082.77');


        await driver.sleep(5000)
    });

});
