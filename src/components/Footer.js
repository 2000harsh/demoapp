import React from "react";
function Footer()
{
    return(
        <>
        <hr/>
            <div class="row">
             <div class="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        {/* <h5>Section</h5> */}
        <ul class="nav flex-column">
          {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li> */}
        </ul>
      </div>



            <div class="col-md-5 offset-md-1 mb-3">
            <form>
            <h5>Subscribe to our bulletin</h5>
            <p>Stay Connected With Us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
            </form>
            </div>
            <center><p>&copy; 2023 DeCapp, Inc. All rights reserved.</p></center>
</div>

        </>
    )
}

export default Footer;