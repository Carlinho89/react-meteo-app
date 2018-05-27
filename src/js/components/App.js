import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import style from '../../styles/_scss/main.scss';

export default class App extends Component {

  render() {
    return (
      <div className={classnames(this.props.className, 'container')}>
        <div className="row mt-5">
            <div className="col-md-12">
                <p className="big-orange-text">Hello There!</p>
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
