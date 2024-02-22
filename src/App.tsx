import MainRoutes from "./shared/routes/MainRoutes";
import useGetAuthData from "./shared/hooks/useGetAuthData";

function App() {
  useGetAuthData();

  return (
    <div className="min-h-[100vh]">
      <MainRoutes />
    </div>
  );
}

export default App;
