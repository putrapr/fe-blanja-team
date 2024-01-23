import React from "react";

const MyOrder = () => {
  return (
    <section id="my-order">
      <div className="main-content">
        <div className="container">
          <div className="wrapper-card">
            <h3 className="title mb-0">My Order</h3>
            <hr className="mb-3" />
            <ul className="nav mb-3" id="pills-tab-product" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-item-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  All Items
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Not Yet Paid
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-processed-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-processed"
                  type="button"
                  role="tab"
                  aria-controls="pills-processed"
                  aria-selected="true"
                >
                  Packed
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-sent-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-sent"
                  type="button"
                  role="tab"
                  aria-controls="pills-sent"
                  aria-selected="false"
                >
                  Sent
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-completed-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-completed"
                  type="button"
                  role="tab"
                  aria-controls="pills-completed"
                  aria-selected="false"
                >
                  Completed
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Order Cancel
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyOrder;
