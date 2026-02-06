import { get } from 'lodash';
import { getAnimationConfig } from '~/utils/animation';
import { IFunnelConf } from '../type';
import { getSeries } from './series';
import { getTooltip } from './tooltip';

export function getOption(conf: IFunnelConf, data: TPanelData) {
  const series = getSeries(conf, data);

  // Calculate element count from series data
  const elementCount = series.reduce((sum, s) => sum + get(s, 'data.length', 0), 0);
  const animationConfig = getAnimationConfig(elementCount);

  return {
    ...animationConfig,
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    tooltip: getTooltip(conf, data),
    series,
  };
}
