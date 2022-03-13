import ContriesProvider from "./context/ContriesProvider";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <ContriesProvider>
      <Routes />
    </ContriesProvider>
  );
};

export default App;
