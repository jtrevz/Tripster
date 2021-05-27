import React from "react";
import { Link, useLocation } from "react-router-dom";

function SplashPage(props) {
    return (
        <div>
            <button type="button" class="btn btn-light"><Link to="/login">Login</Link></button>
            <button type="button" class="btn btn-light"><Link to="/signup">Signup</Link></button>
        </div>

    );
  }

  export default SplashPage;