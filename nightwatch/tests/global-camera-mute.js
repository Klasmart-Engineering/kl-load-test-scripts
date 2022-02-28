const { REGION_ID, ROOM_ID } = require("../configs/config");
const { regions } = require("../configs/regions");
const { generateTeacherAuthToken, generateAccessToken, generateStudentAuthToken } = require("../utils/token-utils");

const region = regions.find(region => region.id === REGION_ID);
const accessToken = generateAccessToken();

module.exports = {
  before: function (browser) {
    //Declaring Global Timeout
    browser
      .globals.waitForConditionTimeout = 7000
  },

  'Host Teacher Join Room': function (browser) {
    const hostTeacherToken = generateTeacherAuthToken(`Teacher 1`, ROOM_ID);
    const joinPage = browser.page.join();
    joinPage
      .signInWithToken(region, accessToken, hostTeacherToken);
    joinPage
      .assert.titleContains("KidsLoop Live")
      .assert.visible(`@joinRoomButton`);
    joinPage.joinRoom();

    const livePage = browser.page.live();
    livePage.expect.element(`@mainContent`).to.be.visible;
  },

  'Non-Host Teacher Join Room': function (browser) {
    const nonHostTeacherToken = generateTeacherAuthToken(`Teacher 2`, ROOM_ID);
    browser
      .openNewWindow()
      .windowHandles(function (result) {
        browser.switchWindow(result.value[1]);
      });
    const joinPage = browser.page.join();
    joinPage.signInWithToken(region, accessToken, nonHostTeacherToken);
    joinPage
      .assert.titleContains("KidsLoop Live")
      .assert.visible(`@joinRoomButton`);
    joinPage.joinRoom();

    const livePage = browser.page.live();
    livePage.expect.element(`@mainContent`).to.be.visible;
  },

  'Student A Join Room': function (browser) {
    const studentAToken = generateStudentAuthToken(`Student A`, ROOM_ID);
    browser
      .openNewWindow()
      .windowHandles(function (result) {
        browser.switchWindow(result.value[2]);
      });
    const joinPage = browser.page.join();
    joinPage.signInWithToken(region, accessToken, studentAToken);
    joinPage
      .assert.titleContains("KidsLoop Live")
      .assert.visible(`@joinRoomButton`);
    joinPage.joinRoom();

    const livePage = browser.page.live();
    livePage.expect.element(`@mainContent`).to.be.visible;
  },

  'Host Teacher does global Camera mute': function (browser) {
    browser.windowHandles(function (result) {
      browser.switchWindow(result.value[0]);
    });
    const livePage = browser.page.live();
    livePage.assert.visible(`@globalActionButton`)
      .clickGlobalActionButton()
      .assert.visible(`@muteGlobalCameraButton`)
      .assert.attributeContains(`@muteGlobalCameraButton`, `title`, `Turn off everyone's camera`)
      .click(`@muteGlobalCameraButton`)
  },

  'Student B Join Room': function (browser) {
    const studentBToken = generateStudentAuthToken(`Student B`, ROOM_ID);
    browser
      .openNewWindow()
      .windowHandles(function (result) {
        browser.switchWindow(result.value[3]);
      });
    const joinPage = browser.page.join();
    joinPage.signInWithToken(region, accessToken, studentBToken);
    joinPage
      .assert.titleContains("KidsLoop Live")
      .assert.visible(`@joinRoomButton`);
    joinPage.joinRoom();

    const livePage = browser.page.live();
    livePage.expect.element(`@mainContent`).to.be.visible;
  },

  'Host Teacher check every of other Camera': function (browser) {
    browser
      .windowHandles(function (result) {
        browser.switchWindow(result.value[0]);
      });
    browser.pause(2000);
    const livePage = browser.page.live();
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Teacher 2`));
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Student A`));
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Student B`));
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Teacher 2`)).to.be.not.present;
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Student A`)).to.be.present;
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Student B`)).to.be.present;
  },

  'Non Host Teacher check every of other camera': function (browser) {
    browser
      .windowHandles(function (result) {
        browser.switchWindow(result.value[1]);
      });
    const livePage = browser.page.live();
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Teacher 1`));
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Student A`));
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Student B`));
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Teacher 1`)).to.be.not.present;
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Student A`)).to.be.present;
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Student B`)).to.be.present;
  },

  'Student A check every of other camera': function (browser) {
    browser
      .windowHandles(function (result) {
        browser.switchWindow(result.value[2]);
      });
    const livePage = browser.page.live();
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Teacher 1`));
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Teacher 2`));
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Student B`));
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Teacher 1`)).to.be.not.present;
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Teacher 2`)).to.be.not.present;
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Student B`)).to.be.present;
  },

  'Student B check every of other camera': function (browser) {
    browser
      .windowHandles(function (result) {
        browser.switchWindow(result.value[3]);
      });
    const livePage = browser.page.live();
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Teacher 1`));
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Teacher 2`));
    livePage.assert.visible(livePage.getParticipantSelectorInDockedRight(`Student A`));
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Teacher 1`)).to.be.not.present;
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Teacher 2`)).to.be.not.present;
    livePage.expect.element(livePage.getParticipantNoCameraSelectorInDockedRight(`Student A`)).to.be.present;
  },

  after: function (browser) {
    browser.pause(3000);
    browser.end();
  }
};