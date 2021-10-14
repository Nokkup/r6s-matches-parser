import React from 'react';
import { Collapse } from 'antd';
import Filter from "./Filter";


const CollapseFilter = ({ breakpoint, leagues, teams, setFilterOptions, filterOptions }) => {
    return (
        breakpoint
        ?
        <Filter
            leagues={leagues}
            teams={teams}
            setFilterOptions={setFilterOptions}
            filterOptions={filterOptions}
        />
        :
        <Collapse>
            <Collapse.Panel header="Filter">
                <Filter
                    leagues={leagues}
                    teams={teams}
                    setFilterOptions={setFilterOptions}
                    filterOptions={filterOptions}
                />
            </Collapse.Panel>
        </Collapse>
    );
}

export default CollapseFilter;
