import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";

const CardsDetails = () => {

  const [data, setData] = useState([]);
  console.log(data);

  //catch the id that is passed at image link clicking
  const { id } = useParams();
  console.log(id);

  //to naviget ant=y where
  const history = useNavigate();

  const dispatch = useDispatch();

  //get data from store
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  
  // just find tyhe item of given id and set it to data cariavble
  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    console.log(comparedata);
    setData(comparedata);
  };


  // add data

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };


  useEffect(() => {
    compare();
  }, [id]);



  return (
    <>
      <div className="containet mt-2">
        <h2 className="text-center">Item Details Page</h2>

        <section className="containter mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>

                  <div className="details">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <p>
                              <strong>Resturant:</strong> {ele.rname}
                            </p>

                            <p>
                              <strong>Price:</strong> {ele.price}
                            </p>

                            <p>
                              <strong>Dishes:</strong> {ele.address}
                            </p>

                            <p>
                              <strong>Total:</strong> {ele.price * ele.qnty} Tk.
                            </p>

                            <div className="mt-5 d-flex justify-content-between align-items-center" style={{width: 100,cursor: "pointer",background: "#ddd",color: "#111", }}>

                              <span style={{ fontSize: 24 }}onClick={ele.qnty <= 1? () => dlt(ele.id): () => remove(ele)} >-</span>
                              <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                              <span style={{ fontSize: 24 }}onClick={() => send(ele)}>+</span>

                            </div>

                          </td>
                          <td>
                            <p>
                              <strong>Rating :</strong>{" "}
                              <span style={{background: "green",color: "#fff",padding: "2px 5px",borderRadius: "5px", }}> {ele.rating} ★{" "}</span>
                            </p>
                            <p>
                              <strong>Order Review :</strong>{" "}
                              <span> {ele.somedata}</span>
                            </p>
                            <p>
                              <strong>Remove :</strong>{" "}

                              <span>
                                <i className="fas fa-trash"style={{ color: "red", fontSize: 20, cursor: "pointer", }} onClick={() => dlt(ele.id)}></i>{" "}
                              </span>

                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
