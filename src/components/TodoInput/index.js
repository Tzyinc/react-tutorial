import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class TodoInput extends React.Component {
  componentWillMount() {}

  handleKeyPress(e) {
    const { addNewTodo } = this.props;
    if (e.key === 'Enter') {
      const todoItem = this.inputContent.value;
      this.inputContent.value = '';
      addNewTodo(todoItem);
    }
  }

  render() {
    return (
      <div>
        <input
          onKeyPress={e => this.handleKeyPress(e)}
          className="input-box"
          ref={(c) => { this.inputContent = c; }}
        />
      </div>
    );
  }
}

TodoInput.propTypes = {
  addNewTodo: PropTypes.func.isRequired,
};
