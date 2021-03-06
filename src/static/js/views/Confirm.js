import AbstractView from './AbstractView';
import Confirm from '../controller/confirm';

const confirm = new Confirm();

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('최종확인');
  }

  controller() {
    confirm.controller();
  }

  async getHtml() {
    const cE = super.createElement;
    const aC = super.appendChild;

    function createItem(title, id) {
      const $item = cE('div', 'item');
      $item.id = id;
      const $itemTitle = cE('div', 'item-title');
      const $itemTitleText = cE('div', 'text', title);

      aC($itemTitle, $itemTitleText);

      aC($item, [$itemTitle]);

      return $item;
    }

    function getConfirmScrrenHTML() {
      const $scrren = cE('div', 'scrren');

      const $form = cE('form');
      $form.name = 'reservation';

      aC($scrren, $form);

      const $confirm = cE('div', 'confirm');

      const $progress = cE('div', 'progress');

      aC($progress, cE('p', null, '3/3'));

      aC($confirm, [cE('h1', null, '예약확인'), $progress]);

      [
        {
          title: '주문자 정보',
          id: 'confirm-personal'
        },
        {
          title: '메뉴',
          id: 'confirm-menu'
        },
        {
          title: '요청사항',
          id: 'confirm-request'
        }
      ].forEach(({ title, id }) => {
        const $content = cE('section', 'content');
        aC($content, createItem(title, id));
        aC($confirm, $content);
      });

      aC($form, $confirm);

      aC($scrren, $form);

      const $reservation = cE('div', 'reservation-btn');

      const $button = cE('button', null, '네 맞아요 진행해주세요');
      $button.type = 'submit';

      aC($reservation, $button);
      aC($form, $reservation);

      return $scrren;
    }
    return getConfirmScrrenHTML().outerHTML;
  }
}
