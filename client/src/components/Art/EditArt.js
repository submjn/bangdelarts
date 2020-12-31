import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query, Mutation } from "react-apollo";
import { GET_ART, UPDATE_ART } from '../graphql';

class EditArt extends Component {
    render() {
        let title, height, width, medium, category, sub_category, owner_collection, published_year, date, publisher, remarks, deven_img, kabindra_sn, kabindra_dsc;
        return (
            <Query query={GET_ART} variables={{ bookId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <Mutation mutation={UPDATE_ART} key={data.book._id} onCompleted={() => this.props.history.push(`/art`)}>
                            {(updateArt, { loading, error }) => (
                                <div className="container">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">
                                                EDIT BOOK
                                        </h3>
                                        </div>
                                        <div className="panel-body">
                                            <h4><Link to="/art" className="btn btn-primary">ART List</Link></h4>
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                updateArt({
                                                    variables: {
                                                        title: title.value,
                                                        height: parseFloat(height.value),
                                                        width: parseFloat(width.value),
                                                        medium: medium.value,
                                                        category: category.value,
                                                        sub_category: sub_category.value,
                                                        owner_collection: owner_collection.value,
                                                        published_year: parseInt(published_year.value),
                                                        date: date.value,
                                                        publisher: publisher.value,
                                                        remarks: remarks.value,
                                                        deven_img: parseInt(deven_img.value),
                                                        kabindra_sn: parseInt(kabindra_sn.value),
                                                        kabindra_dsc: parseInt(kabindra_dsc.value)
                                                    }
                                                });
                                                title.value = "";
                                                height.value = null;
                                                width.value = null;
                                                medium.value = "";
                                                category.value = "";
                                                sub_category.value = "";
                                                owner_collection.value = "";
                                                published_year.value = null;
                                                date.value = null;
                                                publisher.value = "";
                                                remarks.value = "";
                                                deven_img.value = null;
                                                kabindra_sn.value = null;
                                                kabindra_dsc.value = null;
                                            }}>
                                                <div className="form-group">
                                                    <label htmlFor="title">Title:</label>
                                                    <input type="text" className="form-control" name="title" ref={node => {
                                                        title = node;
                                                    }} placeholder="Title" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="height">Height(in cm):</label>
                                                    <input type="number" className="form-control" name="height" ref={node => {
                                                        height = node;
                                                    }} placeholder="Height (in cm)" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="width">Width(in cm):</label>
                                                    <input type="number" className="form-control" name="width" ref={node => {
                                                        width = node;
                                                    }} placeholder="Width (in cm)" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="medium">Medium:</label>
                                                    <input type="text" className="form-control" name="medium" ref={node => {
                                                        medium = node;
                                                    }} placeholder="Medium" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="category">Category:</label>
                                                    <input type="text" className="form-control" name="category" ref={node => {
                                                        category = node;
                                                    }} placeholder="Category" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="sub_category">Sub Category:</label>
                                                    <input type="text" className="form-control" name="sub_category" ref={node => {
                                                        sub_category = node;
                                                    }} placeholder="Sub Category" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="owner_collection">Owner or Collection:</label>
                                                    <input type="text" className="form-control" name="owner_collection" ref={node => {
                                                        owner_collection = node;
                                                    }} placeholder="Owner or Collection" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="published_year">Published Year:</label>
                                                    <input type="number" className="form-control" name="published_year" ref={node => {
                                                        published_year = node;
                                                    }} placeholder="Published Year" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="date">Date:</label>
                                                    <input type="date" className="form-control" name="date" ref={node => {
                                                        date = node;
                                                    }} placeholder="Date" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="publisher">publisher:</label>
                                                    <input type="text" className="form-control" name="publisher" ref={node => {
                                                        publisher = node;
                                                    }} placeholder="Publisher" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="remarks">Remarks:</label>
                                                    <textarea className="form-control" name="remarks" ref={node => {
                                                        remarks = node;
                                                    }} placeholder="Remarks" cols="80" rows="3" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="deven_img">Deven IMG:</label>
                                                    <input type="number" className="form-control" name="deven_img" ref={node => {
                                                        deven_img = node;
                                                    }} placeholder="Deven IMG" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="kabindra_sn">Kabindra S.No:</label>
                                                    <input type="number" className="form-control" name="kabindra_sn" ref={node => {
                                                        kabindra_sn = node;
                                                    }} placeholder="Kabindra S.No" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="kabindra_dsc">Kabindra DSC:</label>
                                                    <input type="number" className="form-control" name="kabindra_dsc" ref={node => {
                                                        kabindra_dsc = node;
                                                    }} placeholder="Kabindra DSC" />
                                                </div>
                                                <button type="submit" className="btn btn-success">Submit</button>
                                            </form>
                                            {loading && <p>Loading...</p>}
                                            {error && <p>Error :( Please try again</p>}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default EditArt;