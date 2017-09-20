import ActionTypes from '../constants/actionTypes';
import database from './database';


export const watchGuestAddedEvent = (dispatch) =>
    database.ref('/guests').on('child_added', (snap) =>
        dispatch(getGuestAddedAction(snap.val()))
    );

export const watchGuestRemovedEvent = (dispatch) =>
    database.ref('/guests').on('child_removed', (snap) =>
        dispatch(getGuestRemovedAction(snap.val()))
    );

const getGuestAddedAction = (guest) => ({
    type: ActionTypes.GuestAdded,
    guest
});

const getGuestRemovedAction = (guest) => ({
    type: ActionTypes.GuestRemoved,
    guest
});
