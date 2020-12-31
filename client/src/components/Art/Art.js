import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Query } from 'react-apollo';
import Table from '../Art/Table'
import { GET_ARTS } from '../graphql';

class Book extends Component {

  render() {
    return (
      <Query pollInterval={500} query={GET_ARTS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
    
          return (
            <div className="container-fluid">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    Bangdel Arts
                  </h3>
                  <h4><Link to="/art/create">Add Art</Link></h4>
                </div>
                <div className="panel-body">
                  <Table />
                  {/* <table className="table table-stripe">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Published Year</th>
                        <th>Title</th>
                        <th>Height (in cm)</th>
                        <th>Width (in cm)</th>
                        <th>Medium</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Owner or Collection</th>
                        <th>Publication Reference</th>
                        <th>Remarks</th>
                        <th>Deven IMG</th>
                        <th>Kabindra S. No.</th>
                        <th>Kabindra DSC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      
                      data.arts.map((art, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{art.published_year}</td>
                          <td><Link to={`/art/${art._id}`}>{art.title}</Link></td>
                          <td>{art.height}</td>
                          <td>{art.width}</td>
                          <td>{art.medium}</td>
                          <td>{art.category}</td>
                          <td>{art.sub_category}</td>
                          <td>{art.owner_collection}</td>
                          <td>{art.publisher}</td>
                          <td>{art.remarks}</td>
                          <td>{art.deven_img}</td>
                          <td>{art.kabindra_sn}</td>
                          <td>{art.kabindra_dsc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table> */}
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Book;
