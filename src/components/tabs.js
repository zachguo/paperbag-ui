import React, { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ children, defaultActiveTab }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  return (
    <div>
      <div className="tab-list">
        {children.map(({ props: { tab, tabLabel } }) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-list-item ${tab === activeTab ? "tab-list-item-active" : ""}`}
          >
            {tabLabel ? tabLabel : tab}
          </div>
        ))}
      </div>
      <div>
        {children.filter(({ props: { tab } }) => tab === activeTab)}
      </div>
    </div>
  );
};
Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  defaultActiveTab: PropTypes.string.isRequired
};

const TabPane = ({ children, tab, tabLabel }) => {
  return (
    <div key={tab} label={tabLabel}>
      {children}
    </div>
  );
};
TabPane.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  tab: PropTypes.string.isRequired,
  tabLabel: PropTypes.string.isRequired
};

export { Tabs, TabPane };