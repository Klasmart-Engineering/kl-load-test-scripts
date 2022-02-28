#!bin/bash
npx nightwatch tests/loadero-scripts/global-camera-mute.js -c configs/nightwatch-config/teacher1-config.js --reporter html-reporter.js & 
npx nightwatch tests/loadero-scripts/global-camera-mute.js -c configs/nightwatch-config/teacher2-config.js --reporter html-reporter.js & 
npx nightwatch tests/loadero-scripts/global-camera-mute.js -c configs/nightwatch-config/student1-config.js --reporter html-reporter.js & 
npx nightwatch tests/loadero-scripts/global-camera-mute.js -c configs/nightwatch-config/student2-config.js --reporter html-reporter.js