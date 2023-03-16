import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Content from './pages/Content';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Delete from './pages/Delete';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home
      title="Home Page"
    />,
    children: [
      {
        path: "/content",
        element:
          <ProtectedRoute>
            <Content
              title="Content Page"
            />,
          </ProtectedRoute>
      },
      {
        path: "/content/:id",
        element:
          <ProtectedRoute>
            <Content
              title="Content Page"
            />,
          </ProtectedRoute>
      },
      {
        path: "/aboutus",
        element: <AboutUs
          title="About Us Page"
        />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      },
      {
        path: "/delete/:id",
        element: <Delete />,
      },
      {
        path: "/login",
        element: <Login />,  /* import login ke element */
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
