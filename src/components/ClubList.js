import React from "react";
import ClubStateProps from "./ClubStateProps";

class ClubList extends React.Component {

    render() {
        const { clubs } = this.props;

        return (
                <ul>
                {
                    clubs.map(club => (
                        <ClubStateProps
                            name={club.name}
                            fa={club.fa}
                            members={club.members}
                        />
                        )
                    ) 
                }
                </ul>
        );
    }
}

export default ClubList;