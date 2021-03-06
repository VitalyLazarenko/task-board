import React, {Component} from "react";
import './card.css';
import {ITag} from "../../interfaces";


export class Card extends Component<any, any> {

  dragCard = (id: string, e: any) => {
    e.dataTransfer.setData("text", id);
  }

  render() {
    let {editCardClick, data} = this.props;
    let statusHeader = data.status === 'live' ? completed() : null;

    return (
      <div className={statusHeader !== null ? "card-container completed" : "card-container"}
           draggable={true}
           onDragStart={(e) => this.dragCard(data.id, e)}>

        {statusHeader}

        <div
          className="btn-edit"
          onClick={() => editCardClick(data)}
        >Edit
        </div>
        <div className='body-card'>
          <label className="header-title">{data.title.toUpperCase()}</label>
          <label className="description-title">{data.description}</label>
          <div className="tags-container">
            {data.tags.map((tag: ITag) => <span key={tag.title} className={`${tag.title}-tag`}>{tag.title.toUpperCase()}</span>)}
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
