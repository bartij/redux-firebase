const actionTypes = {
    GetInviteRequested: 'GET_INVITE_REQUESTED',
    GetInviteRejected: 'GET_INVITE_REJECTED',
    GetInviteFulfilled: 'GET_INVITE_FULFILLED',

    AddToInviteRequested: 'ADD_TO_INVITE_REQUESTED',
    AddToInviteRejected: 'ADD_TO_INVITE_REJECTED',
    AddToInviteFulfilled: 'ADD_TO_INVITE_FULFILLED',

    RemoveGuestRequested: 'REMOVE_GUEST_REQUESTED',
    RemoveGuestRejected: 'REMOVE_GUEST_REJECTED',
    RemoveGuestFulfilled: 'REMOVE_GUEST_FULFILLED',

    GuestAdded: 'GUEST_ADDED',
    GuestRemoved: 'GUEST_REMOVED'
};

export default actionTypes;
