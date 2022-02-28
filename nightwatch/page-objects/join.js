const joinCommands = {
    signInWithToken: function (region, access, token) {
        return this
            .api.url(`${region.services.live}/?token=${token}`)
            .setCookie({
                name: `access`,
                value: access,
                path: `/`,
                domain: `.${region.domain}`,
                secure: false,
                httpOnly: false,
            })
            .waitForElementVisible(`//body`)
    },
    joinRoom: function () {
        return this.waitForElementVisible(`@joinRoomButton`)
            .click(`@joinRoomButton`)
            .waitForElementNotPresent(`@loading`);
    }
}
module.exports = {
    commands: [joinCommands],
    elements: {
        joinRoomButton: {
            selector: `//button[normalize-space()='Join Room'][not(@disabled)]`
        },
        loading: {
            selector: `//h6[normalize-space()='Loading'][not(@disabled)]`
        }
    }
}