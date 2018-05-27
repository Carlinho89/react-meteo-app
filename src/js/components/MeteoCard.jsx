import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MeteoCard = ({className, meteoTest, testMeteo}) => {
  return (
    <div className={classnames(className, 'widdet-meteocard')}>
        <p className="big-orange-text">Hello There!</p>
        <p>Test: {meteoTest}</p>
        <button 
            className={classnames('btn', 'btn-success')} 
            disabled={!testMeteo} onClick={testMeteo}
        > 
            Flip Me 
        </button>
    </div>
  )
}

MeteoCard.propTypes = {
    className: PropTypes.string,
    meteoTest: PropTypes.string.isRequired,
    testMeteo: PropTypes.func.isRequired
}

MeteoCard.defaultProps = {
    className: null
}

export default MeteoCard;
