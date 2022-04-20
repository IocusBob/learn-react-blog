import React, { Component } from 'react'

export default class Form extends Component {
    state={username: "", blog: ""}

    updateField(event, field="name"){
        if (field == "blog"){
            this.setState({blog: event.target.value})    
        } else {
            this.setState({username: event.target.value})
        }
    }

    handleSubmit(){
        //Write code in here that sends my state to a API/server and then empties the forms
    }


    render() {
        return (
        <form>
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={event => this.updateField(event)} />
            <label>Blog Content</label>
            <input type="text" value={this.state.blog} onChange={event => this.updateField(event, "blog")}/>
            <button type="submit" className='btn btn-primary' onSubmit={this.handleSubmit()}>Submit!</button>
        </form>
        )
    }
}
