import React from "react";

export default function Index() {
  const userNameRef = useRef();
  const titleRef = useRef();
  useEffect(() => {
    console.log("userNameRef", userNameRef);
    userNameRef.current.focus();
  }, []);

  return (
    <div>
      <h3 ref={titleRef}>lorenzo</h3>
      <input ref={userNameRef} type="text" />
    </div>
  );
}
