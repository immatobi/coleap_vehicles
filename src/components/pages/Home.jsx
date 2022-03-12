import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import DetailsModal from './DetailsModal'

import VeichleContext from '../../context/veichle/veichleContext'

const Home = (props) => {

    const veichleContext = useContext(VeichleContext);
    
    const [show, setShow] = useState(false);
    const [data, setData] = useState({})
    const [list, setList] = useState([])
    const [type, setType] = useState('price')

    useEffect(() => {

        veichleContext.getVeichles();

    }, [])

    const toggleShow = (e, data) => {

        if(e) {e.preventDefault()}

        setShow(!show);

        if(data){
            setData(data);
        }

        

    }

    const search = (e) => {

        if(type === 'price'){

            let value = e.target.value.toString();
            let result = [];

            result = veichleContext.veichles.filter((d) => {
                return (
                    d.price.toString().search(value) !== -1 
                )
            })

            setList(result);

        }

        if(type === 'distance'){

            let value = e.target.value.toString();
            let result = [];

            result = veichleContext.veichles.filter((d) => {
                return (
                    d.range.distance.toString().search(value) !== -1 
                )
            })

            setList(result);

        }

    }

    return (
        <>

            <section className='section ui-wrapper-large'>

                <div className='container'>
                
                    <div className='row'>

                        <div className='col-md-9 mx-auto'>


                            {
                                veichleContext.loading &&
                                <>
                                
                                    <div className='empty-box md' style={{backgroundColor: ''}}>

                                        <div className="ui-text-center">
                                            <div className="row">
                                                <div className="col-md-10 mx-auto">
                                                    <span className="loader md white"></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                
                                </>
                            }

                            {
                                !veichleContext.loading && veichleContext.veichles && veichleContext.veichles.length > 0 &&
                                <>

                                    <div onClick={(e) => { console.log(list) }} className='d-flex align-items-center mrgb2'>

                                        <h1 className='onwhite fs-20 font-weight-bold'>Coleap Veichles</h1>
                                    
                                        <div className='ml-auto'>

                                            <form onSubmit={(e) => { e.preventDefault() }}>

                                                <div className='d-flex align-items-center'>

                                                    <select onChange={(e) => setType(e.target.value)}  className='form-control lg custom-select'>

                                                        <option value="price" selected>Sort By</option>
                                                        <option value="price">Price</option>
                                                        <option value="distance">Distance</option>

                                                    </select>

                                                    <div className='pdl1'></div>

                                                    <input onChange={(e) => search(e)} placeholder={ type === 'price' ? 'Enter price' : 'Enter distance' } className='sort-input form-control lg fs-15 onblack' type="text" />
                                                
                                                </div>

                                               

                                            </form>
                                            
                                        </div>
                                    
                                    </div>
                                
                                    <div className='row car-list'>

                                        {
                                            list && list.length > 0 &&
                                            list.map((v, i) => 

                                                <>
                                                    <div className='col-md-6'>

                                                        <div className='car-box'>

                                                            <div className='v-image'>
                                                                <img src={v.photo} alt="vehicle-photo" />
                                                            </div>

                                                            <div className='v-content'>

                                                                <div className='d-flex align-items-center'>

                                                                    <div className='details ui-line-height'>

                                                                        <div className='d-flex align-items-center mrgt1'>

                                                                            <h2 className='fs-16 mrgb0 ui-line-height-small'>

                                                                                <p className='fs-16 onwhite mb-1'>Make: </p>
                                                                                <span className='fs-16' style={{ color: '#a0baf4' }}>{ v.make }</span>

                                                                            </h2>
                                                                            <h2 className='fs-16 pdl2 mrgb0 ui-line-height-small'>

                                                                                <p className='fs-16 onwhite mb-1'>Model: </p>
                                                                                <span className='fs-16' style={{ color: '#a0baf4' }}>{ v.model }</span>
                                                                            
                                                                            </h2>

                                                                        </div>

                                                                        <h2 className='mrgb0 ui-line-height-small'>

                                                                            <span className='fs-18 onwhite'>Price: </span>
                                                                            <span className='fs-18' style={{ color: '#fff' }}>€ { v.price }</span>

                                                                        </h2>
                                                                        
                                                                    </div>
                                                                
                                                                    

                                                                    <Link onClick={(e) => toggleShow(e, v) } to="" className='btn md gradient-red onwhite font-weight-bold' style={{ marginLeft: 'auto' }}>Details</Link>
                                                                
                                                                </div>
                                                            
                                                            </div>

                                                        </div>

                                                        
                                                        
                                                    </div>
                                                </>
                                            
                                            )
                                           
                                        }
                                    
                                        {
                                            list && list.length <= 0 &&
                                            veichleContext.veichles.map((v, i) => 

                                                <>
                                                    <div className='col-md-6'>

                                                        <div className='car-box'>

                                                            <div className='v-image'>
                                                                <img src={v.photo} alt="vehicle-photo" />
                                                            </div>

                                                            <div className='v-content'>

                                                                <div className='d-flex align-items-center'>

                                                                    <div className='details ui-line-height'>

                                                                        <div className='d-flex align-items-center mrgt1'>

                                                                            <h2 className='fs-16 mrgb0 ui-line-height-small'>

                                                                                <p className='fs-16 onwhite mb-1'>Make: </p>
                                                                                <span className='fs-16' style={{ color: '#a0baf4' }}>{ v.make }</span>

                                                                            </h2>
                                                                            <h2 className='fs-16 pdl2 mrgb0 ui-line-height-small'>

                                                                                <p className='fs-16 onwhite mb-1'>Model: </p>
                                                                                <span className='fs-16' style={{ color: '#a0baf4' }}>{ v.model }</span>
                                                                            
                                                                            </h2>

                                                                        </div>

                                                                        <h2 className='mrgb0 ui-line-height-small'>

                                                                            <span className='fs-18 onwhite'>Price: </span>
                                                                            <span className='fs-18' style={{ color: '#fff' }}>€ { v.price }</span>

                                                                        </h2>
                                                                        
                                                                    </div>
                                                                
                                                                    

                                                                    <Link onClick={(e) => toggleShow(e, v) } to="" className='btn md gradient-red onwhite font-weight-bold' style={{ marginLeft: 'auto' }}>Details</Link>
                                                                
                                                                </div>
                                                            
                                                            </div>

                                                        </div>

                                                        
                                                        
                                                    </div>
                                                </>
                                            
                                            )
                                           
                                        }
                                    
                                    </div>
                                
                                </>
                            }
                            
                            
                        </div>
                        
                        
                    </div>
                
                </div>

            </section>

            <DetailsModal 
                isShow={show}
                closeModal={toggleShow}
                modalTitle={'Details'}
                flattened={true}
                stretch=""
                slim="slim-lg"
                data={data}
            />
        
        </>
    )

}

export default Home;