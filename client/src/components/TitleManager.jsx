import React from 'react'
import { useEffect } from 'react'
import {useLocation} from "react-router-dom";

const TitleManager = () => {

    const location = useLocation();

    useEffect(() => {
        const routeTitle =  {
            "/":"Home || ICAI SEATTLE",
            "/events":"Events || ICAI SEATTLE",
            "/gallery":"Gallery || ICAI SEATTLE",
            "/membership":"Membership || ICAI SEATTLE",
            "/about-us":"About || ICAI SEATTLE",
            "/contact":"Contact || ICAI SEATTLE"
        }

        document.title = routeTitle[location.pathname] || ""


    }, [location])

    return null
}

export default TitleManager
