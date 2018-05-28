import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {geolocated} from 'react-geolocated';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import meteoActions from '../../actions/meteo';
import MeteoCardSideA from './MeteoCardSideA';
import MeteoCardSideB from './MeteoCardSideB';

const mapStateToProps = state => ({
    query: state.meteo.query,
    isQueryingWeathercast: state.meteo.isLoading,
    isWeathercastQueried: state.meteo.isLoaded,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    queryWeathercast: meteoActions.queryWeathercast
}, dispatch);

class MeteoCard extends Component {
    componentWillReceiveProps(nextProps) {
        if(!this.props.coords && !!nextProps.coords){
            // time to fetch the weathercast info!
            this.props.queryWeathercast(nextProps.coords.latitude, nextProps.coords.longitude);
        }
    }

    constructor() {
        super();
        this.state = {
            isSideA: true
        }
    }

    toggleSide = (e) => {
        !!e && e.preventDefault();
        this.setState({
            isSideA: !this.state.isSideA
        });
    }

    render() {
        const {
            className, 
            coords,
            query,
            isQueryingWeathercast,
            isWeathercastQueried,
            isGeolocationAvailable, // boolean flag indicating that the browser supports the Geolocation API
            isGeolocationEnabled, // boolean flag indicating that the user has allowed the use of the Geolocation API
            weathercastError
        } = this.props;
        if (isGeolocationAvailable === false) {
            return (
                <div className="alert alert-danger" role="alert">
                    Sorry! It seems like your browser is not supporting the Geolocation API
                </div>
            );
        }
        else if (isGeolocationAvailable && isGeolocationEnabled === false) {
            return ( 
                <div className="alert alert-warning" role="alert">
                    Sorry! Please allow us to have access to your location
                </div>
            );
        }
        else if (!!weathercastError) {
            return(
                <div className="alert alert-danger" role="alert">
                    Error: {weathercastError}
                </div>
            );
        }
        return (
            <div 
                className={classnames(className, 'widget-meteocard')}
                onClick={this.toggleSide}
            >
                {   this.state.isSideA &&
                    <MeteoCardSideA 
                        query={query}
                        isQueryingWeathercast={isQueryingWeathercast}
                        isWeathercastQueried={isWeathercastQueried}
                    />
                }
                {   !this.state.isSideA &&
                    <MeteoCardSideB/>
                }
            </div>
          );
    }
}

MeteoCard.propTypes = {
    className: PropTypes.string,
    queryWeathercast: PropTypes.func.isRequired,
    weathercastError: PropTypes.object,
    // from geolocated high order component
    coords: PropTypes.object,
    isGeolocationAvailable: PropTypes.bool, // boolean flag indicating that the browser supports the Geolocation API
    isGeolocationEnabled: PropTypes.bool, // boolean flag indicating that the user has allowed the use of the Geolocation API
    positionError: PropTypes.object// object with the error returned from the Geolocation API call
}

MeteoCard.defaultProps = {
    className: null,
    weathercastError: null,
    positionError: null
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(connect(
    mapStateToProps,
    mapDispatchToProps
)(MeteoCard));
