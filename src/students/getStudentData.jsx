import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getStudentAction} from '../action/studentAction';
// import { Table } from 'reactstrap';

class GetStudentData extends Component {

    componentDidMount() {
        this.props.getStudentAction();
    }

    render() { 
        // const {studentList} = this.props;
        const Data= this.props.studentList;
        console.log("STUDENT_LIST", Data);
        return ( 
            <div>
                <table class="table table-striped table-dark"
									style={{
                                        border: '1px solid black',
										width: '80%',
										marginLeft: '10%',
										marginTop: '20px',
										fontSize: '15px'
									}}>
                <thead>
                    <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Designation</th>
                    <th  scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {Data && Data.map((D,index) => {
                       return (
                            <tr key={D._id}>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    {D.name}
                                </td>
                                <td>
                                    {D.age}
                                </td>
                                <td key={D._id}>
                                    {D.designation}
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-sm m-2">Edit</button>
                                    <button className="btn btn-primary btn-sm m-2">Delete</button>
                                </td>
                            </tr>
                       )
                   })}
                </tbody>
                </table>
            </div>
         );
    }
}

 
export default connect((state) => ({studentList: state.getStudentReducer.state}),{getStudentAction})(GetStudentData);