import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import parse from "./functions/parser";
import AppRouter from "./components/AppRouter/AppRouter";
import MatchesListContext from "./context/MatchListContext";
import { getFromLocalStorage, saveInLocalStorage } from "./functions/localStore";
import API from "./api";

function App() {
    const [parsed, setParsed] = useState([]);

    useEffect(() => {

        const parsedData = getFromLocalStorage();
        if(parsedData){
            setParsed(parsedData);
            return;
        }

        fetch(API)
            .then((res) => res.json())
            .then((res) => res.parse.text["*"])
            .then((res) => {
                const parsedData = parse(res);
                setParsed(parsedData);
                saveInLocalStorage(parsedData);
            });
    }, []);

    return (
        <Layout>
            <Layout.Header />
            <Layout.Content>
                <MatchesListContext.Provider value={parsed}>
                    <AppRouter />
                </MatchesListContext.Provider>
            </Layout.Content>
            <Layout.Footer />
        </Layout>
    );
}

export default App;
