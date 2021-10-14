import moment from "moment";

function parseDates(str) {
    //date format: "October 12, 2021 - 19:45"
    const regexpDates = new RegExp(
        "([A-Za-z]{3,}) ([0-9]{1,2}), ([0-9]{4}) - ([0-9:0-9]{4,5})",
        "g"
    );
    const dates = Array.from(str.matchAll(regexpDates));
    const result = dates.map((date) =>
        moment.utc(date[0], "MMMM DD YYYY HH:mm")
    );

    return result;
}

function parseLeagues(str) {
    const regexpLeagues = new RegExp(
        '<a href="/rainbowsix/.*" title=".*">(.*)</a>&#160;',
        "g"
    );
    const leagues = Array.from(str.matchAll(regexpLeagues));
    const result = leagues.map((league) => league[1]);

    return result;
}

function parseTeams(str) {
    //takes the title from tag like <span data-highlightingclass=\"Mkers\">
    const regexpTeams = new RegExp('data-highlightingclass="([^"]+)', "g");
    const teams = str.matchAll(regexpTeams);

    let result = [];
    let pairs = {};

    for (let team of teams) {
        if (pairs.leftTeam) {
            pairs.rightTeam = team[1];
            result.push(pairs);
            pairs = {};
        } else {
            pairs.leftTeam = team[1];
        }
    }

    return result;
}

function parse(str) {
    const parsedResult = [];

    const teams = parseTeams(str);
    const dates = parseDates(str);
    const leagues = parseLeagues(str);

    for (let i = 0; i < teams.length; i++) {
        parsedResult[i] = {
            ...teams[i],
            date: dates[i],
            dateStr: dates[i].format("MMM DD YYYY HH:mm"),
            league: leagues[i],
        };
    }

    parsedResult.sort((a, b) => {
        return a.date.unix() - b.date.unix();
    });

    return parsedResult;
}

export default parse;
