import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MeteoCardSideB = ({classNames}) => {
    return (
      <div className={classnames(classNames, 'w100', 'h100')}>
        <p>This is side B!</p>
      </div>
    )
  }

export default MeteoCardSideB;

MeteoCardSideB.propTypes = {
    classNames: PropTypes.string
}

MeteoCardSideB.defaultProps = {
    classNames: null
}
