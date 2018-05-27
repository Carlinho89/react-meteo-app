import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../styles/_scss/main.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import meteoActions from '../../actions/meteo';
import MeteoCard from './MeteoCard';

const mapStateToProps = state => ({
    query: state.meteo.query,
    isQueryingWeathercast: state.meteo.isLoading,
    isWeathercastQueried: state.meteo.isLoaded,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    queryWeathercast: meteoActions.queryWeathercast
}, dispatch);


const App = ({className, getLocation, query, isQueryingWeathercast, isWeathercastQueried, queryWeathercast}) => {
    return (
      <div className={classnames(className, 'container-fluid')}>
        <div className="row mt-5">
            <div className="offset-sm-4 col-sm-5">
                <MeteoCard 
                    query={query}
                    isQueryingWeathercast={isQueryingWeathercast}
                    isWeathercastQueried={isWeathercastQueried}
                    queryWeathercast={queryWeathercast}
                />
            </div>
        </div>
      </div>
    );
}

App.propTypes = {
    className: PropTypes.string,
    query: PropTypes.object.isRequired,
    isQueryingWeathercast: PropTypes.bool.isRequired,
    isWeathercastQueried: PropTypes.bool.isRequired,
    queryWeathercast: PropTypes.func.isRequired
}
App.defaultProps = {
    className: null
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);