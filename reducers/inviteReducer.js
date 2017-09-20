import ActionTypes from '../constants/actionTypes';

export const inviteReducer = (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.GetInviteRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case ActionTypes.GetInviteRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting invite.',
            });
        }
        case ActionTypes.GetInviteFulfilled: {
            const { host, agenda, guests } = action.invite;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got invite.',
                host,
                agenda
            });
            newState.guests = [];
            if (guests) {
                newState.guests = Object.keys(guests).map(k => guests[k]);
            }
            return newState;
        }
        case ActionTypes.AddToInviteRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case ActionTypes.AddToInviteRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in adding guest.',
            });
        }
        case ActionTypes.AddToInviteFulfilled: {
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Added guest.'
            });
        }
        case ActionTypes.GuestAdded: {
            const newState = Object.assign({}, state);
            newState.guests = newState.guests || [];
            newState.guests = newState.guests.slice();
            newState.guests.push(action.guest);
            return newState;
        }
        case ActionTypes.RemoveGuestRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case ActionTypes.RemoveGuestRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in removing guest.',
            });
        }
        case ActionTypes.RemoveGuestFulfilled: {
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Removed guest.'
            });
        }
        case ActionTypes.GuestRemoved: {
            const newState = Object.assign({}, state);
            newState.guests = newState.guests ?
                newState.guests.filter(guest => guest.name !== action.guest.name) : [];
            return newState;
        }
        default:
            return state;
    }
};
