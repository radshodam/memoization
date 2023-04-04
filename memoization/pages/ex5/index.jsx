import React, { useState, useEffect } from "react";

function TabContent({ id, data }) {
  console.log(data);

  return (
    <div>
      <h2>Tab {id}</h2>
      <p>{data.title}</p>
    </div>
  );
}

function Index() {
  const [activeTab, setActiveTab] = useState(1);
  const [tabData, setTabData] = useState({});

  useEffect(() => {
    // Fetch data for all tabs on mount
    async function fetchData() {
      const response1 = await fetch("https://fakestoreapi.com/products/1");
      const data1 = await response1.json();
      const response2 = await fetch("https://fakestoreapi.com/products/2");
      const data2 = await response2.json();
      const response3 = await fetch("https://fakestoreapi.com/products/3");
      const data3 = await response3.json();
      setTabData({
        1: data1,
        2: data2,
        3: data3,
      });
    }
    fetchData();
  }, []);

  function handleTabClick(tabId) {
    setActiveTab(tabId);
  }

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick(1)}>Tab 1</button>
        <button onClick={() => handleTabClick(2)}>Tab 2</button>
        <button onClick={() => handleTabClick(3)}>Tab 3</button>
      </div>
      {tabData[activeTab] ? (
        <TabContent id={activeTab} data={tabData[activeTab]} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Index;
