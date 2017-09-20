import ActionTypes from '../constants/actionTypes';
import database from './database';

export const getInvitation = () =>
    dispatch => {
        dispatch(getInviteRequestedAction());
        database.ref('/').once('value', snap => {
            const invite = snap.val();
            dispatch(getInviteFulfilledAction(invite))
        })
            .catch((error) => {
                console.log(error);
                dispatch(getInviteRejectedAction());
            });
    };

const getInviteRequestedAction = () => {
    return {
        type: ActionTypes.GetInviteRequested
    };
};

const getInviteRejectedAction = () => {
    return {
        type: ActionTypes.GetInviteRejected
    }
};

const getInviteFulfilledAction = (invite) => {
    return {
        type: ActionTypes.GetInviteFulfilled,
        invite
    };
};
