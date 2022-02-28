const jwt = require('jsonwebtoken');

const SECRET = `iXtZx1D5AqEB0B9pfn+hRQ==`;

function generateAccessToken() {
    const payload = {
        "id": "a08f2ef8-5f13-4883-9d08-684b16778903",
        "email": "qa+stress_t1@calmid.com",
        "exp": 1945208998,
        "iss": "calmid-debug"
    }
    return jwt.sign(payload, SECRET, { algorithm: "HS256", header: { issuer: "calmid-debug" } });
}

function generateAuthToken({name, roomID, isTeacher}) {
    const payload = {
        "aud": "kidsloop-live",
        "exp": 1945283699,
        "iat": 1945208073,
        "iss": "calmid-debug",
        "sub": "authorization",
        "name": name,
        "schedule_id": roomID,
        "user_id": "a08f2ef8-5f13-4883-9d08-684b16778903",
        "type": "live",
        "teacher": isTeacher,
        "roomid": roomID,
        "materials": [
            {
                "id": "61d84d05b9afc424d7d0d1e4",
                "name": "Course Presentation",
                "url": "/h5p/play/61d84cff46ec5e00143a89b6",
                "__typename": "Iframe"
            },
            {
                "id": "61d84c81b9afc424d7d0d1ca",
                "name": "Column",
                "url": "/h5p/play/61d84c79a7508e00135bafd1",
                "__typename": "Iframe"
            },
            {
                "id": "61d84c25b9afc424d7d0d1b2",
                "name": "PNG (Landscape)",
                "url": "assets/61d84c18b9afc424d7d0d1ac.png",
                "__typename": "Image"
            },
            {
                "id": "61d84c04b69e58f540b1ae08",
                "name": "JPG (Landscape)",
                "url": "assets/61d84bf9b9afc424d7d0d19b.jpg",
                "__typename": "Image"
            },
            {
                "id": "61d84bdfb69e58f540b1adf6",
                "name": "Audio Recorder",
                "url": "/h5p/play/61d84bdb46ec5e00143a89b5",
                "__typename": "Iframe"
            },
            {
                "id": "61d84bc2b69e58f540b1ade7",
                "name": "Accordion",
                "url": "/h5p/play/61d84bbb46ec5e00143a89b4",
                "__typename": "Iframe"
            },
            {
                "id": "61d84b96b69e58f540b1add5",
                "name": "Non-H5P Video (.mp4)",
                "url": "assets/61d84b8fb69e58f540b1add2.mp4",
                "__typename": "Video"
            },
            {
                "id": "61d84b71b69e58f540b1adc4",
                "name": "Audio (.mp3)",
                "url": "assets/61d84b6fb69e58f540b1adc2.mp3",
                "__typename": "Audio"
            },
            {
                "id": "61d84b52b69e58f540b1adb2",
                "name": "Audio (.Wav)",
                "url": "assets/61d84b3fb69e58f540b1adac.wav",
                "__typename": "Audio"
            },
            {
                "id": "61d84a9eb9afc424d7d0d12a",
                "name": "Interactive Video (File Upload)",
                "url": "/h5p/play/61d84a9846ec5e00143a89b3",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc0307fc26e52fd349fbf",
                "name": "Interactive Video (Youtube)",
                "url": "/h5p/play/61dcc07446ec5e00143a89b8",
                "__typename": "Iframe"
            },
            {
                "id": "61d849f2b69e58f540b1ad5f",
                "name": "Interactive Video (Non-Youtube)",
                "url": "/h5p/play/61d849ec46ec5e00143a89b1",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc0ac32f726dc01a25a26",
                "name": "Dialog Cards",
                "url": "/h5p/play/61dcc0a8a7508e00135bafd2",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc0dc7fc26e52fd349fed",
                "name": "Speak the Words",
                "url": "/h5p/play/61dcc0d846ec5e00143a89b9",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc1057fc26e52fd349fff",
                "name": "Question Set",
                "url": "/h5p/play/61dcc10146ec5e00143a89ba",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc12d7fc26e52fd34a011",
                "name": "Multiple Hotspots",
                "url": "/h5p/play/61dcc12a46ec5e00143a89bb",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc14e32f726dc01a25a67",
                "name": "Multiple Choice",
                "url": "/h5p/play/61dcc14ba7508e00135bafd3",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc1807fc26e52fd34a034",
                "name": "Memory Game",
                "url": "/h5p/play/61dcc17b46ec5e00143a89bc",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc1a832f726dc01a25a89",
                "name": "Mark the Words",
                "url": "/h5p/play/61dcc1a6a7508e00135bafd4",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc1f832f726dc01a25aa5",
                "name": "Interactive Book",
                "url": "/h5p/play/61dcc1f246ec5e00143a89bd",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc22332f726dc01a25ab5",
                "name": "Image Pairing",
                "url": "/h5p/play/61dcc21e46ec5e00143a89be",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc24a7fc26e52fd34a07b",
                "name": "Image Slider",
                "url": "/h5p/play/61dcc246a7508e00135bafd5",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc27032f726dc01a25ad7",
                "name": "Image Hotspots",
                "url": "/h5p/play/61dcc26da7508e00135bafd6",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc2927fc26e52fd34a09c",
                "name": "Guess and Answer",
                "url": "/h5p/play/61dcc28fa7508e00135bafd7",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc3d132f726dc01a25b64",
                "name": "Flashcards",
                "url": "/h5p/play/61dcc3e2a7508e00135bafdc",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc2e532f726dc01a25b06",
                "name": "Find the Words",
                "url": "/h5p/play/61dcc2dea7508e00135bafd9",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc30832f726dc01a25b18",
                "name": "Find the Hotspot",
                "url": "/h5p/play/61dcc30346ec5e00143a89bf",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc32a7fc26e52fd34a0dc",
                "name": "Drag the Words",
                "url": "/h5p/play/61dcc326a7508e00135bafda",
                "__typename": "Iframe"
            },
            {
                "id": "61dcc34a32f726dc01a25b37",
                "name": "Drag and Drop",
                "url": "/h5p/play/61dcc347a7508e00135bafdb",
                "__typename": "Iframe"
            }
        ],
        "classtype": "live",
        "org_id": "393477b8-2139-49a2-9221-6664f81fdceb",
        "start_at": 1645200000,
        "end_at": 1945282799
    }
    return jwt.sign(payload, SECRET, { algorithm: "HS256", header: { issuer: "calmid-debug" } });
}

function generateTeacherAuthToken(teacherName, roomID) {
    return generateAuthToken({name: teacherName, roomID: roomID, isTeacher: true});
}

function generateStudentAuthToken(studentName, roomID) {
    return generateAuthToken({name: studentName, roomID: roomID, isTeacher: false});
}

module.exports = {
    generateAccessToken, generateAuthToken, generateTeacherAuthToken, generateStudentAuthToken
}