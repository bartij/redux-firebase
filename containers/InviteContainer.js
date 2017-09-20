import { connect } from 'react-redux';
import Invite from '../components/Invite.js';
import { getInvitation } from '../actions/getInvitation';
import { addToInvite } from '../actions/addToInvite';
import { watchGuestAddedEvent, watchGuestRemovedEvent } from '../actions/watchGuestEvents';
import { removeGuest } from '../actions/removeGuest';


const mapStateToProps = (state) => ({ invite: state.invite });

const mapDispatchToProps = (dispatch) => {
    watchGuestRemovedEvent(dispatch);
    watchGuestAddedEvent(dispatch);
    return {
        onGetInvite: () => dispatch(getInvitation()),
        onAddToInvite: (guestName) => dispatch(addToInvite(guestName)),
        onRemoveGuest: (guestName) => dispatch(removeGuest(guestName))
    };
};

const InviteContainer = connect(mapStateToProps, mapDispatchToProps)(Invite);

export default InviteContainer;
