import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {geolocated} from 'react-geolocated';

class MeteoCard extends Component {
    componentWillReceiveProps(nextProps) {
        if(!this.props.coords && !!nextProps.coords){
            // time to fetch the weathercast info!
            this.props.fetchMeteoWatcher(nextProps.coords.latitude, nextProps.coords.longitude)
        }
    }

    render() {
        const {
            className,
            weatherIconClass,
            perceivedTemp,
            humidity,
            coords,
            isGeolocationAvailable, // boolean flag indicating that the browser supports the Geolocation API
            isGeolocationEnabled, // boolean flag indicating that the user has allowed the use of the Geolocation API
            positionError
        } = this.props;
        if (isGeolocationAvailable === false) {
            return 
                <div className="alert alert-danger" role="alert">
                    Sorry! It seems like your browser is not supporting the Geolocation API
                </div>
        }
        else if (isGeolocationAvailable && isGeolocationEnabled === false) {
            return 
                <div className="alert alert-warning" role="alert">
                    Sorry! Please allow us to have access to your location
                </div>
        }
        return (
            <div className={classnames(className, 'widget-meteocard', 'container-fluid')}>
                <div className={classnames('row', 'widget-meteocard-header')}>
                    <div className="col-sm-6">
                        <p
                            className="widget-meteocard-location"
                        >
                            <i 
                                className="fa fa-map-marker" 
                                aria-hidden="true"
                            /> 
                                {
                                    isGeolocationAvailable &&
                                    isGeolocationEnabled &&
                                    coords
                                        ? coords.latitude // To-Do: replace with real location
                                        : 'Current Location'
                                }
                        </p>
                    </div>
                    <div className={classnames('col-sm-2', 'offset-sm-3')}>
                        <p className="widget-meteocard-celsius">
                            60°
                        </p>
                    </div>
                </div>
                <div className={classnames('row', 'widget-meteocard-statuscontainer')}>
                    <div className="weather-status-container">
                        <i className={weatherIconClass} />
                    </div>
                </div>
                <div className={classnames('row', 'widget-meteocard-weather-details')}>
                    <div className="col-sm-4">
                        <p>Feels Like:</p>
                        <p>
                            { 
                                perceivedTemp 
                                    ? perceivedTemp
                                    : '???'
                            }
                        </p>
                    </div>
                    <div className={classnames('col-sm-4', 'offset-sm-4')}>
                        <p>
                            HUMIDITY:
                        </p>
                        <p>
                            {
                                humidity 
                                    ? humidity
                                    : '???'
                            }
                        </p>
                    </div>
                </div>
                <div className={classnames('flex-container', '')}>
                    <div>
                        <p className="widget-meteocard-weekday">Mon</p>
                    </div>
                    <div>
                        <p className="widget-meteocard-weekday">Tue</p>
                    </div>
                    <div className="--selected">
                        <p className="widget-meteocard-weekday">Wed</p>
                    </div>
                    <div>
                        <p className="widget-meteocard-weekday">Thu</p>
                    </div>
                    <div>
                        <p className="widget-meteocard-weekday">Fri</p>
                    </div>
                    <div>
                        <p className="widget-meteocard-weekday">Sat</p>
                    </div>  
                    <div>
                        <p className="widget-meteocard-weekday">Sun</p>
                    </div>
                </div>
            </div>
          );
    }
}

MeteoCard.propTypes = {
    className: PropTypes.string,
    weatherIconClass: PropTypes.string,
    perceivedTemp: PropTypes.number,
    humidity: PropTypes.number,
    currentLocation: PropTypes.string,
    // from geolocated high order component
    coords: PropTypes.object,
    isGeolocationAvailable: PropTypes.bool, // boolean flag indicating that the browser supports the Geolocation API
    isGeolocationEnabled: PropTypes.bool, // boolean flag indicating that the user has allowed the use of the Geolocation API
    positionError: PropTypes.object// object with the error returned from the Geolocation API call
}

MeteoCard.defaultProps = {
    className: null,
    weatherIconClass: 'fa fa-spinner fa-spin',
    perceivedTemp: null,
    humidity: null,
    currentLocation: null
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(MeteoCard);
