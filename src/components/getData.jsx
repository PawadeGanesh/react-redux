import React,{Component, Fragment} from 'react';
import {connect} from 'react-redux';
import getData from '../action/getAction';
import deleteData from '../action/deleteAction';
// import ReactPaginate from 'react-paginate';
import { Table } from 'reactstrap';
import AlertBox from './alertBox';
// import {Link} from 'react-router-dom';

class GetData extends Component {

    state = {
        isLoading: false,
		page: 1,
		pageSize: 5,
    }
 
    componentDidMount() {
		if (!this.props.newData) {
		this.props.getData();
		}
	}
	
	handleDelete = (id) => {
		// e.preventDefault();
		// console.log("deleteData",this.props.deleteData(this.props.id));
		this.props.deleteData(id);

	}

	handleEdit = (id) => {
		console.log('thisssss',id);
		this.props.history.push(`/edit/${id}`);
	}



    // columns() {
    //     const { page, pageSize } = this.state;
        
    //     return [
    //         {
    //             name: 'id',
    //             label: 'ID',
    //             onRender: (row, index) => index + 1 + (page-1) * pageSize
    //         },
    //         {
    //             name: 'title',
    //             label: 'Title'
    //         },
    //         {
    //             name: 'body',
    //             label: 'Description'
    //         }
    //     ];
    // }

    onPageChange(page) {
		this.setState({ page });
	}
    

    render(){
        const Data = this.props.newData;
        console.log('Data', Data)

        const { isLoading} = this.state;

        // const pages = [];

		// const results = [...Data];
		// while (results.length > 0) pages.push(results.splice(0, pageSize));

		// const fields = this.columns();
        return(
           <Fragment>
               	{/* <div style={{ marginLeft: '100px', marginTop: '20px' }}>
					<BackNavigate />
				</div> */}
                <h5 style={{ marginTop: '20px' }}>
						Data
					</h5>

                <button className="btn btn-success btn-md float-right m-2" onClick={() => {
								this.props.history.push('/form');
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

export default connect( (state) => ({newData:state.getReducer.state}), {getData, deleteData})(GetData);