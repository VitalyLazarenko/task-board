import React, {Component} from "react";
import {connect} from "react-redux";

import store from '../../store';
import './board.css';
import {Column} from "../Column";
import {CreateEditCardDialog} from "../CreateEditCardDialog";
import {ICard} from "../../interfaces";
import {createCardThunk, getCardsThunk, updateCardThunk} from "../../store/thunks";

class Board extends Component<any, any> {
  state = {
    popup: {
      visible: false,
      data: '',
      mode: '',
      creationStatus: '',
    },
    statuses: ["backlog", "selected", "running", "evaluating", "live"],
  }

  createCardClickHandler = (status: string) => {
    this.setState({popup: {visible: true, mode: 'create', creationStatus: status}});
  }

  editCardClickHandler = (data: ICard) => {
    this.setState({popup: {visible: true, data: data, mode: 'edit'}});
  }

  onCancelDialogHandler = () => {
    this.setState({popup: {visible: false, mode: '', data: '', creationStatus: ''}});
  }

  onSuccessDialogHandler = (data: ICard, mode: string) => {
    if (mode === 'create') {
      delete data.id;
      // @ts-ignore
      store.dispatch(createCardThunk(data));
    } else {
      const id = data.id;
      // @ts-ignore
      store.dispatch(updateCardThunk(id, data));
    }
    this.setState({popup: {visible: false, mode: '', data: '', creationStatus: ''}});
  }

  render() {
    const columns = this.state.statuses.map((status: string) => {
      let cards:ICard[] = [];
      let searchCards = [];
      if (this.props.search.enable) {
        searchCards = this.props.cards.filter((card: ICard) => this.props.search.relevantCardIds.includes(card.id));
      }

      cards = this.props.search.enable ? searchCards : this.props.cards;
      const assignedCards = cards.filter((card: ICard) => card.status === status);
      return (<Column
        key={status}
        nameColumn={status}
        cards={assignedCards}
        status={status}
        editCardClick={this.editCardClickHandler}
        createCardClick={this.createCardClickHandler}
      />);
    });
    return (
      <div className="board-container">
        {this.state.popup.visible &&
        <CreateEditCardDialog
            card={this.state.popup.data}
            mode={this.state.popup.mode}
            status={this.state.popup.creationStatus}
            onSuccess={this.onSuccessDialogHandler}
            onCancel={this.onCancelDialogHandler}
        />}
        {columns}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {cards: state.cards, search: state.search, loading: state.isLoading};
};
export default connect(mapStateToProps)(Board);
