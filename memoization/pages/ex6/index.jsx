import React, { useState, useEffect, useMemo } from "react";

// Component for displaying the content of a single tab
function TabContent({ id, data }) {
  console.log(data); // Just logging the data for demo purposes

  // Memoize the JSX code for the component based on the `id` and `data` props
  // This avoids unnecessary re-renders of the component when there are no changes in its props
  return useMemo(() => (
    <div>
      <h2>Tab {id}</h2>
      <p>{data.title}</p>
    </div>
  ), [id, data]);
}

// Main component for the page
function Index() {
  const [activeTab, setActiveTab] = useState(1); // State for tracking the active tab
  const [tabData, setTabData] = useState({}); // State for storing the tab data

  // Fetch data for all tabs on mount using useEffect
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the data for all tabs using Promise.all() to execute them in parallel
        const [data1, data2, data3] = await Promise.all([
          fetch("https://fakestoreapi.com/products/1").then(response => response.json()),
          fetch("https://fakestoreapi.com/products/2").then(response => response.json()),
          fetch("https://fakestoreapi.com/products/3").then(response => response.json())
        ]);
        // Set the data for all tabs in the state
        setTabData({
          1: data1,
          2: data2,
          3: data3,
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // Event handler for clicking on a tab button
  function handleTabClick(tabId) {
    setActiveTab(tabId); // Update the active tab state
  }

  return (
    <div>
      <div>
        {/* Render buttons for each tab */}
        <button onClick={() => handleTabClick(1)}>Tab 1</button>
        <button onClick={() => handleTabClick(2)}>Tab 2</button>
        <button onClick={() => handleTabClick(3)}>Tab 3</button>
      </div>
      {tabData[activeTab] ? ( // If the data for the active tab is available, render the TabContent component
        <TabContent id={activeTab} data={tabData[activeTab]} />
      ) : (
        <div>Loading...</div> // Otherwise, show a loading message
      )}
    </div>
  );
}

export default Index;


