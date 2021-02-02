import React, { useContext } from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import { FirebaseContext } from "./fbAuth/FirebaseProvider.js";
import Login from "./fbAuth/Login.js";
import Register from "./fbAuth/Register.js";
import { JournalList } from "./journal/JournalList.js";
import { JournalListAddForm } from "./journal/JournalLIstAddForm.js";




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

          <Route path="/journalEntry/edit/:journalEntryId">
            {isLoggedIn ? <JournalEntryUpdate /> : <Redirect to="/login" />}
          </Route>
  
          <Route path="/add">
            {isLoggedIn ? <JournalEntryCreate /> : <Redirect to="/login" />}
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