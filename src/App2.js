import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Chart } from "react-google-charts";
import { options } from "./options.jsx";
import getData from "./searchHelper";
async function handleClick(handle, plotArr, setPlotArr) {
  if (handle == "") {
    alert("Enter Codeforces Handle");
    return;
  }
  const dataArr = await getData(handle);
  if (dataArr.length === 0) {
    alert("User has not participated in any contest");
    return;
  } else if (dataArr === [-1]) {
    alert("User Not Found");
    return;
  }
  console.log(dataArr);
}
function App2() {
  const [handle, setHandle] = useState("");
  const [plotArr, setPlotArr] = useState([["Day"]]);
  const chart = (
    <Chart
      chartType="LineChart"
      data={[
        ["Day", "Rohan"],
        [1, 100],
        [4, 500],
        [5, 1000],
      ]}
      width="100%"
      height="400px"
      options={options}
      legendToggle
    />
  );
  const change = (event) => {
    setHandle(event.target.value);
  };
  return (
    <div>
      <div className="heading">
        <h1>CF Comparator</h1>
        <h5 className="subheading">compare codeforces graphs on the go...</h5>
      </div>
      <div>
        <div className="field">
          <input
            className="text-field"
            value={handle}
            onChange={change}
            type="text"
            placeholder="Handle"
          />
          <img
            className="search_btn"
            src="../../search.svg"
            alt=""
            onClick={() => handleClick(handle, plotArr, setPlotArr)}
          />
        </div>
      </div>
      <div className="chart_div">{chart}</div>
    </div>
  );
}

export default App2;
