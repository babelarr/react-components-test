import React from "react";

class ClubStateProps extends React.Component {
    constructor(props) {
        super(props);

        const { members } = props;

        this.state = {
            membersSort: members,
            styleOver: ''
        };
    
        this.handleSort = this.handleSort.bind(this);
        this.handleOver = this.handleOver.bind(this);
        this.handleOut = this.handleOut.bind(this);


    }

    handleSort(event) {
        const { membersSort } = this.state;
        let newArrayMembers = membersSort;
        newArrayMembers.sort();

        this.setState({
            membersSort: newArrayMembers
        })
    }

    handleOver (event) {
        this.setState({
            styleOver: 'over'
        })
    }

    handleOut (event) {
        this.setState({
            styleOver: ''
        })
    }

    render() {
        const { name, fa } = this.props;
        const { membersSort } = this.state;

        return (
            <li className={this.state.styleOver} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
                <h1>{name}</h1>
                <i className={fa}></i>
                <ul>
                    {  
                        membersSort.map(memberSort => (
                            <li>
                                {memberSort}
                            </li>
                            )
                        ) 
                    }
                </ul>
                <button onClick={this.handleSort}>Ordena alfabeticamente</button>
            </li>
            );
        }
}

export default ClubStateProps;
