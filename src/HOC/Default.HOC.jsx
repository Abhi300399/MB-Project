import React from "react";
import {Route,Routes} from "react-router-dom";

//Layout
import DefaultLayout from "../Layouts/Default.layout";

const DeafaultHOC=({element:Component,...rest})=>{
    
    return (
        <>
           
            <Routes>
            <Route {...rest} element={<>
                <DefaultLayout>
                    {Component}
                </DefaultLayout>
             </>}
            />
            </Routes>
        </>
    );
}

export default DeafaultHOC;