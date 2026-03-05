import * as PACKAGE from '../../../package.json';
import { OPERATIONS } from '../../interactions';
import { IDashboardPlugin, ISingleColor } from '../../types/plugin';

import { Blue, Green, Orange, Red, RedGreen, YellowBlue } from './colors';
import { vizList } from './viz-list';

const basicColors = [
  {
    value: '#25262B',
    name: 'Dark',
  },
  {
    value: '#868E96',
    name: 'Gray',
  },
  {
    value: '#FA5252',
    name: 'Red',
  },
  {
    value: '#E64980',
    name: 'Pink',
  },
  {
    value: '#BE4BDB',
    name: 'Grape',
  },
  {
    value: '#7950F2',
    name: 'Violet',
  },
  {
    value: '#4C6EF5',
    name: 'Indigo',
  },
  {
    value: '#228BE6',
    name: 'Blue',
  },
  {
    value: '#15AABF',
    name: 'Cyan',
  },
  {
    value: '#12B886',
    name: 'Teal',
  },
  {
    value: '#40C057',
    name: 'Green',
  },
  {
    value: '#82C91E',
    name: 'Lime',
  },
  {
    value: '#FAB005',
    name: 'Yellow',
  },
  {
    value: '#FD7E14',
    name: 'Orange',
  },
].map(
  (it): ISingleColor => ({
    name: it.name,
    value: it.value,
    type: 'single',
    category: 'basic',
  }),
);
const colorInterpolations = [RedGreen, YellowBlue, Blue, Green, Red, Orange];
export const BuiltInPlugin: () => IDashboardPlugin = () => ({
  id: 'dashboard',
  version: PACKAGE.version,
  manifest: {
    viz: vizList,
    color: [...basicColors, ...colorInterpolations],
    operations: OPERATIONS,
  },
});
