import "./myOrder.css";

const MyOrder = () => {
  // const order = "";
  const paidOrders = "";
  // const paidOrders = order.filter((item) => item.status === "paid");
  // const onDeliveryOrders = order?.filter(
  //   (item) => item.status === "on delivery"
  // );
  const onDeliveryOrders = "";
  const deliveredOrders = "";
  // const deliveredOrders = order.filter((item) => item.status === "delivered");

  return (
    <section id="my-order">
      <div className="main-content w-75">
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
                  Get Paid
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
                  Proccessed
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
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex="0"
              >
                <div className="container pt-3">
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      {/* <All Items /> */}
                      <table className="table table-hover">
                        <thead className="table-dark text-center ">
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Size</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stocky</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">
                              <img
                                crossOrigin="anonymous"
                                className="photo-table"
                                alt=""
                              />
                            </td>
                            <td></td>
                            <td className="text-center"></td>
                            <td className="text-center"></td>
                            <td className="text-center"></td>

                            <td className="text-center">
                              <button
                                type="button"
                                className="btn btn-success me-1"
                                data-bs-toggle="modal"
                              >
                                <i className="bi bi-pencil-square"></i>
                              </button>

                              <button type="button" className="btn btn-danger">
                                <i className="bi bi-trash3-fill"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Paid */}
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex="0"
              >
                <div className="container pt-3">
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      <table className="table table-hover">
                        <thead className="table-dark text-center ">
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Size</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {paidOrders?.map((item, index) => {
                            return (
                              <>
                                <tr className="text-center" key={index}>
                                  <td>{item?.name_product}</td>
                                  <td>{item?.size}</td>
                                  <td>{item?.price}</td>
                                  <td>{item?.stock}</td>
                                  <td>
                                    <button className="btn btn-danger">
                                      Confirm
                                    </button>
                                  </td>
                                </tr>
                              </>
                            );
                          })} */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processed */}
              <div
                className="tab-pane fade"
                id="pills-processed"
                role="tabpanel"
                aria-labelledby="pills-processed-tab"
                tabIndex="0"
              >
                <div className="container pt-3">
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      <table className="table table-hover">
                        <thead className="table-dark text-center ">
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Size</th>
                            <th scope="col">Price</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {onDeliveryOrders?.map((item, i) => {
                            return (
                              <>
                                <tr className="text-center" key={i}>
                                  <td>{item?.name}</td>
                                  <td>{item?.size}</td>
                                  <td>{item?.price}</td>
                                  <td>{item?.stock}</td>
                                  <td>
                                    <div>{item?.status}</div>
                                  </td>
                                </tr>
                              </>
                            );
                          })} */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sent */}
              <div
                className="tab-pane fade"
                id="pills-sent"
                role="tabpanel"
                aria-labelledby="pills-sent-tab"
                tabIndex="0"
              >
                <div className="container pt-3">
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      <table className="table table-hover">
                        <thead className="table-dark text-center ">
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Size</th>
                            <th scope="col">Price</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Completed */}
              <div
                className="tab-pane fade"
                id="pills-completed"
                role="tabpanel"
                aria-labelledby="pills-completed-tab"
                tabIndex="0"
              >
                <div className="container pt-3">
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      <table className="table table-hover">
                        <thead className="table-dark text-center ">
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Size</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {deliveredOrders?.map((item, index) => {
                            return (
                              <>
                                <tr className="text-center" key={index}>
                                  <td>{item?.name}</td>
                                  <td>{item?.size}</td>
                                  <td>{item?.price}</td>
                                  <td>{item?.stock}</td>
                                  <td>{item?.status}</td>
                                </tr>
                              </>
                            );
                          })} */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Order Cancel */}
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabIndex="0"
              >
                <div className="container pt-3">
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      <table className="table table-hover">
                        <thead className="table-dark text-center ">
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Size</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrder;
