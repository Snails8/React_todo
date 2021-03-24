import React, { Component } from 'react';

const Form = (props) => (
    <form className="simple-form" onSubmit={props.handleAdd}>
        <div className="form-group">
            <input type="text" name="title" id="title" className="form-control" placeholder="ココ"/>
            <label for="title">form here</label>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>
);

export default Form;