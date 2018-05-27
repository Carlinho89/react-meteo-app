import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../styles/_scss/main.scss';

const App = ({className}) => {
    return (
      <div className={classnames(className, 'container')}>
        <div className="row mt-5">
            <div className="col-md-12">
                <p className="big-orange-text">Hello There!</p>
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