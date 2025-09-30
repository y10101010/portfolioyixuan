import { createBrowserRouter } from "react-router-dom";
import { Source } from "../Source";
import { Home, About, Contact, Design, Ilustration } from "../pages";

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
                path: "design",
                element: <Design />    
            },
            {
                path: "ilustration",
                element: <Ilustration />    
            },
        ]
    },
]);