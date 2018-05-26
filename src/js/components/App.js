import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class App extends Component {

  render() {
    return (
      <div className={classnames(this.props.className)}> 
        <p>Hello There!</p>
      </div>
    )
  }
}

App.propTypes = {
    className: PropTypes.string
}
App.defaultProps = {
    className: null
}
