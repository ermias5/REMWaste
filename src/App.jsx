import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root";
import SelectSkip from "./pages/select-skip/select-skip";
import PermitCheck from "./pages/permit-check";
import WastType from "./pages/wast-type";
import Postcode from "./pages/postcode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <SelectSkip /> },
      { path: "/postcode", element: <Postcode /> },
      { path: "/permit-check", element: <PermitCheck /> },
      { path: "/wast-type", element: <WastType /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
