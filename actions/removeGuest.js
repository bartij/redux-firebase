import ActionTypes from '../constants/actionTypes';
import database from './database';

export const removeGuest = (guestName) =>
    dispatch => {
        dispatch(removeGuestRequestedAction());
        const guestsRef = database.ref('guests');
        guestsRef.orderByChild('name').equalTo(guestName).once('value', snapshot => {
            let updates = {};
            snapshot.forEach(child => updates[child.key] = null);
            guestsRef.update(updates)
                .then(() => {
                    dispatch(removeGuestFulfilledAction());
                })
                .catch((error) => {
                    dispatch(removeGuestRejectedAction());
                });
        })
    };

const removeGuestRequestedAction = () => ({
    type: ActionTypes.RemoveGuestRequested
});

const removeGuestRejectedAction = () => ({
    type: ActionTypes.RemoveGuestRejected
});

const removeGuestFulfilledAction = (guest) => ({
    type: ActionTypes.RemoveGuestFulfilled
});