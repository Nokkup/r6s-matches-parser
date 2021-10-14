import React from "react";
import {
    Container,
    MatchDate,
    TeamCard,
    Versus,
    League,
} from "./MatchCardStyles";

const MatchCard = ({ leftTeam, rightTeam, league, dateStr }) => {
    return (
        <Container>
            <MatchDate>{dateStr}</MatchDate>
            <TeamCard side="left">{leftTeam}</TeamCard>
            <Versus />
            <TeamCard side="right">{rightTeam}</TeamCard>
            <League>{league}</League>
        </Container>
    );
};

export default MatchCard;
