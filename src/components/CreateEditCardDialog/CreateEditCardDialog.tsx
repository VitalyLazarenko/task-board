import React, {Component} from "react";
import './createEditCardDialog.css';
import {ICard, ITag} from "../../interfaces";

export class CreateEditCardDialog extends Component<any, any> {
  state: { description: string; title: string; tags: ITag[] } = {
    title: this.props.mode === 'edit' ? this.props.card.title : '',
    description: this.props.mode === 'edit' ? this.props.card.description : '',
    tags: this.props.mode === 'edit' ? this.props.card.tags : [],
  };

  onSubmit = () => {
    const data: ICard = {
      id: this.props.mode === 'edit' ? this.props.card.id : '',
      title: this.state.title,
      description: this.state.description,
      status: this.props.mode === 'edit' ? this.props.card.status : this.props.status,
      tags: this.state.tags,
    };
    this.props.onSuccess(data, this.props.mode);
  }

  tagDefaultChecked = (tagName: string) => {
    const checked = this.state.tags.some(
      (tag: ITag) => {
        return tag.title === tagName;
      });
    return checked;
  }
  onChangeTags = (checked: boolean, tagName: string) => {
    checked
      ? this.setState({tags: [...this.state.tags, {title: tagName, color: '#ca4554'}]})
      : this.setState({
        tags: [...this.state.tags.filter((tag: ITag) => {
          return tag.title !== tagName;
        })]
      });
  }

  render() {
    let {onCancel, status, mode} = this.props;

    return (
      <>
        <div className="background">
          <div className="container">
            <div className="dialog-header">
              <label>{mode === 'create' ? status.toUpperCase() : 'EDIT'}</label>
            </div>
            <div className="dialog-form">
              <label>Title: </label>
              <input
                id="title"
                type='text'
                placeholder="Task title"
                onChange={(e) => this.setState({title: e.target.value})}
                value={this.state.title}
              />
              <label>Description: </label>
              <textarea
                id="description"
                className="in-description"
                placeholder="Task description"
                onChange={(e) => this.setState({description: e.target.value})}
                value={this.state.description}
              />

              <label className='tag-label'>Tags: </label>

              <div className="tag-box">
                <div className="UI-design">
                  <span>UI design</span>
                  <input type="checkbox"
                         name="UI design"
                         defaultChecked={this.tagDefaultChecked("UI-design")}
                         onChange={(e) => this.onChangeTags(e.target.checked, "UI-design")}
                  />
                </div>
                <div className="marketing">
                  <span>Marketing</span>
                  <input type="checkbox"
                         name="marketing"
                         defaultChecked={this.tagDefaultChecked("marketing")}
                         onChange={(e) => this.onChangeTags(e.target.checked, "marketing")}
                  />
                </div>
                <div className="research">
                  <span>Research</span>
                  <input type="checkbox"
                         name="research"
                         defaultChecked={this.tagDefaultChecked("research")}
                         onChange={(e) => this.onChangeTags(e.target.checked, "research")}
                  />
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="cancel-btn" onClick={onCancel}>
                <span>Cancel</span>
              </div>
              <div className="submit-btn" onClick={this.onSubmit}>
                <span>Submit</span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

}
