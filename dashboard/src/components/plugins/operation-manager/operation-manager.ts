import { IDashboardOperationSchema, IPluginManager } from '~/types/plugin';

export interface IOperationManager {
  getAllOperations(): IDashboardOperationSchema[];
}

export class OperationManager implements IOperationManager {
  constructor(private pluginManager: IPluginManager) {}

  getAllOperations(): IDashboardOperationSchema[] {
    const operations: IDashboardOperationSchema[] = [];
    for (const plugin of this.pluginManager.installedPlugins) {
      if (plugin.manifest.operations) {
        operations.push(...plugin.manifest.operations);
      }
    }
    return operations;
  }
}
