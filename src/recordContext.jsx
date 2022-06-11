import { createContext, useState } from "react";
const RecordContext = createContext();

const RecordProvider = ({ children }) => {
  const [recordText, setRecord] = useState(
    JSON.parse(localStorage.getItem("recordList")[0])
  );
  return (
    <RecordContext.Provider value={{ recordText }}>
      {children}
    </RecordContext.Provider>
  );
};

const withRecord = (Child) => (props) =>
  (
    <RecordContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </RecordContext.Consumer>
  );

export { RecordProvider, withRecord };
