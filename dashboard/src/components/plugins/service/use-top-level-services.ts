import React from 'react';
import { IPluginContextProps } from '~/components/plugins/plugin-context';
import { tokens } from '~/components/plugins/tokens';
import { IServiceLocator } from '~/components/plugins/service/service-locator';

export function useTopLevelServices(pluginContext: IPluginContextProps) {
  return React.useCallback(
    (services: IServiceLocator) => {
      return services
        .provideValue(tokens.pluginManager, pluginContext.pluginManager)
        .provideValue(tokens.vizManager, pluginContext.vizManager)
        .provideValue(tokens.panelAddonManager, pluginContext.panelAddonManager)
        .provideValue(tokens.colorManager, pluginContext.colorManager)
        .provideValue(tokens.operationManager, pluginContext.operationManager);
    },
    [pluginContext],
  );
}
