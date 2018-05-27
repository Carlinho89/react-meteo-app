import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../styles/_scss/main.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import meteoActions from '../../actions/meteo';
import MeteoCard from './MeteoCard';

const mapStateToProps = state => ({
    meteoTest: state.meteo.test
});
const mapDispatchToProps = dispatch => bindActionCreators({
    testMeteo: meteoActions.testMeteo
}, dispatch);


const App = ({className, meteoTest, testMeteo}) => {
    return (
      <div className={classnames(className, 'container-fluid')}>
        <div className="row mt-5">
            <div className="offset-sm-4 col-sm-5">
                <MeteoCard 
                    meteoTest={meteoTest}
                    testMeteo={testMeteo}
                />
            </div>
        </div>
      </div>
    );
}

App.propTypes = {
    className: PropTypes.string,
    meteoTest: PropTypes.string.isRequired,
    testMeteo: PropTypes.func.isRequired
}
App.defaultProps = {
    className: null
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);