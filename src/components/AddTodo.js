import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(this.state.title !== ''){
    this.props.addTodo(this.state.title);
    this.setState({ title: ''});

    }
  }

  onChange = (e) => this.setState({title: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }} className="change">
        <input
        type="text"
        name="title"
        style={{ flex: '10', padding: '3px'}}
        placeholder="Write new todo"
        value={this.state.title}
        onChange={this.onChange}
        />

        <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: '1', marginLeft: '5px', borderRadius: '3px'}}
        />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

