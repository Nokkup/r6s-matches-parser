import React, { useContext, useState } from "react";
import { Col, List, Row, Grid } from "antd";
import MatchCard from "../components/MatchCard/MatchCard";
import MatchListContext from "../context/MatchListContext";
import filterMatch from "../functions/filter";
import unique from "../functions/unique";
import CollapseFilter from "../components/Filter/CollapseFilter";

const Main = () => {
    const matchList = useContext(MatchListContext);
    const { md } = Grid.useBreakpoint();
    const [filterOptions, setFilterOptions] = useState({
        byTeam: [],
        byLeague: [],
        onlyOngoingMatches: false,
        onlyUpcomingMatches: false,
    });

    const teams = unique(
        matchList.map((el) => [el.leftTeam, el.rightTeam]).flat()
    );
    const leagues = unique(matchList.map((el) => el.league));

    return (
        <Row justify="center" align="middle">
            <Col span={md ? 6 : 20} offset={1}>
                <CollapseFilter
                    breakpoint={md}
                    leagues={leagues}
                    teams={teams}
                    setFilterOptions={setFilterOptions}
                    filterOptions={filterOptions}
                />
            </Col>

            <Col span={12} offset={2}>
                <List
                    header={<h2>Upcoming and ongoing matches</h2>}
                    pagination={{
                        pageSize: 4,
                        showSizeChanger: false,
                        responsive: true,
                    }}
                    dataSource={matchList.filter((el) =>
                        filterMatch({ filterOptions, ...el })
                    )}
                    renderItem={(item) => (
                        <List.Item>
                            <MatchCard {...item}></MatchCard>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    );
};

export default Main;
