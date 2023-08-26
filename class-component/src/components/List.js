import React from 'react';

class List extends React.Component{
    render(){
        return <div>
            <h1>{this.props.name}</h1>
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
                <li>List 4</li>
            </ul>
        </div>
    }
}

export default List;