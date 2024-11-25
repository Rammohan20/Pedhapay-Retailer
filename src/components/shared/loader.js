import React from 'react';
import { connect } from 'react-redux';

const SpinnerComponent = (props) => {
    const { spinner } = props;
    return (
        <React.Fragment>
            {spinner > 0 &&
                <div id="preloader" className="preloader-spinner" >
                    <div id="status">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    );
}

export default connect(state => ({ spinner: state.global.spinner }))(SpinnerComponent);