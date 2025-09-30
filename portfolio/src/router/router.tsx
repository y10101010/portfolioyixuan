import { createBrowserRouter } from "react-router-dom";
import { Source } from "../Source";
import { Home, About, Contact, Projects, Design, Visual, Illustration, Others, DesignDetails, IllustrationDetails, OtherDetails, VisualDetails } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Source /> ,
        children: [
            {   
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />    
            },
            {
                path: "contact",
                element: <Contact />    
            },
            {
                path: "projects",
                children:[
                    {
                        path: "",
                        element: <Projects /> 
                    },
                    {
                        path: "design",
                        element: <Design />
                    },
                    {
                        path: "visual",
                        element: <Visual /> 
                    },
                    {
                        path: 'Illustration',
                        element: <Illustration />
                    },
                    {
                        path: 'others',
                        element: <Others />
                    },
                    
                ]   
            },
            {
                path: "projectDetails/:id",
                children:[
                    {
                        path: "designDetails/:id",
                        element: <DesignDetails /> 
                    },
                    {
                        path: "illustrationDetails/:id",
                        element: <IllustrationDetails />
                    },
                    {
                        path: "otherDetails/:id",
                        element: <OtherDetails /> 
                    },
                    {
                        path: 'visualDetails/:id',
                        element: <VisualDetails />
                    },
                ]   
            }
        ]
    },
]);