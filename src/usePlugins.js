import React, { useRef } from "react";

const usePlugins = (props, ...plugins) => {
  const instanceRef = useRef({});
  // Create a getter for the instance (helps avoid a lot of potential memory leaks)
  const useGetLatest = (obj) => {
    const ref = useRef();
    ref.current = obj;
    return React.useCallback(() => ref.current, []);
  };
  const getInstance = useGetLatest(instanceRef.current);

  // Assign the props, plugins and hooks to the instance
  Object.assign(getInstance(), {
    ...props,
    plugins,
    hooks: {
      useInstance: []
    }
  });
  // Allow plugins to register hooks as early as possible
  plugins.forEach((plugin) => {
    plugin(getInstance().hooks);
  });
  // Consume all hooks and make a getter for them
  const getHooks = useGetLatest(getInstance().hooks);
  getInstance().getHooks = getHooks;
  delete getInstance().hooks;
  // Execute each plugin useInstance and modify state of the instance
  getHooks().useInstance.forEach((hook) => {
    hook(getInstance());
  });
  // Return latest state of component
  return getInstance();
};

export default usePlugins;
