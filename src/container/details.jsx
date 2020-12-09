import React,{Component} from 'react';

class Details extends Component {
    render(){
        const {Data} = this.props
        console.log("Data123", Data)
        return(
            <div>
                Details:    
                <button className="btn btn-primary btn-sm mt-2 ml-5" onClick={() => this.props.history.push("/getjson")}>Back</button>
                {Data && Data.map((D) => {
                    return (
                        <li key={D.id}>
                        {D.title}
                    </li>
                    )
                  
                })}

            </div>
        )
    }
}

export default Details;