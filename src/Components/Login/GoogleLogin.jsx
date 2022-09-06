import { useEffect } from "react";
import jwt_decode from "jwt-decode";

const GoogleLogin = () => {

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token " + response.credential)
        var userObject = jwt_decode(response.credential);
        console.log(userObject)
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