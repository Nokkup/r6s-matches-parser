import moment from "moment";

const LOCAL_S_TIMESTAMP = "timestamp";
const LOCAL_S_DATA = "parsedData";

export function getFromLocalStorage() {
    const timestamp = localStorage.getItem(LOCAL_S_TIMESTAMP);

    if (timestamp) {
        const past = moment(timestamp);
        const now = moment();
        const hoursDiff = moment.duration(now.diff(past)).asHours();

        if (hoursDiff < 1) {
            let parsedData = localStorage.getItem(LOCAL_S_DATA);
            if (parsedData) {
                parsedData = JSON.parse(parsedData).map((el) => {
                    return { ...el, date: moment.utc(el.date) };
                });
                return parsedData;
            }
        }
    }

    return null;
}

export function saveInLocalStorage(data){
    localStorage.setItem(LOCAL_S_DATA, JSON.stringify(data));
    localStorage.setItem(LOCAL_S_TIMESTAMP, moment().format());
}