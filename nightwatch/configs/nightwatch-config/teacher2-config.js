// Autogenerated by Nightwatch
// Refer to the online docs for more details: https://nightwatchjs.org/gettingstarted/configuration/
const Services = {}; loadServices();

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
    // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
    custom_commands_path: ['commands'],
    test_settings: {
        default: {
            disable_error_log: false,
            screenshots: {
                enabled: false,
                path: 'screens',
                on_failure: true
            },

            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    w3c: true,
                    args: [
                        '--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
                        '--use-fake-ui-for-media-stream'
                    ]
                }
            },

            globals: {
                liveDomain: 'live.research.kidsloop.live',
                group: { name: 'teacher-group' },
                participant : { id: 1 }
            },

            test_workers: {
                enabled: true,
                workers: 'auto'
            },

            webdriver: {
                port: 9516,
                start_process: true,
                server_path: ''
            }
        },
    }
};

function loadServices() {
    try {
        Services.seleniumServer = require('selenium-server');
    } catch (err) { }

    try {
        Services.chromedriver = require('chromedriver');
    } catch (err) { }

    try {
        Services.geckodriver = require('geckodriver');
    } catch (err) { }
}
