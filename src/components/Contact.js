import React, { Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: "hello"
        };
    }

    displayGreeting = () => {
        this.setState({ greeting: "Hi" });
    }

    render() {
        return (
            <>
              
                <h2>Contact Us {this.props.name}. {this.state.greeting} Prakhar</h2>

                <button onClick={this.displayGreeting}>Greet</button>
            </>
        );
    }
}

export default Contact;
