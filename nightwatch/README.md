Due to Loadero service only support to submit a single file and have to handle both Teacher and Student on the same file.
Based on how Loadero works, I implemented a reusable Nightwatch project for Loadero that can also be tested at local machine.
<br>
#####Generate token tool
Because we have to handle all Teachers and Students in a single file, so we have to put all tokens in the file 
```
ROOM_ID=61edf84983654d4dfdccafdf MAX_STUDENTS=4 npm run generate-token-file
```
You can change the `ROOM_ID` and `MAX_STUDENTS` by yourself and you will see the file `tokens.json`. And then copy the json to the test script (ex: loadero-scripts/global-camera-mute.js).

<br>
#####Nightwatch config for local machine
In the `configs/nightwatch-config` directory, you will see 4 configuration files (2 Teachers and 2 Students). Those would help us open 4 browser for 4 participants. 
We just need to pay attention to the following part
```
globals: {
    liveDomain: 'live.research.kidsloop.live',
    group: { name: 'teacher-group' },
    participant : { id: 0 }
}
```
The `group` and `participant` are based on Loadero configuration.

<br>
#####Test global camera mute in local machine
This shell script would help you test Nightwatch script in local machine before submit it to Loadero.
```
~/.../nightwatch$  bash scripts/test-global-camera-mute.sh
```