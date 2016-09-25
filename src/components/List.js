/**
 * Created by jonathan on 9/18/16.
 */
import React from 'react';
import './List.css';
import RaisedButton from 'material-ui/RaisedButton'
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');

let experienceItems = ['Summary', 'Education', 'Experience', 'Skills'];

let List = React.createClass({
    getInitialState: function () {
        return {items: experienceItems};
    },
    handleAdd: function () {
        let newItems =
            this.state.items.concat([prompt('Enter some text')]);
        this.setState({items: newItems});
    },
    handleRemove: function (i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    },
    render: function () {
        let items = this.state.items.map(function (item, i) {
            return (
                <div className="List-item" key={item} onClick={this.handleRemove.bind(this, i)}>
                    <h1>{item}</h1>
                    <div>
                        <h2>Programming Languages, Frameworks, and Build Tools:</h2>
                        <h3>Advanced</h3>
                        <ul>
                            <li>ES6 Javascript</li>
                            <li> Angular 1.x</li>
                            <li>HTML/Jade</li>
                            <li>Nodejs</li>
                            <li>CSS/LESS/SASS</li>
                            <li> Git</li>
                        </ul>
                        <h3>Intermediate</h3> Python, Gulp, NPM, Docker, jQuery, Linux CLI, MATLAB
                        <h3>Basic:</h3> Java, C, PHP, Ruby on Rails, Reactjs, Webpack, Grunt
                    </div>
                </div>
            );
        }.bind(this));
        return (
            <div className="List">
                <RaisedButton onClick={this.handleAdd}>Add Item</RaisedButton>
                <ReactCSSTransitionGroup
                    transitionName="List-item"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

export default List;
