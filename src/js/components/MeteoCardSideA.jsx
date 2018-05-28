import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { fahrenheitToCelsius, mapConditionToIcon } from '../../utils/helper'
import { weekDays, getCurrentDay } from '../../utils/weekDays';


const MeteoCardSideA = ({className, query, isWeathercastQueried, isQueryingWeathercast}) => {
  return (
    <div className={classnames(className, 'container-fluid', 'h100')}>
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
                <i className={
                    mapConditionToIcon(
                        isWeathercastQueried && query 
                            ? query.results.channel.item.condition.code
                            : null
                    )
                } />
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
                <p className={classnames('alignR')}>
                    HUMIDITY:
                </p>
                <p className={classnames('alignR')}>
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
  )
}

export default MeteoCardSideA;

MeteoCardSideA.propTypes = {
    className: PropTypes.string,
    query: PropTypes.object.isRequired,
    isQueryingWeathercast: PropTypes.bool.isRequired,
    isWeathercastQueried: PropTypes.bool.isRequired,
}

MeteoCardSideA.defaultProps = {
    className: null
}
