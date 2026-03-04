import { createContext } from 'react';
import { PanelAddonManager } from '~/components/plugins/panel-addon';
import { IPluginManager } from '~/types/plugin';
import { ColorManager, IColorManager } from './color-manager';
import { IOperationManager, OperationManager } from './operation-manager';
import { PluginManager } from './plugin-manager';
import { VizManager } from './viz-manager';

export interface IPluginContextProps {
  pluginManager: IPluginManager;
  vizManager: VizManager;
  colorManager: IColorManager;
  panelAddonManager: PanelAddonManager;
  operationManager: IOperationManager;
}

export const pluginManager = new PluginManager();

export const createPluginContext = (): IPluginContextProps => {
  // todo: need a better approach
  // try {
  //   // reinstall built-in plugin on HMR
  //   pluginManager.install(BuiltInPlugin());
  // } catch (e) {
  //   // ignore
  // }
  const vizManager = new VizManager(pluginManager);
  const colorManager = new ColorManager(pluginManager);
  const panelAddonManager = new PanelAddonManager(pluginManager);
  const operationManager = new OperationManager(pluginManager);
  return { pluginManager, vizManager, colorManager, panelAddonManager, operationManager };
};

export const PluginContext = createContext<IPluginContextProps>(createPluginContext());
