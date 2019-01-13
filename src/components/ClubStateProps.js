import React from "react";

class ClubStateProps extends React.Component {
    constructor(props) {
        super(props);

        const { members } = props;

        this.state = {
            membersSort: members
        };
    
        this.handleSort = this.handleSort.bind(this);
    }

    handleSort(event) {
        const { membersSort } = this.state;
        let newArrayMembers = membersSort;
        newArrayMembers.sort();

        this.setState({
            membersSort: newArrayMembers
        })
    }

    render() {
        const { name, fa } = this.props;
        const { membersSort } = this.state;

        return (
            <React.Fragment>
                <h1>{name}</h1>
                <i className={fa}></i>
                <ul>
                    {  
                        membersSort.map(member => (
                            <li>
                                {member}
                            </li>
                            )
                        ) 
                    }
                </ul>
                <button onClick={this.handleSort}>Ordena alfabeticamente</button>
            </React.Fragment>
            );
        }
}

export default ClubStateProps;
