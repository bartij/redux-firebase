import React from 'react';
import PropTypes from 'prop-types';


export default class MeetingList extends React.Component {
    render () {
        const guests = this.props.guests;
        console.log({guests});
        return (
            <div className="meeting-list">
                <h2>Guests</h2>
                {guests && guests.length > 0 ? (
                    <ul>
                        {guests.map((guest, index) => {
                            return (
                                <li onClick={() => this.props.onRemoveGuest(guest.name)}
                                    key={index}
                                    title="Click to remove">
                                    {guest.name}
                                </li>
                            );
                        })}
                    </ul>
                ) : null}
            </div>
        )
    }
}

MeetingList.propTypes = {
    onRemoveGuest: PropTypes.func,
    guests: PropTypes.array
};
