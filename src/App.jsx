import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
 import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}