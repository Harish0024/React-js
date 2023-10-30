import './Employee.css'
import { Component } from "react";
class Employee extends Component{
    constructor(){
        super();
        this.state={pname:'unknown',mname:'unknown',date:'unknown'};
        this.updateproject=this.updateproject.bind(this);
        this.updatemanager=this.updatemanager.bind(this); 
        this.updatedate=this.updatedate.bind(this); 
    }
    updateproject(event){
        console.log(event.target.value);
        this.setState({pname:event.target.value})
    }
    updatemanager(event){
        console.log(event.target.value);
        this.setState({mname:event.target.value});
    }
    updatedate(event){
        console.log(event.target.value);
        this.setState({date:event.target.value});
    }

    render(){
        return(
            <center>
            <div>
                <form>
                <label>
                        Project Name
                </label>
                <input id='hello' type="text" name="pname" onChange={this.updateproject}></input><br></br>
                <label>
                        Manager Name
                </label>
                <input type="text" name="mname" onChange={this.updatemanager}></input><br></br>
                <label>
                        Start Date
                    </label>
                <input type="date" name="date" onChange={this.updatedate}></input><br></br>
                
                      <input type="name" value={this.state.pname}></input><br></br>
                       <input type="name" value={this.state.mname }></input><br></br>
                        <input value={this.state.date }></input>
                   

                </form>
            </div>
            </center>
        )
    }

}
  
export default Employee;