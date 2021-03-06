import { mount, storiesOf, compileNow } from '@storybook/riot';
import { action } from '@storybook/addon-actions';
import ButtonRaw from './Button.txt';

compileNow(ButtonRaw);

storiesOf('Addon|Actions', module)
  .add('Action only', () =>
    mount('my-button', {
      handleClick: action('button-click'),
      content: 'Click me to log the action',
    })
  )
  .add('Multiple actions', () =>
    mount('my-button', {
      handleDblClick: action('button-double-click'),
      content: 'Double Click me to log the action',
    })
  );
