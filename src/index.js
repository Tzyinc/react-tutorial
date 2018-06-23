import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './components/TodoInput';
import './style.scss';

const initState = {
  todoList: [],
};

class Homepage extends React.Component {
  constructor() {
    super();
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  componentWillMount() {
    this.setState(initState);
  }

  addNewTodo(item) {
    this.setState(prevState => ({
      todoList: [
        ...prevState.todoList,
        item,
      ],
    }));
  }

  render() {
    const { todoList } = this.state;
    return (
      <div className="app-base">
        <h1 className="test">
          Todo list
        </h1>
        <TodoInput addNewTodo={this.addNewTodo} />
        <ul>
          {todoList.map(item => (
            <li>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const App = document.getElementById('app');

ReactDOM.render(<Homepage />, App);
