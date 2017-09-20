import ActionTypes from '../constants/actionTypes';
import database from './database';

export const addToInvite = (guestName) =>
    dispatch => {
        dispatch(addToInviteRequestedAction());
        const guestsRef = database.ref('/guests');
        guestsRef.push({
            name: guestName
        })
            .then(() => {
                dispatch(addToInviteFulfilledAction());
            })
            .catch((error) => {
                dispatch(addToInviteRejectedAction());
            });
    };

const addToInviteRequestedAction = () => ({
    type: ActionTypes.AddToInviteRequested
});

const addToInviteRejectedAction = () => ({
    type: ActionTypes.AddToInviteRejected
});

const addToInviteFulfilledAction = () => ({
    type: ActionTypes.AddToInviteFulfilled
});
