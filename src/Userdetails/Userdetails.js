import { Component } from "react";

class Userdetails extends Component{
    //this class ,ust implement a function called render
    constructor(){
        super();
        this.state={firstname:'harish',lastname:'V'};
        this.UpdateFirstName=this.UpdateFirstName.bind(this);
        this.UpdateLastName=this.UpdateLastName.bind(this); 
    }
    UpdateFirstName(event){
        console.log(event.target.value);
        //store the value of first name textbox
        //firstname field in  the state
        this.setState({firstname:event.target.value})
    }
    UpdateLastName(event){
        console.log(event.target.value);
        this.setState({lastname:event.target.value})
    }
    render(){
        return (
            <div className="formclass">
                <center>
                <form>
                    <label>
                        First Name
                    </label>
                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.UpdateFirstName}/><br></br>
                    <label>
                        Last Name
                    </label>
                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.UpdateLastName}/><br></br>
                    <input type="submit" value="Save"/><br></br>
                    <b>Your full name .Mr/ms</b>&nbsp;&nbsp;
                    <label>
                        {this.state.firstname}&nbsp;&nbsp;
                        {this.state.lastname }
                    </label>
                </form>
                </center>
            </div>
        );
    }
}
export default Userdetails;