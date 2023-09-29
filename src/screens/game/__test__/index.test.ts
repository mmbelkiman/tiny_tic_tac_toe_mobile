import {by, device, element, expect} from 'detox';

describe('Menu Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('Menu.TouchableOpacity.play')).tap();
    await expect(element(by.id('Game.view.container'))).toBeVisible();
  });

  it('player circle win with horizontal marks at board 3x3', async () => {
    await expect(element(by.id('Score.Text'))).toHaveText('0 - 0');
    await element(by.id('Square0.0.TouchableOpacity')).tap();
    await element(by.id('Square1.0.TouchableOpacity')).tap();

    await element(by.id('Square0.1.TouchableOpacity')).tap();
    await element(by.id('Square1.1.TouchableOpacity')).tap();

    await element(by.id('Square0.2.TouchableOpacity')).tap();

    await expect(element(by.id('Score.Text'))).toHaveText('1 - 0');
    await expect(element(by.id('HorizontalLine0'))).toBeVisible();
  });
  it('player X win with vertical marks at board 3x3', async () => {
    await expect(element(by.id('Score.Text'))).toHaveText('0 - 0');
    await element(by.id('Square0.1.TouchableOpacity')).tap();
    await element(by.id('Square0.0.TouchableOpacity')).tap();

    await element(by.id('Square0.2.TouchableOpacity')).tap();
    await element(by.id('Square1.0.TouchableOpacity')).tap();

    await element(by.id('Square1.2.TouchableOpacity')).tap();
    await element(by.id('Square2.0.TouchableOpacity')).tap();

    await expect(element(by.id('Score.Text'))).toHaveText('0 - 1');
    await expect(element(by.id('VerticalLine0'))).toBeVisible();
  });
  it('player O win with diagonal top left marks at board 3x3', async () => {
    await expect(element(by.id('Score.Text'))).toHaveText('0 - 0');
    await element(by.id('Square0.0.TouchableOpacity')).tap();
    await element(by.id('Square0.1.TouchableOpacity')).tap();

    await element(by.id('Square1.1.TouchableOpacity')).tap();
    await element(by.id('Square2.1.TouchableOpacity')).tap();

    await element(by.id('Square2.2.TouchableOpacity')).tap();

    await expect(element(by.id('Score.Text'))).toHaveText('1 - 0');
    await expect(element(by.id('DiagonalTopLeftLine0'))).toBeVisible();
  });
  it('player X win with diagonal top right marks at board 3x3', async () => {
    await expect(element(by.id('Score.Text'))).toHaveText('0 - 0');
    await element(by.id('Square0.0.TouchableOpacity')).tap();
    await element(by.id('Square0.2.TouchableOpacity')).tap();

    await element(by.id('Square2.1.TouchableOpacity')).tap();
    await element(by.id('Square1.1.TouchableOpacity')).tap();

    await element(by.id('Square2.2.TouchableOpacity')).tap();
    await element(by.id('Square2.0.TouchableOpacity')).tap();

    await expect(element(by.id('Score.Text'))).toHaveText('0 - 1');
    await expect(element(by.id('DiagonalTopRightLine0'))).toBeVisible();
  });
  it('player cant change mark after put mark', async () => {
    await element(by.id('Square0.0.TouchableOpacity')).tap();
    await expect(element(by.id('LottiePlayerMark0.0.O'))).toBeVisible();
    await element(by.id('Square0.0.TouchableOpacity')).tap();
    await expect(element(by.id('LottiePlayerMark0.0.O'))).toBeVisible();

    await element(by.id('Square1.1.TouchableOpacity')).tap();
    await expect(element(by.id('LottiePlayerMark1.1.X'))).toBeVisible();
    await element(by.id('Square1.1.TouchableOpacity')).tap();
    await expect(element(by.id('LottiePlayerMark1.1.X'))).toBeVisible();
    await expect(element(by.id('LottiePlayerMark0.0.O'))).toBeVisible();
  });
  it('game reboot after has winner', async () => {
    await expect(element(by.id('Score.Text'))).toHaveText('0 - 0');
    await element(by.id('Square0.0.TouchableOpacity')).tap();
    await element(by.id('Square1.0.TouchableOpacity')).tap();
    await element(by.id('Square0.1.TouchableOpacity')).tap();
    await element(by.id('Square1.1.TouchableOpacity')).tap();
    await element(by.id('Square0.2.TouchableOpacity')).tap();
    await element(by.id('Game.gameCanvas')).tap(); //Reboot

    await element(by.id('Square0.0.TouchableOpacity')).tap();
    await element(by.id('Square1.0.TouchableOpacity')).tap();
    await element(by.id('Square0.1.TouchableOpacity')).tap();
    await element(by.id('Square1.1.TouchableOpacity')).tap();
    await element(by.id('Square0.2.TouchableOpacity')).tap();
    await element(by.id('Game.gameCanvas')).tap(); //Reboot

    await element(by.id('Square0.0.TouchableOpacity')).tap();
    await element(by.id('Square1.0.TouchableOpacity')).tap();
    await element(by.id('Square0.1.TouchableOpacity')).tap();
    await element(by.id('Square1.1.TouchableOpacity')).tap();
    await element(by.id('Square0.2.TouchableOpacity')).tap();

    await expect(element(by.id('Score.Text'))).toHaveText('2 - 1');
  });

  it('game reboot after draw', async () => {
    await expect(element(by.id('Score.Text'))).toHaveText('0 - 0');
    await element(by.id('Square0.1.TouchableOpacity')).tap();
    await element(by.id('Square1.1.TouchableOpacity')).tap();
    await element(by.id('Square2.1.TouchableOpacity')).tap();

    await element(by.id('Square2.2.TouchableOpacity')).tap();
    await element(by.id('Square1.2.TouchableOpacity')).tap();
    await element(by.id('Square0.2.TouchableOpacity')).tap();

    await element(by.id('Square0.0.TouchableOpacity')).tap();
    await element(by.id('Square1.0.TouchableOpacity')).tap();
    await element(by.id('Square2.0.TouchableOpacity')).tap();

    await expect(element(by.id('LottiePlayerMark0.0.O'))).toBeVisible();
    await element(by.id('Game.gameCanvas')).tap(); //Reboot
    await expect(element(by.id('LottiePlayerMark0.0.O'))).not.toBeVisible();

    await expect(element(by.id('Score.Text'))).toHaveText('0 - 0');
  });

  it('Back do menu when press back', async () => {
    await element(by.id(`Header.TouchableOpacity.back`)).tap();
    await expect(element(by.id('Menu.view.container'))).toBeVisible();
  });

  it('should play a game with 5x5 board', async () => {
    await element(by.id(`Header.TouchableOpacity.back`)).tap();
    await expect(element(by.id('Menu.view.container'))).toBeVisible();

    await expect(element(by.id('NumberInput.text'))).toHaveText('3x3');
    await element(by.id('NumberInput.TouchableOpacity.plus')).tap();
    await element(by.id('NumberInput.TouchableOpacity.plus')).tap();
    await expect(element(by.id('NumberInput.text'))).toHaveText('5x5');

    await element(by.id('Menu.TouchableOpacity.play')).tap();
    await expect(element(by.id('Game.view.container'))).toBeVisible();

    await expect(element(by.id('Score.Text'))).toHaveText('0 - 0');
    await element(by.id('Square0.0.TouchableOpacity')).tap();
    await element(by.id('Square1.0.TouchableOpacity')).tap();

    await element(by.id('Square0.1.TouchableOpacity')).tap();
    await element(by.id('Square1.1.TouchableOpacity')).tap();

    await element(by.id('Square0.2.TouchableOpacity')).tap();
    await element(by.id('Square2.1.TouchableOpacity')).tap();

    await element(by.id('Square0.3.TouchableOpacity')).tap();
    await element(by.id('Square3.1.TouchableOpacity')).tap();

    await element(by.id('Square0.4.TouchableOpacity')).tap();

    await expect(element(by.id('Score.Text'))).toHaveText('1 - 0');
  });
});
