import React from "react";

class ClubProps extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleSort = this.handleSort.bind(this);
    }

    handleSort(event) {
        const { members } = this.props;
        
        members.sort();

        this.forceUpdate();
    }

    render() {
        const { name, fa, members } = this.props;
        
        return (
            <li>
                <h1>{name}</h1>
                <i className={fa}></i>
                <ul>
                    {  
                        members.map(member => (
                            <li>
                                {member}
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

export default ClubProps;