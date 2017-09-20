import React from 'react';
import PropTypes from 'prop-types';


export default class MeetingInfo extends React.Component {
    render() {
        return (
            <div className="bg-warning meeting-summary">
                <div className="row">
                    <div className="col-sm-4 col-md-2">
                        <b>Host:</b>
                    </div>
                    <div className="col-sm-8 col-md-10">
                        {this.props.host}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-2">
                        <b>Agenda:</b>
                    </div>
                    <div className="col-sm-8 col-md-10">
                        {this.props.agenda}
                    </div>
                </div>
            </div>
        );
    }
}

MeetingInfo.PropTypes = {
    host: PropTypes.string.isRequired,
    agenda: PropTypes.string.isRequired
};