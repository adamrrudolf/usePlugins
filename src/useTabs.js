export default (hooks) => {
  hooks.useInstance.push(useInstance);
};

const useInstance = (instance) => {
  const { columns, initialState } = instance;
  let selectedTabIndex = columns.findIndex(
    (col) => col.accessor === initialState?.selectedTab
  );
  if (selectedTabIndex === -1) selectedTabIndex = 0;
  const tabs = columns.map(({ Header, accessor, ...def }) => {
    return {
      ...def,
      label: Header,
      key: accessor,
      id: accessor
    };
  });
  Object.assign(instance, { tabs, selectedTabIndex });
};
