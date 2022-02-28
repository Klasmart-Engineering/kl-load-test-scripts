module.exports = {
    before : (browser) => {
        console.log('Join live class - Student - Start');
    },
    'User access to testing link': (browser) => {
        browser
            .url(`https://hub.research.kidsloop.live/`);
    },
    'User signs in with valid account (Student)': (browser) => {
        browser
            .useXpath()
            .waitForElementVisible(`//body`)
            .click(`//div[normalize-space()="Can't find your country or region? Click here."]`)
            .waitForElementVisible(`//input[@id='email-input']`)
            .setValue(`//input[@id='email-input']`, `qa+stress_01@calmid.com`)
            .setValue(`//input[@id='password-input']`, `Aaa12345`)
            .click(`//input[@aria-label='policy-checkbox']`)
            .click(`//button[normalize-space()='Sign In']`)
            .waitForElementVisible(`//button[normalize-space()='Continue']`)
            .click(`//button[normalize-space()='Continue']`);
    },
    'User navigate to Schedule menu && select schedule SFU 2.0 Automation && Go Live' : (browser) => {
        browser
            .useXpath()
            .waitForElementVisible(`//button[normalize-space()='Go Live'][not(@disabled)]`)
            .click(`//button[normalize-space()='Go Live']`);
    },
    'User taps on the button Join Room' : (browser) => {
        browser
            .useXpath()
            .pause(1000)
            .windowHandles((result) => {
                const handle = result.value[1];
                browser.switchWindow(handle);
            })
            .assert.titleContains("KidsLoop Live")
            .waitForElementVisible(`//button[normalize-space()='Join Room'][not(@disabled)]`)
            .click(`//button[normalize-space()='Join Room'][not(@disabled)]`);
    },
    after: (browser) => {
        console.log('Join live class - Student - End');
        browser
            .useXpath()
            .pause(3000)
            .end();
    }
};