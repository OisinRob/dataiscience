import React from "react"
import ScatterPlot from "./ScatterPlot-with-trendline"

data={[[0, 3],[5, 13],[10, 22],[15, 36],[60, 147],[65, 168],[70, 176],[75, 188],[80, 199],[85, 213],[90, 222],[95, 236],[100, 249]]}

export default class LinearGraph extends React.Component {
  render() {
    return <ScatterPlot data={data} />
  }
}