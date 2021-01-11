import React,{useState} from 'react';
import {connect} from 'react-redux';
import {incrementRun,DecrementRun} from '../Services/Actions/CounterRuns';
import { incrementBall, decrementBall}  from '../Services/Actions/CountBalls';
import {decrementWicket,incrementWicket} from '../Services/Actions/CountWicket';
import {decrementOver,incrementOver} from '../Services/Actions/countOver';
import {lastRun} from '../Services/Actions/lastRun';



const TrackerApp =({incrementRun,last ,DecrementRun, incrementBall, decrementBall,lastRun, decrementWicket, incrementWicket, decrementOver, incrementOver,over, balls, wicket, runs,props })=> {
  
    const [isWide, setWide] = useState(false);
    const [isNo, setNo] = useState(false);
    const [isWicked, setIsWicked] = useState(false);
    let [stk] = useState([]);
    const [target, setTarget] = useState(0);
    let [require] = useState();
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
       if(run === 'NB')
       {
           setNo(true); setWide(false);
           incrementRun(1);
           stk.push(run);
           return;
       } 
       if(run === 'wd'){
            setWide(true); setNo(false);
            incrementRun(1);
            stk.push(run);
            return;
       }
       if(run === 'w')
       {
        setIsWicked(true); setNo(false);setWide(false);
         if(isNo !== true)
            incrementWicket(1);
         overUp();
         stk.push(run);
         return;
       }
       if( run === 'rv')
       {
         if(balls === 0 && over ===0)
            return;
         if(isWicked)
         {
             decrementWicket(1);
             if(isNo || isWide)
            {
                decrementBall(0);
            }
            else{
                decrementBall(1);
             }
            return;
         }
         if(isNo || isWide)
         {
             decrementBall(0);
         }
         else{
             decrementBall(1);
         }
         if(!isNaN(parseInt(stk[stk.length -1])))
            DecrementRun(stk[stk.length-1]);
         stk.pop();
         return;
       }
       stk.push(run);
       setNo(false); setWide(false);setIsWicked(false);
       lastRun(run);
       incrementRun(run);
       overUp();
       console.log(stk);
    }

    function second(){
        props.inningns ="2nd innings";
        setTarget(runs+1);
        decrementOver(over);
        decrementBall(balls);
        DecrementRun(runs);
        for(let i=0; i<= stk.length ; i++)
            stk.pop();
        stk.pop();
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
                            <button className="btn btn-outline-danger rounded-circle" onClick={()=>{handleMatch('w')}}>W</button>
                        </div>
    
                    </div>
                    <hr className="my-4"/>
                    <div className="card-body">
                        <div className="alert alert-info d-flex justify-content-left flex-wrap">
                            {
                                stk.map((s)=>
                                (
                                    <div className="badge badge-info margin-1p">{s}</div>
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
                            <button className="btn btn-danger" onClick={()=>second()}>Finish Innings</button>
                        </div>
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
                        <h5 className="text-center">Over: {over},{balls}</h5>
                        <p className="text-center" >{target-runs} runs of {require}</p>
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
                            <button className="btn btn-outline-danger rounded-circle" onClick={()=>{handleMatch('w')}}>W</button>
                        </div>
    
                    </div>
                    <hr className="my-4"/>
                    <div className="card-body">
                        <div className="alert alert-info d-flex justify-content-left flex-wrap">
                            {
                                stk.map((s)=>
                                (
                                    <div className="badge badge-info margin-1p">{s}</div>
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
                            <button className="btn btn-danger" onClick={()=>second()}>Finish Innings</button>
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
    props: ownProps
})

export default connect(mapStateToProps, {incrementRun,DecrementRun, incrementBall,lastRun, decrementBall, decrementWicket, incrementWicket, decrementOver, incrementOver})(TrackerApp);