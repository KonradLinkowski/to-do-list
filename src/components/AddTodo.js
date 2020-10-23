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
        style={{ flex: '10', padding: '5px' }}
        placeholder="AddTodo ..."
        value={this.state.title}
        onChange={this.onChange}
        />

        <div
        style={{ width: '10px', height: '10px', backgroundColor: 'red', top: '0', margin: '10px'}}
        />

        <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: '1' }}
        />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

