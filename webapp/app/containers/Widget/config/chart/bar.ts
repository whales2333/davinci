import {
  PIVOT_DEFAULT_AXIS_LINE_COLOR,
  PIVOT_CHART_FONT_FAMILIES,
  PIVOT_DEFAULT_FONT_COLOR,
  CHART_LABEL_POSITIONS
} from '../../../../globalConstants'

import { IChartInfo } from '../../../../containers/Widget/components/Widget'

const bar: IChartInfo = {
  id: 3,
  name: 'bar',
  title: '柱状图',
  icon: 'icon-chart-bar',
  coordinate: 'cartesian',
  requireDimetions: [0, 1],
  requireMetrics: [1, 9999],
  dimetionAxis: 'col',
  data: {
    color: {
      title: '颜色',
      type: 'category'
    },
    tip: {
      title: '提示信息',
      type: 'value'
    }
  },
  style: {
    spec: {
      stack: false
    },
    label: {
      showLabel: false,
      labelPosition: CHART_LABEL_POSITIONS[0].value,
      labelFontFamily: PIVOT_CHART_FONT_FAMILIES[0].value,
      labelFontSize: '12',
      labelColor: PIVOT_DEFAULT_FONT_COLOR
    },
    xAxis: {
      showLine: true,
      lineStyle: 'solid',
      lineSize: '1',
      lineColor: PIVOT_DEFAULT_AXIS_LINE_COLOR,
      showLabel: true,
      labelFontFamily: PIVOT_CHART_FONT_FAMILIES[0].value,
      labelFontSize: '12',
      labelColor: PIVOT_DEFAULT_FONT_COLOR
    },
    yAxis: {
      showLine: true,
      lineStyle: 'solid',
      lineSize: '1',
      lineColor: PIVOT_DEFAULT_AXIS_LINE_COLOR,
      showLabel: true,
      labelFontFamily: PIVOT_CHART_FONT_FAMILIES[0].value,
      labelFontSize: '12',
      labelColor: PIVOT_DEFAULT_FONT_COLOR,
      showTitleAndUnit: true,
      titleFontFamily: PIVOT_CHART_FONT_FAMILIES[0].value,
      titleFontSize: '12',
      titleColor: PIVOT_DEFAULT_FONT_COLOR,
      nameLocation: 'middle',
      nameRotate: 90,
      nameGap: 40
    },
    splitLine: {
      showHorizontalLine: true,
      horizontalLineStyle: 'dashed',
      horizontalLineSize: '1',
      horizontalLineColor: PIVOT_DEFAULT_AXIS_LINE_COLOR,
      showVerticalLine: false,
      verticalLineStyle: 'dashed',
      verticalLineSize: '1',
      verticalLineColor: PIVOT_DEFAULT_AXIS_LINE_COLOR
    },
    legend: {
      showLegend: true,
      legendPosition: 'right',
      selectAll: true,
      fontFamily: PIVOT_CHART_FONT_FAMILIES[0].value,
      fontSize: '12',
      color: PIVOT_DEFAULT_FONT_COLOR
    }
  }
}

export default bar
