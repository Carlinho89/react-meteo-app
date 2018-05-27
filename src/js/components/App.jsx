import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../styles/_scss/main.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import meteoActions from '../../actions/meteo';
import MeteoCard from './MeteoCard';

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => bindActionCreators({
    // To-Do
}, dispatch);


const App = ({className, getLocation, location}) => {
    return (
      <div className={classnames(className, 'container-fluid')}>
        <div className="row mt-5">
            <div className="offset-sm-4 col-sm-5">
                <MeteoCard />
            </div>
        </div>
      </div>
    );
}

App.propTypes = {
    className: PropTypes.string
}
App.defaultProps = {
    className: null
}

export default connect(
    mapStateToProps,
    null
)(App);