import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able login successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual('Success\nYou are logged in!');

        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });

    it('should be able not to login with short password', async () => {
        await LoginScreen.tapOnLoginContainerButton();
        await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: '4321!' });
        await expect(await LoginScreen.isErrShortPswDisplayed()).toBe(true);
        await expect(await LoginScreen.errShortPswText()).toEqual("Please enter at least 8 characters");
    });

    it('should not be able to login with incorrect password', async () => {
        await LoginScreen.tapOnLoginContainerButton();
        await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'asdfghjkl;123!' });
        await NativeAlert.waitForIsShown();
        const errText = await NativeAlert.text();
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
        await expect(errText).not.toEqual('Success\nYou are logged in!');
    });

    it('should be able sign up successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
        await LoginScreen.submitSignUpForm({ username: 'test@webdriver.io', password1: 'Test1234!', password2: 'Test1234!' });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual('Signed Up!\nYou successfully signed up!');

        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });

    it('should not be able sign up if the psw is not confirmed', async () => {
        await LoginScreen.tapOnSignUpContainerButton();
        await LoginScreen.submitSignUpForm({ username: 'test@webdriver.io', password1: 'Test1234!', password2: '!tseT4321' });
        await expect(await LoginScreen.isErrDublPswDisplayed()).toBe(true);
        await expect(await LoginScreen.errDublPswText()).toEqual("Please enter the same password");
    });
});
