import React from "react";
import CarbonTabs from "./CarbonTabs";
import useCarbonTabs from "./useCarbonTabs";

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Tab1",
        accessor: "tab1",
      },
      {
        Header: "Tab2",
        accessor: "tab2",
        TabPanel: (state) => <div>{JSON.stringify(state)}</div>,
      }
    ],
    []
  );

  const state = useCarbonTabs({
    columns,
    initialState: { selectedTab: 'tab2'}
  });
  return <CarbonTabs {...state} />;
}

export default App;
