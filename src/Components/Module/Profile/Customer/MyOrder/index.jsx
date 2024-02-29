import React from "react";
import svgNoOrder from '../../../../../assets/img/no-order.svg'
import "./my_order.css";

const MyOrder = () => {
  return (
    <section id="my-order">
      <div className="main-content">
        <div className="container">
          <div className="wrapper-card bg-white">
            <h3 className="title mb-0">My Order</h3>
            <hr className="mb-3" />
            {/* <ul className="nav mb-3" id="pills-tab-product" role="tablist">
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
            </ul> */}
            <table
              className="table"
              style={{ height: 400, border: "1px solid #D4D4D4" }}>
              <thead>
                <tr style={{ width: "100%", height: 60 }}>
                  <th className="th">Tanggal</th>
                  <th className="th">Order id</th>
                  <th className="th">Nama barang</th>
                  <th className="th">Jumlah</th>
                  <th className="th">Harga</th>
                  <th className="th">Metode Pembayaran</th>
                </tr>
              </thead>
              <tbody>
                {/* {dataOrderItems.length > 0 ? (
                  dataOrderItems.map((item, index) => {
                    return (
                      <tr key={index} style={{ fontSize: 12 }}>
                        <td style={{ padding: 10 }}>
                          {formatDateDDMMYY(item?.order_data)}
                        </td>
                        <td style={{ padding: 10 }}>{item?.product_name}</td>
                        <td style={{ padding: 10 }}>{item?.quantity_unit}</td>
                        <td style={{ padding: 10 }}>$ {item?.price_unit}</td>
                        <td style={{ padding: 10 }}>{item?.order_id}</td>
                        <td style={{ padding: 10 }}>{item?.payment_method}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6">
                      <div className="no-data">
                        <img src={svgNoProduct} alt="no-order" />
                      </div>
                    </td>
                  </tr>
                )} */}
{/* display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 340px; */}
                <tr>
                  <td colSpan="6">
                    <div className="no-data">
                      <img src={svgNoOrder} alt="no-order" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyOrder;
