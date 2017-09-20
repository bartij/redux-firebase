import { connect } from 'react-redux';
import Invite from '../components/Invite.js';
import { getInvite } from '../actions/getInvite';
import { watchGuestAddedEvent, watchGuestRemovedEvent } from '../actions/watchGuestEvents';
import { removeGuest } from '../actions/removeGuest';

const mapStateToProps = (state) => ({ invite: state.invite });

const mapDispatchToProps = (dispatch) => {
    watchGuestRemovedEvent(dispatch);
    watchGuestAddedEvent(dispatch);
    return {
        onGetInvite: () => dispatch(getInvite()),
        onRemoveGuest: (guestName) => dispatch(removeGuest(guestName))
    };
};

const InviteContainer = connect(mapStateToProps, mapDispatchToProps)(Invite);

export default InviteContainer;
