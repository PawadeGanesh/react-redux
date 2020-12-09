import React,{Component, Fragment} from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import AlertBox from '../components/alertBox';

class MainComponent extends Component{

    state = {
        isLoading: false,
        Data: [],
    }


    getData() {
     
        axios.get('http://localhost:5000/vidly/api/genres/')
            .then(res => {
                 console.log("GETDATA",res.data)
                const Data = res.data;
                this.setState({Data})
                console.log("GETDATA",Data);
            })
            .catch(err => console.log(err));
    
    }


    componentDidMount(){
        this.getData();
    }

    handleEdit = (id) => {
        this.props.history.push(`/newEdit/${id}`);
    }

    handleDelete = (id) => {
        axios.delete(`http://localhost:5000/vidly/api/genres/${id}`)
        .then(res => console.log("Deleted Successfully", this.getData()))
        .catch(err => console.log(err));
    }

    render(){
        const {Data, isLoading} = this.state;
        return (
            <Fragment>
        
         <h5 style={{ marginTop: '20px' }}>
                 Data
             </h5>

         <button className="btn btn-success btn-md float-right m-2" onClick={() => {
                         this.props.history.push('/newData');
                     }}>Create</button>
         <div
             className='shadow-sm table-responsive container'
             style={{
                 backgroundColor: '#fff',
                 borderRadius: 6,
                 height: '420px',
                 width: '100%',
                 marginTop: '50px'
             }}
         >
             
             {isLoading ? (
                 <div
                     className='d-flex justify-content-center'
                     style={{ marginTop: '10%' }}
                 >
                     <span className='spinner-border'></span>
                 </div>
             ) : (
                 <div>
                     {Data && Data.length === 0 ? (
                         <div style={{ marginTop: '100px' }}>
                             <AlertBox />
                         </div>
                     ) : (
                         <Table
                             className='widget-row'
                             style={{
                                 border: '1px solid black',
                                 width: '80%',
                                 marginLeft: '10%',
                                 marginTop: '20px',
                                 fontSize: '15px'
                             }}
                         >
                               <thead>
                                     <tr>
                                     <th  className='border text-center'>#</th>
                                     <th  className='border text-center'>Name</th>
                                     <th  className='border text-center'>Edit</th>
                                     <th  className='border text-center'>Remove</th>
                                     </tr>
                                 </thead>
                         {Data &&
                             Data.map((D, index) => {
                                 return (
                                    
                                   <tbody>
                                     
                                     <tr key={D._id}>
                                         <td className='border text-center'>
                                             {index + 1}
                                         </td>
                                         <td className='border text-center'>
                                             {D.name}
                                         </td>
                                         <td className='border text-center'>
                                             <button className="btn btn-primary btn-sm" onClick={() => this.handleEdit(D._id)}>Edit</button>
                                         </td>
                                         <td className='border text-center'>
                                             <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(D._id)}>Delete</button>
                                         </td>
                                     </tr>
                                   </tbody>	
                                    
                                 );
                             })} 
                         </Table>
                     )}
                 
                 </div>
             )}
         </div>
    </Fragment>
        )
    }
}

export default MainComponent;