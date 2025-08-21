import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Provider} from "react-redux";
import BodyComponent from "./components/BodyComponent";
import HomePageComponent from "./components/HomePageComponent";
import appStore from "./redux_store/appStore";
import AboutComponent from "./components/AboutComponent";
import WorkExperienceComponent from "./components/WorkExperienceComponent";
import SkillsComponent from "./components/SkillsComponent";
import ProjectListComponent from "./components/ProjectListComponent";
import ContactComponent from "./components/ContactComponent";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <BodyComponent />,
      children: [
        {
          path: "/",
          element: <HomePageComponent />,
        },
        {
          path:"/about",
          element:<AboutComponent />
        },
        {
          path:"/work",
          element:<WorkExperienceComponent />
        },
        {
          path:"/skills",
          element:<SkillsComponent />
        },
        {
          path:"/projects",
          element:<ProjectListComponent />
        },
        {
          path:"/contact",
          element:<ContactComponent />
        }

      ],
    },
  ]);
  return (
    <Provider store = {appStore}>
      <>
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
