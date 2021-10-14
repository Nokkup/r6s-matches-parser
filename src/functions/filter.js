import moment from "moment";

function filterMatch({ filterOptions, leftTeam, rightTeam, league, date }) {
    let result = true;
    if (filterOptions.byTeam.length) {
        result =
            filterOptions.byTeam.includes(leftTeam) ||
            filterOptions.byTeam.includes(rightTeam)
                ? true
                : false;
    }

    if (filterOptions.byLeague.length) {
        result = filterOptions.byLeague.includes(league) ? result : false;
    }

    if (filterOptions.onlyOngoingMatches) {
        result = date.isSameOrBefore(moment()) ? result : false;
    }

    if (filterOptions.onlyUpcomingMatches) {
        result = date.isSameOrAfter(moment()) ? result : false;
    }

    return result;
}

export default filterMatch;
