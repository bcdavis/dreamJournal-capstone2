import React, { useContext } from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import { FirebaseContext } from "./fbAuth/FirebaseProvider.js";
import Login from "./fbAuth/Login.js";
import Register from "./fbAuth/Register.js";
import { JournalList } from "./journal/JournalList.js";
import { JournalEntryCreate } from "./journal/JournalEntryCreate.js";
import { JournalEntryEdit } from "./journal/JournalEntryEdit.js";
import { JournalEntryPreview } from "./journal/JournalEntryPreview.js";
import { JournalStats } from "./journal/JournalStats.js";



export default function ApplicationViews() {
    const { isLoggedIn } = useContext(FirebaseContext);
  
    return (
      <main>
      
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <JournalList /> : <Redirect to="/login" />}
          </Route>

          <Route path="/journalEntry/:journalEntryId">
            {isLoggedIn ? <JournalEntryPreview /> : <Redirect to="/login" />}
          </Route>

          <Route path="/journalEntry/edit/:journalEntryId(\d+)">
            {isLoggedIn ? <JournalEntryEdit /> : <Redirect to="/login" />}
          </Route>
  
          <Route path="/add">
            {isLoggedIn ? <JournalEntryCreate /> : <Redirect to="/login" />}
          </Route>

          <Route path="/stats">
            {isLoggedIn ? <JournalStats /> : <Redirect to="/login" />}
          </Route>
  
          <Route path="/login">
            <Login />
          </Route>
  
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </main>
    );
  };