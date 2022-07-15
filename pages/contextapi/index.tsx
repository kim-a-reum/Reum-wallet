import { createContext } from "react";
import ContextApi from "../../src/components/units/contextAPI/contextapi.container";

export const ExampleContext = createContext(null);
const ContextApiPage = () => {
  return (
    <ExampleContext.Provider value={{ isEdit: false }}>
      <ContextApi />;
    </ExampleContext.Provider>
  );
};

export default ContextApiPage;
