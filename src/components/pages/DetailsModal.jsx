import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import {Modal } from 'react-bootstrap';
// import body from '../helpers/body'

const DetailsModal = ({isShow, closeModal, modalTitle, flattened, stretch, slim, data}) => {

   
    useEffect(async () => {

        
    }, []);


    // functions
    const closeX = (e) => {
        if(e) e.preventDefault();
        closeModal();
    }

   
    return (

        <>

            <Modal show={isShow} 
                onHide={closeX} 
                size="sm"
                fade={false}
                keyboard={false}
                aria-labelledby="medium-modal"
                centered
                className={`custom-modal ${slim ? slim : ''} ${stretch ? 'stretched' : ''} ${flattened ? 'flat' : ''} lg`}
            >

                <Modal.Body>

                     <div className="d-flex">

                        <div className="dm--dbx ui-full-bg-norm" style={{backgroundImage: 'url("../../../images/assets/img@add-m.jpg")'}}>
                            <div className="dm--d">
                                <div>
                                    {/* <img src="../../../images/assets/i" alt="icon" /> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="dm--body ui-full-bg-norm" style={{backgroundImage: 'url("../../../images/assets/foopat.svg")'}}> */}
                        <div className="dm--body">

                            <div className="d-flex align-items-center mrgb1">
                                <h2 className="brandcc-purple mrgb0 font-matterbold fs-18">
                                    { data.make && data.make } { data.model && data.model } { modalTitle }
                                </h2>
                                {/* <div className="ml-auto">
                                    <Link onClick={(e) => closeX(e)}  className="dot-link md ui-icon-animate">
                                        <span className="">x</span>
                                    </Link>
                                </div> */}
                            </div> 

                            <div className="dm--ct mrgt2">

                                <div className='v-image md ui-relative dflex align-items-center'>
                                    {
                                        data.photo &&
                                        <img src={data.photo} alt="vehicle-photo" className='ui-relative' style={{ top: "-5rem" }} />
                                    }
                                </div>

                                <div className='details ui-line-height mrgt1 mrgb1'>

                                    <div className='d-flex align-items-center'>
                                        
                                        <div>
                                            <div className='d-flex align-items-center mrgt1'>

                                            <h2 className='fs-16 mrgb0 ui-line-height-small'>

                                                <span className='fs-16 onblack'>Make: </span>
                                                <span className='fs-16' style={{ color: '#000' }}>{ data.make && data.make }</span>

                                            </h2>
                                            <h2 className='fs-16 pdl2 mrgb0 ui-line-height-small'>

                                                <span className='fs-16 onblack'>Model: </span>
                                                <span className='fs-16' style={{ color: '#000' }}>{ data.model && data.model }</span>
                                            
                                            </h2>

                                        </div>

                                        <h2 className='mrgb0 ui-line-height-small'>

                                            <span className='fs-18 onblack'>Price: </span>
                                            <span className='fs-18' style={{ color: '#000' }}>€ { data.price && data.price }</span>

                                        </h2>
                                        </div>

                                        <div className='ui-line-height-small mrgt' style={{ marginLeft: 'auto' }}>
                                            <div className='onblack mrgb0 fs-14'>
                                            Colors: &nbsp;
                                                {
                                                    data.colors && data.colors.length > 0 &&
                                                    data.colors.map((c) => 

                                                        <span style={{ color: `${c}`}}>-{ c } &nbsp;</span>

                                                    )
                                                }
                                            </div>

                                            <h3 className='onblack mrgb0 fs-14 mrgt1'>Range: { data.range && data.range.distance + data.range.unit }</h3>
                                            

                                        </div>
                                        
                                    </div>
                                    
                                </div>

                                <div className='d-flex align-items-center mrgt2'>
                                
                                    <Link onClick={(e) => closeX(e) } to="" className='btn md gradient-red onwhite font-weight-bold' style={{ marginLeft: '0' }}>Close</Link>

                                </div>

                            </div>                                  
                        </div>
                    </div> 
                     
                </Modal.Body>

            </Modal>
        
        
        </>

    )

}

export default DetailsModal;