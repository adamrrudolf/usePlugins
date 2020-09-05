import React from "react";
import { Tabs, Tab } from "carbon-components-react";

export default (tabsState) => {
  const { tabs, selectedTabIndex } = tabsState;
  return (
    <Tabs selected={selectedTabIndex}>
      {tabs.map(({ TabPanel, ...tab }) => (
        <Tab {...tab}>{TabPanel && TabPanel(tabsState)}</Tab>
      ))}
    </Tabs>
  );
};
