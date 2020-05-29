import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CourseTable from "./Components/CourseTable";

function App() {
  return (
    <div className="App">
      <CourseTable></CourseTable>
      <p>
        Credit: lurkrake from{" "}
        <a href="https://www.reddit.com/r/unsw/comments/gsat0t/wam_to_us_gpa/fs4r7fm/">
          reddit
        </a>{" "}
        for the function to calculate wam to gpa
      </p>
      <p>
        Check out the <a href="https://github.com/baapham/wam-to-gpa">Github</a>
      </p>
    </div>
  );
}

export default App;
