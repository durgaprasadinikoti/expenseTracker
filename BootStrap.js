import { useContext } from "react";
import ExpenseContext from "./store/expense-context";
import IndexScreen from "./screens/Index";
import Navigation from "./Navigation/Navigation";

const BootStrap = () => {
    const { mainScreen } = useContext(ExpenseContext);

    return (
        <>
          {!mainScreen && <IndexScreen />}
          {mainScreen && <Navigation />}
        </>
      );
  
}

export default BootStrap;