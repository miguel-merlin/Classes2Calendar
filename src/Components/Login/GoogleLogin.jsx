import { useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import jwt_decode from "jwt-decode";

const GoogleLogin = () => {

    const {setIsLoggedIn, setUserObject} = useContext(AuthContext);

    function handleCallbackResponse(response) {
        var userObject = jwt_decode(response.credential);
        setUserObject(userObject)

        if (userObject.email_verified) {
            setIsLoggedIn(true);
        }
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: `${process.env.REACT_APP_CLIENT_ID}`,
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size:"large"}
        );
        google.accounts.id.prompt();
    }, []);

    return(
        <div>
            <div id="signInDiv"></div>
        </div>
    )

}

export default GoogleLogin;