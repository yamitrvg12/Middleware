import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };

        this.onInputChange = this.onInputChange.bind(this); // bind this event
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value,
        });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // We need to go and fetch weather data
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    name="search"
                    className="form-control"
                    placeholder="Get a five-days forecast in your favorite cities"
                    />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}