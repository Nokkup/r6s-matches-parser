const URL =
    "https://liquipedia.net/rainbowsix/api.php?action=parse&origin=*&format=json&page=Liquipedia:Upcoming_and_ongoing_matches";

const API = new Request(URL, {
    method: "GET",
});

export default API;
