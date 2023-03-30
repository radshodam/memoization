import React, { useMemo, useState } from "react";

function Index() {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  //   const isEven = () => {
  //     for (let index = 0; index < 2200000000; index++) {
  //       index++;
  //     }
  //     return firstCount % 2 === 0;
  //   };

  // fix by useMemo

  //* result useMeme is just return

  const isEven = useMemo(() => {
    for (let i = 0; i < 2200000000; i++) {
      i++;
    }
    return firstCount % 2 === 0;
  }, [firstCount]);

  return (
    <>
      {/* {isEven() ? "Even" : "Odd"} */}
      {isEven ? "Even" : "Odd"}
      <button onClick={() => setFirstCount((perv) => perv + 2)}>
        firstCount:{firstCount}
      </button>
      <button onClick={() => setSecondCount((perv) => perv + 1)}>
        second : {secondCount}
      </button>
    </>
  );
}

export default Index;
