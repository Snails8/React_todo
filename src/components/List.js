import React from 'react';

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
            return <li key={i} className="list-group-item" style={style}>{todo.title}
                       {/*// onClickで親から受け取った(props)関数を実行、無名関数で実行しiが送られる*/}
                       <span className="btn btn-primary" style={btn} onClick={() => props.handleRemove(i)}>Delete</span>
                   </li>
        })};
    {/*//     <li className="list-group-item" style={style}>Item 1<span style={btn}>Delete</span></li>*/}
    {/*//     <li className="list-group-item" style={style}>Item 1<span style={btn}>Delete</span></li>*/}
    {/*//     <li className="list-group-item" style={style}>Item 1<span style={btn}>Delete</span></li>*/}
     </ul>
);

export default List;