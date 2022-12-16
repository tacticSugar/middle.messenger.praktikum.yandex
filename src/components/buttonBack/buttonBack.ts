import './buttonBack.scss';
import ButtonBackTemplate from './buttonBack.pug';
import { Block } from '../../utils/core/Block';
import { authController } from '../../controllers/auth-controller';
import { MyRouter, routs } from '../../index';

type ButtonBackProps = {
  events: Record<string, any>;
};

export class ButtonBack extends Block<ButtonBackProps> {
  constructor() {
    super('div', {
      events: {
        click: () => {
          authController
            .isLogin()
            .then(() => {
              MyRouter.go(routs.chatsPage);
            })
            .catch(() => {
              MyRouter.go(routs.signInPage);
            });
        },
      },
    });
  }

  render() {
    return this.compile(ButtonBackTemplate, {});
  }
}
