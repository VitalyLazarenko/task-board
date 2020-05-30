import React, {Component} from "react";
import './card.css';

export class Card extends Component<any, any> {
  render() {
    let {status, editCardClick, data} = this.props;
    let statusHeader = status === 'live' ? completed() : null;

    return (
      <div className={statusHeader !== null ? "card-container completed" : "card-container"}>

        {statusHeader}

        <div
          className="btn-edit"
          onClick={() => editCardClick(data)}
        >Edit
        </div>
        <div className='body-card'>
          <label className="header-title">Заголовок карточки!</label>
          <label className="description-title">Ка́рты та́ро́ — колода карт, используемая с середины XV века в
            различных частях Европы для
            карточных игр (итальянский tarocchini, французский tarot и австрийский Königrufen), во многие из которых
            играют и сегодня. С конца XVIII века карты таро стали использоваться и для гадания.</label>
          <div className="tags-container">
            <span className="UI-design">UI design</span>
            <span className="Marketing">Marketing</span>
            <span className="Research">Research</span>
          </div>
        </div>
      </div>
    )
  }
}

function completed() {
  return(
    <React.Fragment>
      <div className="status">
        <div className="icon">✔</div>
        <span>
            Completed
          </span>
      </div>
    </React.Fragment>
  )

}
