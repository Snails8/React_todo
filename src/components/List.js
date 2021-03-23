import React, { Component } from 'react';

let style = {
    maxWidth: '700px',
};

let btn = {
    cursor: 'pointer'
};

const List = (props) => (
    <ul className="list-group">
        <li className="list-group-item" style={style}>Item 1<span style={btn}>Delete</span></li>
        <li className="list-group-item" style={style}>Item 1<span style={btn}>Delete</span></li>
        <li className="list-group-item" style={style}>Item 1<span style={btn}>Delete</span></li>
    </ul>
);

export default List;