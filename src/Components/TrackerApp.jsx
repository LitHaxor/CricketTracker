import React,{useState} from 'react';
import {connect} from 'react-redux';
import {incrementRun,DecrementRun} from '../Services/Actions/CounterRuns';
import { incrementBall, decrementBall}  from '../Services/Actions/CountBalls';
import {decrementWicket,incrementWicket} from '../Services/Actions/CountWicket';
import {decrementOver,incrementOver} from '../Services/Actions/countOver';
import {lastRun} from '../Services/Actions/lastRun';
import { Modal } from "react-bootstrap";
import OverModal from './OverModal';



const TrackerApp =({incrementRun,last ,DecrementRun, incrementBall, decrementBall, decrementWicket, incrementWicket, decrementOver, incrementOver,over, balls, wicket, runs,props })=> {
  
    let [stk,setStk] = useState([]);
    const [target, setTarget] = useState(0);
    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function overUp(){
        if(balls === 5)
        {
            incrementOver(1);
            decrementBall(6);
        }
        incrementBall(1);
    }

    function handleMatch(run)
    {
        
       switch (run) {
           case 'NB':
               incrementRun(1);
               stk.push('NB');
               break;
            case 'wd':
                incrementRun(1);
                stk.push('wd');
                break;
            case 'W':
                incrementWicket(1);
                stk.push('W');
                overUp();
                break;
            case 'rv':
                
                switch (stk[stk.length -1]) {
                    case 'NB':
                        DecrementRun(1);
                        stk.pop();
                        break;
                    case 'wd':
                        DecrementRun(1);
                        stk.pop();
                        break;
                    case 'W':
                        decrementWicket(1);
                        if(balls === 0 && over !== 0){
                            decrementOver(1);
                            incrementBall(6);
                            stk.pop(); break;
                        }
                        decrementBall(1);
                        stk.pop();
                        break;
                    default:
                        if((balls === 0 &&  over ===0) || (!stk[stk.length -1 ] === 'NB' && !stk[stk.length -1 ] === 'wd') )
                           { 
                               break;
                            }
                        DecrementRun(stk[stk.length -1]);
                        if(balls === 0 && over !== 0){
                            decrementOver(1);
                            incrementBall(5);
                            stk.pop(); break;
                        }
                        decrementBall(1);
                        stk.pop();
                        break;
                }
                break;
           default:
               incrementRun(run);
               overUp();
               stk.push(run);
               break;
       }
    }

    function second(){
        props.inningns ="2nd innings";
        setTarget(runs+1);
        decrementOver(over);
        decrementBall(balls);
        DecrementRun(runs);
        setStk([]);
        
        
    }

    if(target === 0){
        return(
        
            <div className="flex-row container">
                   
                <div className="card">
                    <div className="card-header bg-primary text-center"><h1 className="text-white">{props.inningns}</h1></div>
                    <div className="card-body">
                        <h3 className="text-center">RUNS: {runs}/{wicket}</h3>
                        <h5 className="text-center">Over: {over},{balls}({last})</h5>
                    </div>
                    <div className="card-body d-flex justify-content-around">
                        <div className="button-group">
                            <button className="btn btn-primary rounded-circle" onClick={()=>handleMatch('wd')}>WD</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-danger rounded-circle" onClick={()=>handleMatch('NB')}>NB</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-secondary rounded-circle" onClick={()=>{handleMatch(0)}} >0</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-primary rounded-circle" onClick={()=>{handleMatch(1)}}>1</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-success rounded-circle" onClick={()=>handleMatch(2)}>2</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-warning rounded-circle" onClick={()=>handleMatch(3)}>3</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-info rounded-circle" onClick={()=>handleMatch(4)}>4</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-dark rounded-circle" onClick={()=>handleMatch(5)}>5</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-primary rounded-circle" onClick={()=>handleMatch(6)}>6</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-outline-danger rounded-circle" onClick={()=>{handleMatch('W')}}>W</button>
                        </div>
    
                    </div>
                    <hr className="my-4"/>
                    <div className="card-body">
                        <div className="alert alert-info d-flex justify-content-left flex-wrap">
                            {
                                stk.map((s)=>
                                (
                                    <div className={`badge badge-${s} margin-1p`}>{s}</div>
                                )
                                )
                            }
                           
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="card-body d-flex justify-content-around flex-wrap">
                        <div className="button-group">
                            <button className="btn btn-primary" onClick ={()=> handleMatch('rv',0,0)}>Review Decision</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-danger" onClick={()=>handleShow()}>Finish Innings</button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Finish innings</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                  <h3 className="text-left text-danger"> Sure you want to finish the Match?</h3>

                                </Modal.Body>
                                <Modal.Footer>
                                    <button className="btn btn-info" onClick={()=>{handleClose()}}>No</button>
                                    <button className="btn btn-danger" onClick={()=> {handleClose();second();}}>Yes</button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <OverModal />
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
        
            <div className="flex-row container">
                <div className="card">
                    <div className="card-header bg-danger text-center"><h1 className="text-white">{props.inningns}</h1></div>
                    <div className="card-body">
                        <h2 className="text-danger text-center">Target: {target}</h2>
                        <h3 className="text-center">RUNS: {runs}/{wicket}</h3>
                        <h5 className="text-center">{`Over: ${over},${balls} (${last}) `}</h5>
                        <h6 className="text-center alert alert-danger" ><span className="text-info">{target -runs} runs</span>  to win from <span className="text-success">{(last*6)- ((over*6)+ balls) } balls</span></h6>
                    </div>
                    <div className="card-body d-flex justify-content-around">
                        <div className="button-group">
                            <button className="btn btn-primary rounded-circle" onClick={()=>handleMatch('wd')}>WD</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-danger rounded-circle" onClick={()=>handleMatch('NB')}>NB</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-secondary rounded-circle" onClick={()=>{handleMatch(0)}} >0</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-primary rounded-circle" onClick={()=>{handleMatch(1)}}>1</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-success rounded-circle" onClick={()=>handleMatch(2)}>2</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-warning rounded-circle" onClick={()=>handleMatch(3)}>3</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-info rounded-circle" onClick={()=>handleMatch(4)}>4</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-dark rounded-circle" onClick={()=>handleMatch(5)}>5</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-primary rounded-circle" onClick={()=>handleMatch(6)}>6</button>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-outline-danger rounded-circle" onClick={()=>{handleMatch('W')}}>W</button>
                        </div>
    
                    </div>
                    <hr className="my-4"/>
                    <div className="card-body">
                        <div className="alert alert-info d-flex justify-content-left flex-wrap">
                            {
                                stk.map((s)=>
                                (
                                    <div className={`badge badge-${s} margin-1p`}>{s}</div>
                                )
                                )
                            }
                           
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="card-body d-flex justify-content-around flex-wrap">
                        <div className="button-group">
                            <button className="btn btn-primary" onClick ={()=> handleMatch('rv',0,0)}>Review Decesion</button>
                        </div>

                        <div className="button-group">
                            <a href="/TrackerApps" role="button" className="btn btn-success" >Finish Match</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>({
    runs: state.RunsReducer.runs,
    balls: state.BallsReducer.balls,
    over: state.OverReducer.over,
    wicket: state.WicketReducer.wicket,
    last: state.LastRunReducer.last,
    props: ownProps
})

export default connect(mapStateToProps, {incrementRun,DecrementRun, incrementBall,lastRun, decrementBall, decrementWicket, incrementWicket, decrementOver, incrementOver})(TrackerApp);