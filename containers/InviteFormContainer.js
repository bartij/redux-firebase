import { connect } from 'react-redux';
import InviteForm from '../components/InviteForm';
import { addToInvite } from '../actions/addToInvite';


const mapDispatchToProps = (dispatch) => ({
    onAddToInvite: (guestName) => dispatch(addToInvite(guestName))
});

const InviteFormContainer = connect(null, mapDispatchToProps)(InviteForm);

export default InviteFormContainer;
