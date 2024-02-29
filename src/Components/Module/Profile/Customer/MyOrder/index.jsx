import React, { useEffect, useState } from "react";
import svgNoOrder from '../../../../../assets/img/no-order.svg'
import "./my_order.css";
import { useSelector, useDispatch } from 'react-redux'
import { Orders } from '../../../../../config/redux/action/OrderAction.js'
import moment from 'moment'

const MyOrder = () => {
  const dispatch = useDispatch()
  const { order } = useSelector((state) => state.order)

  const [isLoading, setIsLoading] = useState(true)
  
  const getOrder = async () => {
    try {
      // setIsLoading(true)
      await dispatch(Orders())
      setIsLoading(false)
    } catch (err) { /* empty */ }
  }

  useEffect(() => {    
    getOrder()
  }, [])

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
              style={{ border: "1px solid #D4D4D4" }}>
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
                {!isLoading ? (
                  order.length > 0 ?
                    order.map((item, index) => {
                      return (
                        <tr key={index} style={{ fontSize: 12 }}>
                          <td style={{ padding: 10 }}>
                            {moment(item?.order_date).format("DD-MM-YYYY")}
                          </td>
                          <td style={{ padding: 10 }}>{item?.id}</td>
                          <td style={{ padding: 10 }}>{item?.id_product}</td>
                          <td style={{ padding: 10 }}>{item?.quantity}</td>
                          <td style={{ padding: 10 }}>Rp {item?.price}</td>                        
                          <td style={{ padding: 10 }}>{item?.payment_method}</td>
                        </tr>
                      );
                    }) :
                    <tr>
                      <td colSpan="6">
                        <div className="no-data">
                          <img src={svgNoOrder} alt="no-order" />
                        </div>
                      </td>
                    </tr>
                ) : (
                  <tr>
                    <td colSpan="6">
                      <div className="no-data">
                        <img src={svgNoOrder} alt="no-order" />
                      </div>
                    </td>
                  </tr>
                )}

                {/* <tr>
                  <td colSpan="6">
                    <div className="no-data">
                      <img src={svgNoOrder} alt="no-order" />
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyOrder;
