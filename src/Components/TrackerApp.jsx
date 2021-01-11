import React from 'react';
import {connect} from 'react-redux';
import {incrementRun,DecrementRun} from '../Services/Actions/CounterRuns';
import { incrementBall, decrementBall}  from '../Services/Actions/CountBalls';
import {decrementWicket,incrementWicket} from '../Services/Actions/CountWicket';
import {decrementOver,incrementOver} from '../Services/Actions/countOver';



const TrackerApp =({incrementRun,DecrementRun, incrementBall, decrementBall, decrementWicket, incrementWicket, decrementOver, incrementOver,over, balls, wicket, runs })=> {
    
    function overUp(balls){
        if(balls === 5)
        {
            incrementOver(1);
            decrementBall(6);
        }
        incrementBall(1);
        return balls;
    }
    return(
        <div className="flex-row container">
            <div className="card">
                <div className="card-header bg-primary text-center"><h1 className="text-white">1st Innings</h1></div>
                <div className="card-body">
                    <h3 className="text-center">RUNS: {runs}/{wicket}</h3>
                    <h5 className="text-center">Over: {over},{balls}</h5>
                </div>
                <div className="card-body d-flex justify-content-around">
                    <div className="button-group">
                        <button className="btn btn-primary rounded-circle" onClick={()=>incrementRun(1) }>WD</button>
                    </div>
                    <div className="button-group">
                        <button className="btn btn-danger rounded-circle" onClick={()=>{incrementRun(1)}}>NB</button>
                    </div>
                    <div className="button-group">
                        <button className="btn btn-secondary rounded-circle" onClick={()=>{incrementRun(0) ; overUp(balls);}} >0</button>
                    </div>
                    <div className="button-group">
                        <button className="btn btn-primary rounded-circle" onClick={()=>{incrementRun(1);overUp(balls);}}>1</button>
                    </div>
                    <div className="button-group">
                        <button className="btn btn-success rounded-circle" onClick={()=>{incrementRun(2);overUp(balls);}}>2</button>
                    </div>
                    <div className="button-group">
                        <button className="btn btn-warning rounded-circle" onClick={()=>{incrementRun(3);overUp(balls);}}>3</button>
                    </div>
                    <div className="button-group">
                        <button className="btn btn-info rounded-circle" onClick={()=>{incrementRun(4);overUp(balls);}}>4</button>
                    </div>
                    <div className="button-group">
                        <button className="btn btn-dark rounded-circle" onClick={()=>{incrementRun(5);overUp(balls);}}>5</button>
                    </div>
                    <div className="button-group">
                        <button className="btn btn-primary rounded-circle" onClick={()=>{incrementRun(6);overUp(balls);}}>6</button>
                    </div>
                    <div className="button-group">
                        <button className="btn btn-outline-danger rounded-circle" onClick={()=>{incrementWicket(1);overUp(balls)}}>W</button>
                    </div>

                </div>
                <hr className="my-4"/>
                <div className="card-body d-flex justify-content-around">
                    <div className="button-group">
                        <button className="btn btn-primary">Review Decesion</button>
                    </div>
                    <div className="button-group">
                        <a href="/TrackerApps" className="btn btn-danger">Finish Innings</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    runs: state.RunsReducer.runs,
    balls: state.BallsReducer.balls,
    over: state.OverReducer.over,
    wicket: state.WicketReducer.wicket

})

export default connect(mapStateToProps, {incrementRun,DecrementRun, incrementBall, decrementBall, decrementWicket, incrementWicket, decrementOver, incrementOver})(TrackerApp);