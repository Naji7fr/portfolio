import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../index.scss';
import App from './App.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';

/**
 * Main – Sets up React Router and wraps the app in StrictMode.
 * Routes: / (Home), /contact (Contact). App is the layout with navbar + Outlet + footer.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
]);

function Main() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default Main;
