import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../styles/_scss/main.scss';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    meteoTest: state.meteo.test
});

const App = ({className, meteoTest}) => {
    return (
      <div className={classnames(className, 'container')}>
        <div className="row mt-5">
            <div className="col-md-12">
                <p className="big-orange-text">Hello There!</p>
                <p>Test: {meteoTest}</p>
            </div>
        </div>
      </div>
    );
}

App.propTypes = {
    className: PropTypes.string,
    meteoTest: PropTypes.string.isRequired
}
App.defaultProps = {
    className: null
}

export default connect(
    mapStateToProps,
    null
)(App);