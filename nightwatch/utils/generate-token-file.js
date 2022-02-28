const { ROOM_ID } = require("../configs/config");
const fs = require("fs");
const { generateAccessToken, generateTeacherAuthToken, generateStudentAuthToken } = require("./token-utils");

const MAX_STUDENTS = process.env.MAX_STUDENTS || 4;
const tokenJson = {};

tokenJson.accessToken = generateAccessToken();

// Teacher tokens
tokenJson.teacherTokens = [];
tokenJson.teacherTokens.push(generateTeacherAuthToken(`Teacher 1`, ROOM_ID));
tokenJson.teacherTokens.push(generateTeacherAuthToken(`Teacher 2`, ROOM_ID));

// Student tokens
tokenJson.studentTokens = [];
for(var i = 1 ; i <= MAX_STUDENTS ; i++) {
    tokenJson.studentTokens.push(generateStudentAuthToken(`Student ${i}`, ROOM_ID));
}

fs.writeFile("tokens.json", JSON.stringify(tokenJson), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});