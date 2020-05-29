import React from "react";

export const CourseItem = (props) => {
  const onMarkChange = (e) => {
    props.onMarkChange({
      mark: e.target.value,
      id: props.id,
    });
  };
  const onUocChange = (e) => {
    props.onUocChange({
      uoc: e.target.value,
      id: props.id,
    });
  };
  return (
    <div>
      Mark: <input type="number" value={props.mark} onChange={onMarkChange} />
      UOC: <input type="number" value={props.uoc} onChange={onUocChange} />
    </div>
  );
};

export default CourseItem;
