import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MeteoCard = ({className, meteoTest, testMeteo, weatherIconClass, perceivedTemp, humidity, currentLocation}) => {
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
                            currentLocation
                                ? currentLocation
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
  )
}

MeteoCard.propTypes = {
    className: PropTypes.string,
    meteoTest: PropTypes.string.isRequired,
    testMeteo: PropTypes.func.isRequired,
    weatherIconClass: PropTypes.string,
    perceivedTemp: PropTypes.number,
    humidity: PropTypes.number,
    currentLocation: PropTypes.string
}

MeteoCard.defaultProps = {
    className: null,
    weatherIconClass: 'fa fa-spinner fa-spin',
    perceivedTemp: null,
    humidity: null,
    currentLocation: null
}

export default MeteoCard;
