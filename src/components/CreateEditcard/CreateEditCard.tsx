import React, {Component} from "react";
import './createEditCard.css';

export class CreateEditCard extends Component<any, any> {
  render() {
    return (
      <>
        <div className="background">
          <div className="container">
            <div className="header">
              <label>Form Name</label>
            </div>
            <div className="body">
              <label>Title: </label>
              <input id="title"/>
              <label>Description: </label>
                <textarea id="description" className="in-description"></textarea>

                <label style={{
                    textAlign: "center",
                    marginTop: '10px',
                }}>Tags: </label>

              <div className="tag-box">
                <div className="UI-design">
                  <span>UI design</span>
                </div>
                <div className="marketing">
                  <span>Marketing</span>
                </div>
                <div className="research">
                  <span>Research</span>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="cancel">
                <span>Сancel</span>
              </div>
              <div className="submit">
                <span>Submit</span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

}
