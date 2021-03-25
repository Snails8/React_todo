import React, { Component } from 'react';

let style = {
    maxWidth: '700px',
};

let btn = {
    cursor: 'pointer'
};

// 親からpropsで受け取る
const List = (props) => (
    <ul className="list-group">
        {/*ループして回しているがKeyが必要なので指定*/}
        {props.todos.map((todo, i) => {
            return <li key={i} className="list-group-item" style={style}>
                       {todo.title}<span className="btn btn-primary" style={btn}>Delete</span>
                   </li>
        })};
    {/*//     <li className="list-group-item" style={style}>Item 1<span style={btn}>Delete</span></li>*/}
    {/*//     <li className="list-group-item" style={style}>Item 1<span style={btn}>Delete</span></li>*/}
    {/*//     <li className="list-group-item" style={style}>Item 1<span style={btn}>Delete</span></li>*/}
     </ul>
);

export default List;