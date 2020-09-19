import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            value: "message"
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        console.log("form submitted");
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form className="contact" onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="firstName" 
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="lastName" 
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="subject" 
                            placeholder="Subject"
                            value={this.state.subject}
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </div>
                <button type="submit">Send Message</button>
            </form>
        );
    }
}

export default Form;