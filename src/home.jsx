import React, {useState} from 'react'
import Modal from 'react-modal'
import DotLink from './images/dotLink.svg';
import {IoIosArrowRoundDown} from 'react-icons/io';
import Disperson from './images/disperson.png';
import {FcStart} from 'react-icons/fc';
import Drawing from './images/drawing.jfif';
import {FcPicture} from 'react-icons/fc';
import Purchase from './images/purchase.jfif';
import Pdff from './images/pdff.png'
import Specification from './images/specification.png'
import Cross from './images/cross.png'
import Close from './images/close.png'


export default function Home(onSave) {
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
    <div className='header'>
        <span className='documents'>
        <h3><p>DOCUMENTS</p></h3>
        </span>
        <div>
            <img className='dot' src={DotLink} alt='' />
        </div>
    </div>
    <hr></hr>
    <div className='shared'>
    <div>
        <p className='second-header'><h3>SHARED</h3></p>
    </div>
    <span className='download'>
        <p onClick={openModal}><h3>DOWNLOAD ALL</h3></p>
    </span>
    </div>
    <hr></hr>
    <div className='files'>
    <div>
        <p>Files</p>
    </div>
    <div>
        <p>Name <IoIosArrowRoundDown /> </p>
    </div>
    </div>
    <section className='main'>
    <div onClick={openModal} className='dispersion'> <Modal
        style={{
          overlay: {
            position: "fixed",
            width: "27vw",
            height: "1vh",
            top: "0%",
            left: "0%",
            right: "0%",
            bottom: "0%",
            backgroundColor: "#00000078",
            zIndex: 100,
          },
        }}
        className="modal"
        isOpen={modal}
        shouldCloseOnOverlayclick={true}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <body>
            <form onSubmit={onSubmit}>
                <div onClick={closeModal}>
                <img className='closee'src={Close} alt='' />
                </div>
                <div>
                <p><h3> View Secure Document</h3></p>
                </div>
                <label><h5> Email Address</h5></label>
                <input className='emailSearch' type='email' value={email} onChange={onChangeEmail}placeholder='Enter email'/>
                <label><h5>Email Password</h5></label>
                <input className='password' type='password' value={password} onChange={onChangePassword}placeholder='Email Password' required />
                <div>
                   <p> <input type='checkbox'/> Stay Signed In </p>
                </div>
                <div>
                    <button className='downloads' onClick={openModal}>Download</button>
                </div>
                <span>
                    <p className='access'> Can't access your account?</p>
                </span>
            </form>
        </body>
        </Modal>
       <img src={Disperson} alt='' />
       <hr></hr>
    <span>
        <p><FcStart /> FW47_Dipersion.mov</p>
    </span>
    </div>
    <div onClick={openModal} className='drawing'>
        <img src={Drawing} alt='' />
        <hr></hr>
        <div>
            <p><FcPicture /> Drawings_Sketches.png</p>
        </div>
    </div>
    <div onClick={openModal} className='purhase'>
        <img src={Purchase} alt='' />
        <hr></hr>
        <span>
           <p><img className='pdf' src={Pdff} alt='' /> Purchase_Order.pdf</p> 
        </span>
    </div>
    <div onClick={openModal} className='specificatin'>
        <img src={Specification} alt='' />
        <hr></hr>
        <span className='xlsx'>
            <p><img className='specification'src={Cross} alt='' /> Specification.xlsx</p>
        </span>
    </div>
    </section>
    </div>

    
  )
}
