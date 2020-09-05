import usePlugins from './usePlugins';
import useTabs from './useTabs';

export default function useCarbonTabs(params, ...plugins) {
  const defaultPlugins = [ 
    useTabs,
  ];
  return usePlugins(
    { ...params},
    ...defaultPlugins,
    ...plugins,
  );
};

