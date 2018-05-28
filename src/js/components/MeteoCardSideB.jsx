import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";

const MeteoCardSideB = ({classNames, isMarkerShown, coords}) => {
    return (
      <div className={classnames(classNames, 'w100', 'h100')}>
        <GoogleMap
            defaultZoom={20}
            defaultCenter={{ lat: coords.latitude, lng: coords.longitude }}
        >
            {isMarkerShown && <Marker position={{ lat: coords.latitude, lng: coords.longitude }} />}
        </GoogleMap>
      </div>
    )
  }

export default withScriptjs(
    withGoogleMap(MeteoCardSideB));

MeteoCardSideB.propTypes = {
    classNames: PropTypes.string,
    isMarkerShown: PropTypes.bool,
    coords: PropTypes.object.isRequired
}

MeteoCardSideB.defaultProps = {
    classNames: null,
    isMarkerShown: true
}
