import React from 'react';

export default class Invite extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
    }

    componentDidMount() {
        this.props.onGetInvite();
    }

    render() {
        const { host, agenda, guest_count, guests } = this.props.invite;
        return (
            <div>
                <div className="header">
                    <h1>Meeting</h1>
                </div>
                <div className="bg-warning meeting-summary">
                    <div className="row">
                        <div className="col-sm-4 col-md-2">
                            <b>Host:</b>
                        </div>
                        <div className="col-sm-8 col-md-10">
                            {host}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-md-2">
                            <b>Agenda:</b>
                        </div>
                        <div className="col-sm-8 col-md-10">
                            {agenda}
                        </div>
                    </div>
                </div>
                <form className="bg-info meeting-form" onSubmit={() => this.props.onAddToInvite(this.state.name)}>
                    <div className="row">
                        <div className="col-sm-2 col-md-1">
                            <b>Name:</b>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })}
                            />
                        </div>
                        <div className="col-sm-2 col-md-2">
                            <button type="submit" className="btn btn-primary">I am coming!</button>
                        </div>
                    </div>
                </form>
                <div className="meeting-list">
                    <h2>Guests</h2>
                    {guests && guests.length > 0 ? (
                        <ul>
                            {guests.map((guest, index) => {
                                return (
                                    <li onClick={() => this.props.onRemoveGuest(guest.name)} key={index} title="Click to remove">
                                        {guest.name}
                                    </li>
                                );
                            })}
                        </ul>
                    ) : null}
                </div>
            </div>
        );
    }
}