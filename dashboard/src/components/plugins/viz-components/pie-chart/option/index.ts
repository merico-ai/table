import { getAnimationConfig } from '~/utils/animation';
import { IPieChartConf } from '../type';
import { getDataset } from './dataset';
import { getSeries } from './series';
import { getTooltip } from './tooltip';

export function getOption(conf: IPieChartConf, data: TPanelData, width: number) {
  const dataset = getDataset(conf, data);

  // Calculate element count from dataset source (accounts for Others aggregation)
  const animationConfig = getAnimationConfig(dataset.source.length);

  return {
    ...animationConfig,
    dataset,
    tooltip: getTooltip(conf),
    series: getSeries(conf, data, width),
  };
}
