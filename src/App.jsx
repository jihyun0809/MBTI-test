import Router from "./shared/Router";
import UserProvider from "./components/UserProvider";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
