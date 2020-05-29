import React from "react";
import CourseItem from "./CourseItem";

export const CourseTable = () => {
  const [data, setData] = React.useState([]);
  const [GPA, setGPA] = React.useState(0);
  const [key, setKey] = React.useState(0);

  const addRow = () => {
    const tempData = [
      ...data,
      {
        key,
        mark: 0,
        uoc: 0,
      },
    ];
    setKey(key + 1);
    setData(tempData);
  };

  const calculateGPA = () => {
    let distinction = 0;
    let credit = 0;
    let pass = 0;
    let fail = 0;
    let uocCompleted = 0;
    for (const course of data) {
      const uoc = parseInt(course.uoc);
      const mark = parseInt(course.mark);
      uocCompleted += uoc;
      if (mark >= 75) {
        distinction += uoc;
      } else if (mark >= 65) {
        credit += uoc;
      } else if (mark >= 50) {
        pass += uoc;
      } else {
        fail += uoc;
      }
    }
    console.log((4 * distinction + 3 * credit + 2 * pass) / uocCompleted);
    setGPA((4 * distinction + 3 * credit + 2 * pass) / uocCompleted);
  };

  const onMarkChange = (newData) => {
    const tempData = data.map((course) => {
      if (course.key === newData.id) {
        const tempMark = {
          ...course,
          mark: newData.mark,
        };
        return tempMark;
      }
      return course;
    });
    setData(tempData);
  };

  const onUocChange = (newData) => {
    const tempData = data.map((course) => {
      if (course.key === newData.id) {
        const tempMark = {
          ...course,
          uoc: newData.uoc,
        };
        return tempMark;
      }
      return course;
    });
    setData(tempData);
  };

  return (
    <div>
      {data.map((course) => {
        return (
          <CourseItem
            key={course.key}
            id={course.key}
            mark={course.mark}
            uoc={course.uoc}
            onMarkChange={onMarkChange}
            onUocChange={onUocChange}
          />
        );
      })}
      <button onClick={addRow}>Add a course</button>
      <button onClick={calculateGPA}>Calculate GPA</button>
      <br />
      {GPA}
    </div>
  );
};

export default CourseTable;
