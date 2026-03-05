import { IVizManager } from '~/components/plugins/viz-manager';
import { tokens } from '~/components/plugins/tokens';
import { IVizInteractionManager, VizInstance } from '~/types/plugin';
import { useServiceLocator } from '~/components/plugins/service/service-locator/use-service-locator';

export const useCurrentInteractionManager = ({}: {
  vizManager: IVizManager;
  instance: VizInstance;
}): IVizInteractionManager => {
  const sl = useServiceLocator();
  return sl.getRequired(tokens.instanceScope.interactionManager);
};
