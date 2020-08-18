import React from "react";
import Context from "./context";
import Board from "./Board/Board";
import Settings from "./Settings/Settings";
import Header from "./Header/Header";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import data from "./sampleData/stashExample.json";

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}

function App() {
  let newData = data.values.map((value) => {
    const result = {};

    result.name = value.author.user.name;
    result.email = value.author.user.emailAddress;
    result.prCount = data.values.filter(
      (v) => v.author.user.name === result.name
    ).length;
    return result;
  });
  newData = removeDuplicates(newData, "name");

  document.addEventListener("DOMContentLoaded", function () {
    var collapseElems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapseElems, { accordion: false });

    var selectElems = document.querySelectorAll("select");
    M.FormSelect.init(selectElems);

    var dateElems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(dateElems);
  });

  return (
    <Context.Provider value={{}}>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col m8 s12">
          <Board records={newData.sort((r1, r2) => r2.prCount - r1.prCount)} />
        </div>
        <div className="col m4 s12">
          <Settings />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
