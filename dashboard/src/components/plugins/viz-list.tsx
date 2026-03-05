import { Bar3dChartVizComponent } from './viz-components/bar-3d-chart';
import { BoxplotChartVizComponent } from './viz-components/boxplot-chart';
import { ButtonVizComponent } from './viz-components/button';
import { CalendarHeatmapVizComponent } from './viz-components/calendar-heatmap';
import { CartesianVizComponent } from './viz-components/cartesian';
import { FunnelVizComponent } from './viz-components/funnel';
import { HeatmapVizComponent } from './viz-components/heatmap';
import { HorizontalBarChartVizComponent } from './viz-components/horizontal-bar-chart';
import { MericoEstimationChartVizComponent } from './viz-components/merico-estimation-chart';
import { MericoHeatmapVizComponent } from './viz-components/merico-heatmap';
import { VizMericoLinearGaugeVizComponent } from './viz-components/merico-linear-gauge';
import { MericoPanelGroupsVizComponent } from './viz-components/merico-panel-groups';
import { MericoStatsVizComponent } from './viz-components/merico-stats';
import { ParetoChartVizComponent } from './viz-components/pareto-chart';
import { PieChartVizComponent } from './viz-components/pie-chart';
import { RadarChartVizComponent } from './viz-components/radar-chart';
import { RegressionChartVizComponent } from './viz-components/regression-chart';
import { RichTextVizComponent } from './viz-components/rich-text';
import { ScatterChartVizComponent } from './viz-components/scatter-chart';
import { StatsVizComponent } from './viz-components/stats';
import { SunburstVizComponent } from './viz-components/sunburst';
import { TableVizComponent } from './viz-components/table';
import { TextVizComponent } from './viz-components/text';
import { VizDashboardStateVizComponent } from './viz-components/viz-dashboard-state';
import { MericoGQMVizComponent } from './viz-components/viz-merico-gqm';

export const vizList = [
  TableVizComponent,
  StatsVizComponent,
  TextVizComponent,
  RichTextVizComponent,
  SunburstVizComponent,
  PieChartVizComponent,
  HorizontalBarChartVizComponent,
  Bar3dChartVizComponent,
  BoxplotChartVizComponent,
  FunnelVizComponent,
  HeatmapVizComponent,
  CalendarHeatmapVizComponent,
  ParetoChartVizComponent,
  CartesianVizComponent,
  ScatterChartVizComponent,
  RadarChartVizComponent,
  RegressionChartVizComponent,
  MericoGQMVizComponent,
  MericoEstimationChartVizComponent,
  MericoHeatmapVizComponent,
  MericoStatsVizComponent,
  MericoPanelGroupsVizComponent,
  VizMericoLinearGaugeVizComponent,
  ButtonVizComponent,
  VizDashboardStateVizComponent,
];
export type VizNameKeys = {
  displayName: string;
  displayGroup: string;
};
export const vizNameToKeys = vizList.reduce((ret, curr) => {
  ret[curr.name] = {
    displayName: curr.displayName!,
    displayGroup: curr.displayGroup!,
  };
  return ret;
}, {} as Record<string, VizNameKeys>);
