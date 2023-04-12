import React from "react";
import "./checkcss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const logged = localStorage.getItem("loggedin");

  const navigate = useNavigate();
  const check = () => {
    alert("Order placed successfully!!!!")
    navigate("/")
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Billing address</h4>
        <form class="form-control" onSubmit={check}>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                //value=""
                required
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                //value=""
                required
              />
            </div>
          </div>
          <div class="mb-3">
              <label for="lastName">Phone</label>
              <input
                type="number"
                class="form-control"
                id="number"
                placeholder=""
                //value=""
                required
              />
            </div>
          <div class="mb-3">
            <label for="email">
              Email <span class="text-muted">(Optional)</span>
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="address">Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
              required
            />
          </div>
          <div class="mb-3">
            <label for="address2">
              Address 2 <span class="text-muted">(Optional)</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="Apartment or suite"
            />
          </div>
          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="country">Country</label>
              <select class="custom-select d-block w-100" id="country" required>
                <option value="">Choose...</option>
                <option>India</option>
              </select>
            </div>
            <div class="col-md-4 mb-3">
              <label for="state">State</label>
              <select class="custom-select d-block w-100" id="state" required>
                <option value="">Choose...</option>
                <option>Karnataka</option>
                <option>Kerala</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Zip</label>
              <input
                type="text"
                class="form-control"
                id="zip"
                placeholder=""
                required
              />
            </div>
          </div>
          <button class="Btn" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
  );
};
