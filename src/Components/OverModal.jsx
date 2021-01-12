import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {lastRun} from '../Services/Actions/lastRun';
const OverModal = ({lastRun, last}) =>{
    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOver = () =>{
        lastRun(document.getElementById('over').value);
    }
    return(
        <div>
       <div className="btn btn-outline-danger" onClick={()=> handleShow()}>
           Set Over
       </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Over:</span>
                    </div>
                    <input type="text" className="form-control" id="over"/>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-success" onClick={()=> {handleClose(); handleOver();}}>Done</button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

const mapStateToProps = (state) =>({
    last: state.LastRunReducer.last
})

export default connect(mapStateToProps,{lastRun})(OverModal);