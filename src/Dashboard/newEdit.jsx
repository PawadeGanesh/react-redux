import React, {Component} from 'react';
import axios from 'axios';

class NewEdit extends Component {

    state = {
        name: ''
    }

    componentDidMount() {

        axios.get('http://localhost:5000/vidly/api/genres/'+ this.props.match.params.id)
        .then(res => {
            const Data = res.data.name;
            console.log("RES",Data);
            this.setState({name: Data})
          
        })
        .catch(err => console.log(err));
        
    }

    editData() {
  
        const obj = {
            name: this.state.name
        }
        axios.put('http://localhost:5000/vidly/api/genres/'+ this.props.match.params.id ,obj, {
            headers: {'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log("EDITIIII", res);
                this.props.history.push('/get')
            })
            .catch(err => console.log(err))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.editData();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input type="text" name="name" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} />
                    </label>
                    <button className="btn btn-success btn-md float-right m-2" onClick={() => {
								this.props.history.push('/get');
							}}>Cancel</button>
                    <button type="submit" className="btn btn-success m-2">Update</button>
                </form>
               
            </div>
        )
    }
}

export default NewEdit;