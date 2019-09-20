import React from 'react';
import Appbutton from './Appbutton';

function BootFluid() {
    return (
        <div className="App">
            <div className="container" >
                <div className="row">
                    <div id="col1" className="col-lg-3"></div>
                    <div id="col2" className="col-lg-6">
                        <Appbutton />
                    </div>
                    <div id="col3" className="col-lg-3"></div>
                </div>
            </div>
        </div>
    )

} export default BootFluid;