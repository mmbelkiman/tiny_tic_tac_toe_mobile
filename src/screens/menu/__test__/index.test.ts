import {by, device, expect, element, waitFor} from 'detox';
describe('Menu Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await expect(element(by.id('Menu.view.container'))).toBeVisible();
  });

  it('should change board size when user presses plus button', async () => {
    await expect(element(by.id('NumberInput.text'))).toHaveText('3x3');
    await element(by.id('NumberInput.TouchableOpacity.plus')).tap();
    await expect(element(by.id('NumberInput.text'))).toHaveText('4x4');
  });

  it('should change board size when user presses minus button', async () => {
    await expect(element(by.id('NumberInput.text'))).toHaveText('3x3');

    await element(by.id('NumberInput.TouchableOpacity.plus')).tap();
    await element(by.id('NumberInput.TouchableOpacity.plus')).tap();
    await element(by.id('NumberInput.TouchableOpacity.plus')).tap();
    await element(by.id('NumberInput.TouchableOpacity.minus')).tap();

    await waitFor(element(by.id('NumberInput.text')))
      .toHaveText('5x5')
      .withTimeout(2000);
  });

  it('should start game when presses PLAY button', async () => {
    await element(by.id('Menu.TouchableOpacity.play')).tap();
    await expect(element(by.id('Game.view.container'))).toBeVisible();
  });
});
