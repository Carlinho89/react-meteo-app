import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../styles/_scss/main.scss';
import MeteoCard from './MeteoCard';

const App = ({className, getLocation, query, isQueryingWeathercast, isWeathercastQueried, queryWeathercast}) => {
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

export default App;