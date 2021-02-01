import React from "react"
import { Route } from "react-router-dom"

/**
 * 
 * Place imports for Journal Provider, Home, EntryForm, and Stats here
 * 
 *
 */



export const ApplicationViews = (props) => {
    return (
        <>
            <JournalProvider>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/edit/:entryId(\d+)">
                    <EntryForm />
                </Route>
                <Route exact path="/addNewEntry">
                    <EntryForm />
                </Route>
                <Route exact path="/stats">
                    <Stats />
                </Route>
            </JournalProvider>

            <Route exact path="/logout">
                <Header />
            </Route>


        </>
    )
}