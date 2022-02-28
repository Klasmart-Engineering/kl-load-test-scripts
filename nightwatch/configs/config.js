require('dotenv').config()

const REGION_ID = process.env.REGION_ID || 'research.kidsloop.live';
const ROOM_ID = process.env.ROOM_ID || '61edf84983654d4dfdccafdf';

module.exports = { REGION_ID, ROOM_ID };