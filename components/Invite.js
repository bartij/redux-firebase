import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import MeetingInfo from "./MeetingInfo";
import InviteFormContainer from '../containers/InviteFormContainer';
import MeetingList from "./MeetingList";


export default class Invite extends React.Component {
    componentDidMount() {
        this.props.onGetInvite();
    }

    render() {
        const { host, agenda, guests } = this.props.invite;
        return (
            <div>
                <Header />
                <MeetingInfo host={host} agenda={agenda} />
                <InviteFormContainer />
                <MeetingList guests={guests} onRemoveGuest={this.props.onRemoveGuest} />
            </div>
        );
    }
}

Invite.propTypes = {
    onGetInvite: PropTypes.func,
    onRemoveGuest: PropTypes.func,
    invite: PropTypes.object
};
