import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class App extends Component {

  render() {
    return (
      <div className={classnames(this.props.className, 'container')}>
        <div class="row mt-5">
            <div class="col-md-12">
                <p>Hello There!</p>
            </div>
        </div>
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
