import React from "react";
import { Form, Select, Radio, Button } from "antd";

const Filter = ({ leagues, teams, setFilterOptions, filterOptions }) => {
    const [form] = Form.useForm();

    const leagueOptions = leagues
        .sort()
        .map((league) => <Select.Option key={league}>{league}</Select.Option>);

    const teamOptions = teams
        .sort()
        .map((team) => <Select.Option key={team}>{team}</Select.Option>);

    const onReset = () => {
        form.resetFields();
        setFilterOptions({
            byTeam: [],
            byLeague: [],
            onlyOngoingMatches: false,
            onlyUpcomingMatches: false,
        });
    };

    const changeTeams = (e) => {
        setFilterOptions({ ...filterOptions, byTeam: [...e] });
    };

    const changeLeagues = (e) => {
        setFilterOptions({ ...filterOptions, byLeague: [...e] });
    };

    const changeMatchDate = (e) => {
        const onlyOngoingMatches = e.target.value === "ongoing" ? true : false;
        const onlyUpcomingMatches = e.target.value === "upcoming" ? true : false;

        setFilterOptions({
            ...filterOptions,
            onlyOngoingMatches,
            onlyUpcomingMatches,
        });
    };

    return (
        <Form
            form={form}
            layout="vertical"
            fields={[
                {
                    name: ["select-team"],
                    value: filterOptions.byTeam,
                },
                {
                    name: ["select-league"],
                    value: filterOptions.byLeague,
                },
                {
                    name: ["radio-match-date"],
                    value:
                        (filterOptions.onlyOngoingMatches && "ongoing") ||
                        (filterOptions.onlyUpcomingMatches && "upcoming"),
                },
            ]}
        >
            <Form.Item name="select-team" label="Select team(s)">
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Select teams"
                    onChange={(e) => changeTeams(e)}
                >
                    {teamOptions}
                </Select>
            </Form.Item>

            <Form.Item name="select-league" label="Select league">
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Select league"
                    onChange={(e) => changeLeagues(e)}
                >
                    {leagueOptions}
                </Select>
            </Form.Item>

            <Form.Item name="radio-match-date" label="Match Date">
                <Radio.Group
                    buttonStyle="solid"
                    onChange={(e) => changeMatchDate(e)}
                >
                    <Radio value="ongoing">Ongoing matches</Radio>
                    <Radio value="upcoming">Upcoming matches</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Filter;
