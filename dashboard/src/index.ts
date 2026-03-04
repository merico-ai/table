import { ReactNode } from 'react';
import './i18n';
import './init-dayjs';
import { BuiltInPlugin } from './components/plugins/built-in-plugin';
import { pluginManager } from './components/plugins/plugin-context';

export const getVersion = () =>
  import('../package.json').then(({ version }) => {
    console.log(`[@devtable/dashboard] version: ${version}`);
    return version;
  });

export * from './api-caller/request';
export { useVisibleFilters, type IFormattedFilter } from './components/filter';
export * from './components/panel';
export * from './components/view';
export * from './contexts';
export * from './dashboard-editor';
export * from './dashboard-render';
export * from './model';
export * from './types';
export type { AnyObject } from './types/utils';

export type OnFiltersSubmit = (props?: { force?: boolean }) => void;

export type RenderSearchButtonProps = {
  disabled: boolean;
  onSubmit: OnFiltersSubmit;
  stale: boolean;
};

export interface IDashboardConfig {
  basename: string;
  apiBaseURL: string;
  makeQueryENV?: () => Record<string, any>;
  app_id?: string;
  app_secret?: string;
  monacoPath: string;
  renderSearchButton?: (props: RenderSearchButtonProps) => ReactNode;
}

export { notifyVizRendered, onVizRendered } from './components/plugins/viz-components/viz-instance-api';
export { tokens as pluginServices } from './components/plugins/tokens';
export { useServiceLocator } from './components/plugins/service/service-locator/use-service-locator';
export { useStorageData } from './components/plugins/hooks';
export { VersionBasedMigrator, PluginDataMigrator } from './components/plugins/plugin-data-migrator';
export type { IServiceLocator, IDisposable } from './components/plugins/service/service-locator';
export type { IColorManager } from './components/plugins/color-manager';
export type { IOperationManager } from './components/plugins/operation-manager';
export type { IPanelInfo, IVizManager } from './components/plugins/viz-manager';
export type { IPluginContextProps } from './components/plugins/plugin-context';
export type { IViewComponentProps, IViewPanelInfo } from './components/plugins/viz-manager';
export type {
  IInitialMigrationRet,
  IMigration,
  IMigrationData,
  IMigrationEnv,
} from './components/plugins/plugin-data-migrator';
export type * from './types/plugin';
export { pluginManager };
try {
  pluginManager.install(BuiltInPlugin());
} catch (e) {
  // ignore
}
