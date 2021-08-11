import React from "react";
import LineChartComponent from "./Components/LineChart";
import PieChartComponent from "./Components/PieChart";
import PieChart3DComponent from './Components/PieChart3d'
import TableComponent from "./Components/TableComponent";
import ChangeValue from "./Components/TestComponent";
import Foo from './Components/ShowMore'
import CheckList from "./Components/CheckList";
import LifeCycleComponent from "./Components/LifeCycle";
import ToDo from "./Components/ToDo";



const App = (props) => {
  console.log(props.store.getState())
  return (
    <>
      <div>
        <div>
          <PieChartComponent />
        </div>
        <div>
          <PieChart3DComponent />
        </div>
        <div>
          <LineChartComponent />
        </div>
      </div>
      <ChangeValue />
      <TableComponent />
      <Foo/>
      <CheckList/>
      <LifeCycleComponent/>
      <ToDo/>
    </>
  );
};


export default App;
