import { PanelModelInstance } from '../../dashboard-editor';
import {
  IPluginManager,
  IVizInteractionManager,
  IVizOperationManager,
  IVizTriggerManager,
  VizInstance,
} from '../../types/plugin';
import { IColorManager } from './color-manager';
import { InstanceMigrator } from './instance-migrator';
import { IOperationManager } from './operation-manager';
import { PanelAddonManager } from './panel-addon';
import { token } from './service/service-locator';
import { VizManager } from './viz-manager';

/**
 * All available tokens of services, it also serves as an overview of the
 * plugin system
 */
export const tokens = {
  pluginManager: token<IPluginManager>('pluginManager'),
  vizManager: token<VizManager>('vizManager'),
  colorManager: token<IColorManager>('colorManager'),
  panelAddonManager: token<PanelAddonManager>('panelAddonManager'),
  operationManager: token<IOperationManager>('operationManager'),
  instanceScope: {
    panelModel: token<PanelModelInstance>('panelModel'),
    vizInstance: token<VizInstance>('vizInstance'),
    interactionManager: token<IVizInteractionManager>('interactionManager'),
    migrator: token<InstanceMigrator>('migrator'),
    operationManager: token<IVizOperationManager>('operationManager'),
    triggerManager: token<IVizTriggerManager>('triggerManager'),
  },
};
