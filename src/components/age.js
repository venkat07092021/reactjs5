import {Component} from 'react';

class age extends Component{

    constructor(props){
        super(props);
        this.state = {age:null,selectedDate:""};
    }

    handleChange = (event) => {
        this.setState({
            selectedDate:event.target.value
        });
    };

    calAge = () => {
        const {selectedDate} = this.state;
        const d = new Date(selectedDate);
        const today = new Date();
        const a = today.getFullYear() - d.getFullYear();
        this.setState({
            age:a
        });
    };

    
    
    render(){
        const divStyle = {
            margin:"200px",
            border:"1px solid black"
        }
        const bStyle = {
            width:"100px",
            height:"35px",
            backgroundColor:"Blue",
            color:"white",
            borderRadius:"8px"
        }
        return(
            <center>
                <div  style={divStyle}>
                    <h1>Age Calculator</h1>
                    <h4>Enter your date of birth</h4>
                    <input type="date" id="d" style={{width:"250px",height:"30px"}} onChange={this.handleChange}></input>
                    <br/>
                    <br/>
                    <button style={bStyle} onClick={this.calAge}>Calculate Age</button>
                    <br/>
                    {this.state.age !== null && (
                        <h2>Your are {this.state.age} years old.</h2>
                    )}
                </div>
            </center>
        )
    }
}

export default age;