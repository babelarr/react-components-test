import React from "react";

class ClubState extends React.Component {
    constructor(props) {
        super(props);

        const { members, name, fa } = props;

        this.state = {
            membersSort: members,
            nameClub: name,
            faClub: fa
        };
    
        this.handleSort = this.handleSort.bind(this);
    }

    handleSort(event) {
        let newArrayMembers = this.state.membersSort;
        newArrayMembers.sort();

        this.setState({
            membersSort: newArrayMembers
        })
    }

    render() {
        const { nameClub, faClub, membersSort } = this.state;
        
        return (
            <React.Fragment>
                <h1>{nameClub}</h1>
                <i className={faClub}></i>
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

export default ClubState;