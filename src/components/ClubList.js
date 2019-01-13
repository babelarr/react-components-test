import React from "react";
import ClubState from "./ClubState";

class ClubList extends React.Component {
    render() {
        const { clubs } = this.props;

        return (
            <ul>
            {
                clubs.map(club => (
                    <li>
                        <ClubState
                            name={club.name}
                            fa={club.fa}
                            members={club.members}
                        />
                    </li>
                    )
                ) 
            }
            </ul>
        );
        }
}

export default ClubList;