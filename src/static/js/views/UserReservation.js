import AbstractView from './AbstractView';

import User from '../controller/user';

const user = new User();

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('예약정보');
  }

  controller() {
    user.controller();
  }

  async getHtml() {
    return `
    <div class="scrren">
    <form name="reservation">
      <div class="user-reservation">
        <h1>예약정보</h1>
        <div class="progress"><p>1/3</p></div>
  
        <section class="content">
          <div class="item">
            <div class="item-title">
              <div class="text">
                몇시에 예약하시나요?
                <p>*당일 예약만 가능합니다.</p>
              </div>
            </div>
            <div class="item-content">
              <div class="reservation-time">
                <div class="time">
                  <input
                    type="time"
                    min="11:00"
                    max="22:00"
                    value="00:00"
                    name="reservationTime"
                    pattern="[0-1]{3}:[0-9]{2}:[0-9]{2}"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section class="content">
          <div class="item">
            <div class="item-title">
              <div class="text">몇분이세요?</div>
            </div>
            <div class="item-content">
              <div class="reservation-people">
                <div class="people-button" id="js-people-buttons">
                  <button type="button" class="decrease" data-increase="-">
                    -
                  </button>
                  <div class="num">1</div>
                  <button type="button" class="increase" data-increase="+">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section class="content">
          <div class="item">
            <div class="item-title">
              <div class="text">전화번호를 입력해주세요</div>
            </div>
            <div class="item-content">
              <div class="reservation-tel">
                <div class="tel">
                  <input
                    type="tel"
                    pattern="[0-1]{3}[0-9]{4}[0-9]{4}"
                    maxlength="11"
                    placeholder="01012345678"
                    name="reservationTel"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="reservation-btn">
        <button type="submit">메뉴 고르러 가기</button>
      </div>
    </form>
  </div>
  
`;
  }
}
