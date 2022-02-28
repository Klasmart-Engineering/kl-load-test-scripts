const GLOBAL_ACTION_ICON_PATH = `M10 .4C4.705.4.399 4.707.399 10c0 5.293 4.306 9.6 9.601 9.6 5.293 0 9.6-4.307 9.6-9.6 0-5.293-4.307-9.6-9.6-9.6zm8.188 9.6c0 1.873-.636 3.6-1.696 4.98-.3-.234-.619-.867-.319-1.523.303-.66.382-2.188.312-2.783-.066-.594-.375-2.025-1.214-2.039-.838-.012-1.413-.289-1.911-1.283-1.033-2.068 1.939-2.465.906-3.609-.289-.322-1.783 1.322-2.002-.869-.014-.157.135-.392.336-.636 3.244 1.09 5.588 4.157 5.588 7.762zM8.875 1.893c-.196.382-.713.537-1.027.824-.684.619-.978.533-1.346 1.127-.371.594-1.567 1.449-1.567 1.879s.604.936.906.838c.302-.1 1.099-.094 1.567.07.469.166 3.914.332 2.816 3.244-.348.926-1.873.77-2.279 2.303-.061.225-.272 1.186-.285 1.5-.025.486.344 2.318-.125 2.318-.471 0-1.738-1.639-1.738-1.936 0-.297-.328-1.338-.328-2.23 0-.891-1.518-.877-1.518-2.062 0-1.068.823-1.6.638-2.113-.181-.51-1.627-.527-2.23-.59a8.213 8.213 0 016.516-5.172zM7.424 17.77c.492-.26.542-.596.988-.613.51-.023.925-.199 1.5-.326.51-.111 1.423-.629 2.226-.695.678-.055 2.015.035 2.375.689a8.159 8.159 0 01-7.089.945z`;
const OPENED_CAMERA_ICON_PATH = `M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z`;
const CLOSED_CAMERA_ICON_PATH = `M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728L.847 3.366zm9.746 11.925-10-14 .814-.58 10 14-.814.58z`;
const PARTICIPANT_DOCKED_RIGHT_SELECTOR = `(//div[contains(@class,'MuiDrawer-paperAnchorDockedRight')])[2]`;
const PARTICIPANT_BY_NAME_SELECTOR = `//div[contains(@id,'participant') and .//span[contains(.,'$NAME')]]`;
const NO_CAMERA_SELECTOR = `//div[contains(@class,'makeStyles-noCamera')]`;
const STREAMING_SELECTOR = `//div[@id='main-content']//div[contains(@class,'MuiGrid-container') and .//span[contains(.,'$NAME')]]`;

const liveCommands = {
    clickGlobalActionButton: function () {
        return this
        .waitForElementVisible(`@globalActionButton`)
        .click(`@globalActionButton`)
    },
    getParticipantSelectorInDockedRight: function (participantName) {
        return `${PARTICIPANT_DOCKED_RIGHT_SELECTOR}${PARTICIPANT_BY_NAME_SELECTOR.replace(`$NAME`, participantName)}`;
    },
    getParticipantNoCameraSelectorInDockedRight: function (participantName) {
        return `${PARTICIPANT_DOCKED_RIGHT_SELECTOR}${PARTICIPANT_BY_NAME_SELECTOR.replace(`$NAME`, participantName)}${NO_CAMERA_SELECTOR}`;
    },
    getStreamingSelector: function (streamingUserName) {
        return STREAMING_SELECTOR.replace(`$NAME`, streamingUserName);
    },
    getStreamingNoCameraSector: function (streamingUserName) {
        return `${STREAMING_SELECTOR.replace(`$NAME`, streamingUserName)}${NO_CAMERA_SELECTOR}`;
    }
}
module.exports = {
    commands: [liveCommands],
    elements: {
        mainContent: {
            selector: `//div[@id='main-content']`
        },
        globalActionButton: {
            selector: `//div[*[name()='svg' and *[name()='path' and contains(@d,'${GLOBAL_ACTION_ICON_PATH}')]]]`
        },
        muteGlobalCameraButton: {
            selector: `//div[div[*[name()='svg' and *[name()='path' and contains(@d,'${OPENED_CAMERA_ICON_PATH}')]]]]`
        },
        unmuteLocalCameraButton: {
            selector: `//button[span[*[name()='svg' and *[name()='path' and contains(@d,'${CLOSED_CAMERA_ICON_PATH}')]]]]`
        }
    }
}