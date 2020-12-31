import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

const GET_ART = gql`
    query art($artId: String) {
        art(id: $artId) {
            _id
            title
            height
            width
            medium
            category
            sub_category
            owner_collection
            published_year
            date
            publisher
            remarks
            deven_img
            kabindra_sn
            kabindra_dsc
        }
    }
`;

const DELETE_ART = gql`
  mutation removeArt($id: String!) {
    removeArt(id:$id) {
      _id
    }
  }
`;

class ShowArt extends Component {

    render() {
      return (
          <Query pollInterval={500} query={GET_ART} variables={{ artId: this.props.match.params.id }}>
              {({ loading, error, data }) => {
                  if (loading) return 'Loading...';
                  if (error) return `Error! ${error.message}`;
          
                  return (
                      <div className="container">
                          <div className="panel panel-default">
                              <div className="panel-heading">
                              <h4><Link to="/art">Art List</Link></h4>
                                  <h3 className="panel-title">
                                  {data.art.title}
                                  </h3>
                              </div>
                              <div className="panel-body">
                                  <dl>
                                      <dt>height:</dt>
                                      <dd>{data.art.height}</dd>
                                      <dt>width:</dt>
                                      <dd>{data.art.width}</dd>
                                      <dt>medium:</dt>
                                      <dd>{data.art.medium}</dd>
                                      <dt>category:</dt>
                                      <dd>{data.art.category}</dd>
                                      <dt>sub_category:</dt>
                                      <dd>{data.art.sub_category}</dd>
                                      <dt>owner_collection:</dt>
                                      <dd>{data.art.owner_collection}</dd>
                                      <dt>published_year:</dt>
                                      <dd>{data.art.published_year}</dd>
                                      <dt>date:</dt>
                                      <dd>{data.art.date}</dd>
                                      <dt>publisher:</dt>
                                      <dd>{data.art.publisher}</dd>
                                      <dt>remarks:</dt>
                                      <dd>{data.art.remarks}</dd>
                                      <dt>deven_img:</dt>
                                      <dd>{data.art.deven_img}</dd>
                                      <dt>kabindra_sn:</dt>
                                      <dd>{data.art.kabindra_sn}</dd>
                                      <dt>kabindra_dsc:</dt>
                                      <dd>{data.art.kabindra_dsc}</dd>
                                  </dl>
                                  <Mutation mutation={DELETE_ART} key={data.art._id} onCompleted={() => this.props.history.push('/art')}>
                                      {(removeBook, { loading, error }) => (
                                          <div>
                                              <form
                                                  onSubmit={e => {
                                                      e.preventDefault();
                                                      removeBook({ variables: { id: data.art._id } });
                                                  }}>
                                                  <Link to={`/art/edit/${data.art._id}`} className="btn btn-success">Edit</Link>&nbsp;
                                                  <button type="submit" className="btn btn-danger">Delete</button>
                                              </form>
                                          {loading && <p>Loading...</p>}
                                          {error && <p>Error :( Please try again</p>}
                                          </div>
                                      )}
                                  </Mutation>
                              </div>
                          </div>
                      </div>
                  );
              }}
          </Query>
      );
    }
  }

  export default ShowArt;