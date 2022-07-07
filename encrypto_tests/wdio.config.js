exports.config = {
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances: 1,
    sync: true,
    specs: [
        './tests/specs/**/*registration_side_menu_ru.js' 
    ],
    capabilities:[{
        "platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "emulator-5554",
        // "appium:udid": "20f69779",
        "appium:appPackage": "com.encryptoportfolio.app",
        "appium:appActivity": ".MainActivity"
    }]
}
