import React, { useEffect, useRef } from "react";

export default function Index() {
  const userNameRef = useRef();
  const titleRef = useRef("title");
  useEffect(() => {
    console.log("titleRef", titleRef.current.innerHTML);
    console.log("userNameRef", userNameRef);
    userNameRef.current.focus();
  }, []);

  const addNewTitle = () => {
    titleRef.current.innerHTML = 'New value';
  };
  const changeColor = () => {
    titleRef.current.style.color = "red";
  };

  return (
    <div>
      <h3 ref={titleRef}>old ref</h3>
      <input ref={userNameRef} type="text" />
      <button onClick={addNewTitle}>change text title</button>
      <button onClick={changeColor}>change color title</button>
    </div>
  );
}
