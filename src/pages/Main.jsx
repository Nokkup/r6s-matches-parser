import React, { useContext, useState, useMemo } from "react";
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

    const teams = useMemo(
        () => unique(matchList.map((el) => [el.leftTeam, el.rightTeam]).flat()),
        [matchList]
    );

    const leagues = useMemo(
        () => unique(matchList.map((el) => el.league)),
        [matchList]
    );

    return (
        <Row justify="center" align="middle">
            <Col span={md ? 6 : 20} offset={md ? 1 : 0}>
                <CollapseFilter
                    breakpoint={md}
                    leagues={leagues}
                    teams={teams}
                    setFilterOptions={setFilterOptions}
                    filterOptions={filterOptions}
                />
            </Col>

            <Col span={md ? 12 : 16} offset={md ? 2 : 0}>
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
