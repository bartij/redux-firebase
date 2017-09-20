import React from 'react';
import PropTypes from 'prop-types';


export default class InviteForm extends React.Component {
    constructor() {
        super();
        this.state = { name: '' };
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onSubmit(e) {
        this.props.onAddToInvite(this.state.name);
        e.preventDefault();
    }

    onInputChange (e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <form className="bg-info meeting-form" onSubmit={e => this.onSubmit(e)}>
                <div className="row">
                    <div className="col-sm-2 col-md-1">
                        <b>Name:</b>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={e => this.onInputChange(e)}
                        />
                    </div>
                    <div className="col-sm-2 col-md-2">
                        <button type="submit" className="btn btn-primary">I am coming!</button>
                    </div>
                </div>
            </form>
        )
    }
}


InviteForm.propTypes = {
    onAddToInvite: PropTypes.func.isRequired,
};
