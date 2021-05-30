import React from "react";

function Profile(props) {
    return (
        <div>
                  <div className="text-center mt-5 mb-5 container">
      <div className="form-signin justify-content-center">
      <img class="rounded-circle mb-3" src="https://randomuser.me/api/portraits/men/19.jpg" alt="Google Profile" width="140" height="140"/>
<h1 className="h3 mb-3 fw-normal">Hey there, Name.</h1>
<a href="#" class="btn btn-primary">Start a new trip</a>
</div>
</div>

            <main role="main" className="container">
      <div className="my-3 p-3 bg-white rounded box-shadow">
        <h6 className="border-bottom border-gray pb-2 mb-0">All Trips</h6>
        <div className="media text-muted pt-3">
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">Origin - Destination</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
        </div>
        <div className="media text-muted pt-3">
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">Origin - Destination</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
        </div>
        <div className="media text-muted pt-3">
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">Origin - Destination</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
        </div>
        <small className="d-block text-right mt-3">
          <a href="#">Placeholder</a>
        </small>
      </div>
    </main>
        </div>

    );
  }

  export default Profile;