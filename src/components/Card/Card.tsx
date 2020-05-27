import React, {Component} from "react";
import './card.css';

export class Card extends Component<any, any> {
  editClick() {
    alert('Edit click!');
  }

  render() {
    return (
      <div className="card-container">
        <div
          className="btn-edit"
          onClick={this.editClick}
        >Edit</div>
        <div className='body-card'>
          <label className="header-title">Заголовок карточки!</label>
          <label className="description-title">Ка́рты та́ро́ — колода карт, используемая с середины XV века в
            различных частях Европы для
            карточных игр (итальянский tarocchini, французский tarot и австрийский Königrufen), во многие из которых
            играют и сегодня. С конца XVIII века карты таро стали использоваться и для гадания.</label>
          <div className="tags-container">
            <label className="UI-design">UI design</label>
            <label className="Marketing">Marketing</label>
            <label className="Research">Research</label>
          </div>
        </div>
      </div>
    )
  }
}
