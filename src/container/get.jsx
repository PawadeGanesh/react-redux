import React,{Component} from 'react';
import axios from 'axios';

class Project extends Component{

    state = {
        Data: []
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data)
                const Data = res.data;
                this.setState({ Data })
                // console.log("Data",this.state.Data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleClick = (id) => {
        console.log("Click", id)
        this.props.history.push(`/details/${id}`)
    }

    render(){
        const {Data} = this.state;
        return(
            <div>
               {Data && Data.map((D) => {
                   return(
                       <li key={D.id} onClick = {() => this.handleClick(D.id)}>
                           {D.title}
                       </li>
                  
                   )
               })}
            </div>
        )
    }
}

export default Project;