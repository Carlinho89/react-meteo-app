import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {geolocated} from 'react-geolocated';

import { fahrenheitToCelsius } from '../../utils/degreesHelper'
import { weekDays, getCurrentDay } from '../../utils/weekDays';

class MeteoCard extends Component {
    componentWillReceiveProps(nextProps) {
        if(!this.props.coords && !!nextProps.coords){
            // time to fetch the weathercast info!
            this.props.queryWeathercast(nextProps.coords.latitude, nextProps.coords.longitude);
        }
    }

    render() {
        const {
            className,
            weatherIconClass,
            perceivedTemp,
            humidity,
            query,
            isQueryingWeathercast,
            isWeathercastQueried, 
            coords,
            isGeolocationAvailable, // boolean flag indicating that the browser supports the Geolocation API
            isGeolocationEnabled, // boolean flag indicating that the user has allowed the use of the Geolocation API
            positionError,
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
                                    !isQueryingWeathercast &&
                                    isWeathercastQueried &&
                                    query
                                        ? query.results.channel.location.city 
                                        : 'Current Location'
                                }
                        </p>
                    </div>
                    <div className={classnames('col-sm-2', 'offset-sm-3')}>
                        <p className="widget-meteocard-celsius">
                            {
                                !isQueryingWeathercast &&
                                isWeathercastQueried &&
                                query
                                    ? `${fahrenheitToCelsius(query.results.channel.item.condition.temp)}°` 
                                    : '???'
                            }
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
                                !isQueryingWeathercast &&
                                isWeathercastQueried &&
                                query
                                    ? `${fahrenheitToCelsius(query.results.channel.wind.chill)}°` 
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
                                !isQueryingWeathercast &&
                                isWeathercastQueried &&
                                query
                                    ? `${query.results.channel.atmosphere.humidity} %` 
                                    : '???'
                            }
                        </p>
                    </div>
                </div>
                <div className={classnames('flex-container', '')}>
                    {
                        weekDays.map(day => 
                            (<div 
                                key={day}
                                className={classnames({
                                    '--selected': day === getCurrentDay()
                                })}
                            >
                                <p className="widget-meteocard-weekday">{day}</p>
                            </div>)
                        )
                    }
                </div>
            </div>
          );
    }
}

MeteoCard.propTypes = {
    className: PropTypes.string,
    weatherIconClass: PropTypes.string,
    queryWeathercast: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
    weathercastError: PropTypes.object,
    // from geolocated high order component
    coords: PropTypes.object,
    isGeolocationAvailable: PropTypes.bool, // boolean flag indicating that the browser supports the Geolocation API
    isGeolocationEnabled: PropTypes.bool, // boolean flag indicating that the user has allowed the use of the Geolocation API
    positionError: PropTypes.object// object with the error returned from the Geolocation API call
}

MeteoCard.defaultProps = {
    className: null,
    weatherIconClass: 'fa fa-spinner fa-spin',
    weathercastError: null,
    positionError: null
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(MeteoCard);
