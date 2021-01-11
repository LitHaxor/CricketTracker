import React from 'react';

const HomeMain= ()=>{
    return(
        <div className="container-fluid">
             <div class="jumbotron">
               <div className="row">
                    <h1 class="display-4 col col-md-6">Cricket Tracker!</h1>
               </div>
                <p class="lead">This is a simple app that uses React Redux.</p>
                <hr class="my-4"/>
                <p>To use this app click on launch  app.</p>
                <p class="lead justify-content-center">
                    <a class="btn btn-outline-success btn-lg" href="/TrackerApps" role="button">Launch APP</a>
                </p>
            </div>
        </div>
    )
}

export default HomeMain;