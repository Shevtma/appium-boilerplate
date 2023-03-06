# TEST RESULTS

## OVERVIEW

| test | result | evironment | test spec                                     |
| ---- | ------ | ---------- | --------------------------------------------- |
| 0-0  | FAILED | Android    | /tests/specs/app.biometric.login.spec.ts      |
| 0-1  | PASSED | Android    | /tests/specs/app.deep.link.navigation.spec.ts |
| 0-2  | PASSED | Android    | /tests/specs/app.drag.and.drop.spec.ts        |
| 0-3  | PASSED | Android    | /tests/specs/app.forms.spec.ts                |
| 0-4  | PASSED | Android    | /tests/specs/app.login.spec.ts                |
| 0-5  | PASSED | Android    | /tests/specs/app.swipe.spec.ts                |
| 0-6  | PASSED | Android    | /tests/specs/app.tab.bar.navigation.spec.ts   |
| 0-7  | PASSED | Android    | /tests/specs/app.webview.spec.ts              |
| 0-8  | PASSED | Android    | /tests/specs/app.webview.xpath.spec.ts        |

### Spec Files: 8 passed, 1 failed, 9 total (100% completed) in 00:04:35

## DETAILS

| gadget        | OS version | test | comment                                                                                                                                                             |
| ------------- | ---------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| emulator-5554 | Android 13 | #0-0 | Running: emulator-5554 on Android 13 executing /Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk                    |
| emulator-5554 | Android 13 | #0-0 | Session ID: 89ee09a6-e045-443d-aebd-8dbdef202858                                                                                                                    |
| emulator-5554 | Android 13 | #0-0 | » /tests/specs/app.biometric.login.spec.ts                                                                                                                          |
| emulator-5554 | Android 13 | #0-0 | WebdriverIO and Appium, when interacting with a biometric button,                                                                                                   |
| emulator-5554 | Android 13 | #0-0 | ? should be able to login with a matching touch/faceID/fingerprint                                                                                                  |
| emulator-5554 | Android 13 | #0-0 | ✖ "before each" hook for WebdriverIO and Appium, when interacting with a biometric button,                                                                          |
| emulator-5554 | Android 13 | #0-0 | 1 failing (51.6s)                                                                                                                                                   |
| emulator-5554 | Android 13 | #0-0 | 1) WebdriverIO and Appium, when interacting with a biometric button, "before each" hook for WebdriverIO and Appium, when interacting with a biometric button,       |
| emulator-5554 | Android 13 | #0-0 | element ("android=new UiSelector().textContains("NEXT")") still not displayed after 45000ms                                                                         |
| emulator-5554 | Android 13 | #0-0 | Error: element ("android=new UiSelector().textContains("NEXT")") still not displayed after 45000ms                                                                  |
| emulator-5554 | Android 13 | #0-0 | at async AndroidSettings.waitAndTap (/Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/tests/screenobjects/AndroidSettings.ts:113:9)                     |
| emulator-5554 | Android 13 | #0-0 | at async AndroidSettings.fingerPrintWizardEightOrHigher (/Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/tests/screenobjects/AndroidSettings.ts:32:13) |
| emulator-5554 | Android 13 | #0-0 | at async AndroidSettings.enableBiometricLogin (/Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/tests/screenobjects/AndroidSettings.ts:137:13)          |
| emulator-5554 | Android 13 | #0-1 | Running: emulator-5554 on Android 13 executing /Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk                    |
| emulator-5554 | Android 13 | #0-1 | Session ID: a39a87d4-0b29-4a94-9fe5-76cdb0a69f34                                                                                                                    |
| emulator-5554 | Android 13 | #0-1 | » /tests/specs/app.deep.link.navigation.spec.ts                                                                                                                     |
| emulator-5554 | Android 13 | #0-1 | WebdriverIO and Appium, when navigating by deep link                                                                                                                |
| emulator-5554 | Android 13 | #0-1 | ✓ should be able to open the webview                                                                                                                                |
| emulator-5554 | Android 13 | #0-1 | ✓ should be able to open the login form screen                                                                                                                      |
| emulator-5554 | Android 13 | #0-1 | ✓ should be able to open the forms screen                                                                                                                           |
| emulator-5554 | Android 13 | #0-1 | ✓ should be able to open the swipe screen                                                                                                                           |
| emulator-5554 | Android 13 | #0-1 | ✓ should be able to open the drag and drop screen                                                                                                                   |
| emulator-5554 | Android 13 | #0-1 | ✓ should be able to open the home screen                                                                                                                            |
| emulator-5554 | Android 13 | #0-1 | 6 passing (12.6s)                                                                                                                                                   |
| emulator-5554 | Android 13 | #0-2 | Running: emulator-5554 on Android 13 executing /Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk                    |
| emulator-5554 | Android 13 | #0-2 | Session ID: 5370617d-fbd1-4ad2-a232-c42146ac3e5e                                                                                                                    |
| emulator-5554 | Android 13 | #0-2 | » /tests/specs/app.drag.and.drop.spec.ts                                                                                                                            |
| emulator-5554 | Android 13 | #0-2 | WebdriverIO and Appium, when using drag and drop                                                                                                                    |
| emulator-5554 | Android 13 | #0-2 | ✓ should be able to solve the puzzle by dragging the pieces into the puzzle                                                                                         |
| emulator-5554 | Android 13 | #0-2 | 1 passing (19.9s)                                                                                                                                                   |
| emulator-5554 | Android 13 | #0-3 | Running: emulator-5554 on Android 13 executing /Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk                    |
| emulator-5554 | Android 13 | #0-3 | Session ID: 0f7e258b-10dc-4026-bb18-9d90b2b2fa34                                                                                                                    |
| emulator-5554 | Android 13 | #0-3 | » /tests/specs/app.forms.spec.ts                                                                                                                                    |
| emulator-5554 | Android 13 | #0-3 | WebdriverIO and Appium, when interacting with form elements,                                                                                                        |
| emulator-5554 | Android 13 | #0-3 | ✓ should be able type in the input and validate the text                                                                                                            |
| emulator-5554 | Android 13 | #0-3 | ✓ should be able turn on and off the switch                                                                                                                         |
| emulator-5554 | Android 13 | #0-3 | ✓ should be able select a value from the select element                                                                                                             |
| emulator-5554 | Android 13 | #0-3 | ✓ should be able to open the alert and close it with all 3 buttons                                                                                                  |
| emulator-5554 | Android 13 | #0-3 | ✓ should be able to determine that the inactive button is inactive                                                                                                  |
| emulator-5554 | Android 13 | #0-3 | 5 passing (18.4s)                                                                                                                                                   |
| emulator-5554 | Android 13 | #0-4 | Running: emulator-5554 on Android 13 executing /Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk                    |
| emulator-5554 | Android 13 | #0-4 | Session ID: 96205326-71fd-4ad7-8be9-fb80804d57cf                                                                                                                    |
| emulator-5554 | Android 13 | #0-4 | » /tests/specs/app.login.spec.ts                                                                                                                                    |
| emulator-5554 | Android 13 | #0-4 | WebdriverIO and Appium, when interacting with a login form,                                                                                                         |
| emulator-5554 | Android 13 | #0-4 | ✓ should be able login successfully                                                                                                                                 |
| emulator-5554 | Android 13 | #0-4 | ✓ should be able sign up successfully                                                                                                                               |
| emulator-5554 | Android 13 | #0-4 | 2 passing (17.6s)                                                                                                                                                   |
| emulator-5554 | Android 13 | #0-5 | Running: emulator-5554 on Android 13 executing /Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk                    |
| emulator-5554 | Android 13 | #0-5 | Session ID: f6e92c8e-bbf1-43d5-8e7c-ce0d8d32f0c5                                                                                                                    |
| emulator-5554 | Android 13 | #0-5 | » /tests/specs/app.swipe.spec.ts                                                                                                                                    |
| emulator-5554 | Android 13 | #0-5 | WebdriverIO and Appium, when using swiping                                                                                                                          |
| emulator-5554 | Android 13 | #0-5 | ✓ should be able to swipe horizontal by swiping the carousel from left to right                                                                                     |
| emulator-5554 | Android 13 | #0-5 | ✓ should be able to swipe vertical by finding the surprise                                                                                                          |
| emulator-5554 | Android 13 | #0-5 | 2 passing (36.4s)                                                                                                                                                   |
| emulator-5554 | Android 13 | #0-6 | Running: emulator-5554 on Android 13 executing /Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk                    |
| emulator-5554 | Android 13 | #0-6 | Session ID: 75385133-6297-42b8-a2a1-cfe56946a970                                                                                                                    |
| emulator-5554 | Android 13 | #0-6 | » /tests/specs/app.tab.bar.navigation.spec.ts                                                                                                                       |
| emulator-5554 | Android 13 | #0-6 | WebdriverIO and Appium, when using navigation through the tab bar                                                                                                   |
| emulator-5554 | Android 13 | #0-6 | ✓ should be able to open the webview                                                                                                                                |
| emulator-5554 | Android 13 | #0-6 | ✓ should be able to open the login form screen                                                                                                                      |
| emulator-5554 | Android 13 | #0-6 | ✓ should be able to open the forms screen                                                                                                                           |
| emulator-5554 | Android 13 | #0-6 | ✓ should be able to open the swipe screen                                                                                                                           |
| emulator-5554 | Android 13 | #0-6 | ✓ should be able to open the drag and drop screen                                                                                                                   |
| emulator-5554 | Android 13 | #0-6 | ✓ should be able to open the home screen                                                                                                                            |
| emulator-5554 | Android 13 | #0-6 | 6 passing (14.6s)                                                                                                                                                   |
| emulator-5554 | Android 13 | #0-7 | Running: emulator-5554 on Android 13 executing /Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk                    |
| emulator-5554 | Android 13 | #0-7 | Session ID: e6204415-3686-4426-9dfe-68d6888c2493                                                                                                                    |
| emulator-5554 | Android 13 | #0-7 | » /tests/specs/app.webview.spec.ts                                                                                                                                  |
| emulator-5554 | Android 13 | #0-7 | WebdriverIO and Appium, when interacting with a WebView,                                                                                                            |
| emulator-5554 | Android 13 | #0-7 | ✓ should be able to switch between webview, native and webview                                                                                                      |
| emulator-5554 | Android 13 | #0-7 | 1 passing (22.2s)                                                                                                                                                   |
| emulator-5554 | Android 13 | #0-8 | Running: emulator-5554 on Android 13 executing /Users/maria/avtotests/Автоматизируй\*это/appium-boilerplate/apps/Android-NativeDemoApp-0.4.0.apk                    |
| emulator-5554 | Android 13 | #0-8 | Session ID: 6bf415a9-ed26-4dec-83e0-06fa4bfa5e57                                                                                                                    |
| emulator-5554 | Android 13 | #0-8 | » /tests/specs/app.webview.xpath.spec.ts                                                                                                                            |
| emulator-5554 | Android 13 | #0-8 | WebdriverIO and Appium, when interacting with a webview through XPATH                                                                                               |
| emulator-5554 | Android 13 | #0-8 | ✓ should be able to verify that the WebView is shown by xpath                                                                                                       |
| emulator-5554 | Android 13 | #0-8 | ✓ should be able to verify that the WebView is shown by switching to the WebView                                                                                    |
| emulator-5554 | Android 13 | #0-8 | 2 passing (5.5s)                                                                                                                                                    |
