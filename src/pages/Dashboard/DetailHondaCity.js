import React, { Fragment , useState} from 'react';
import { Link } from 'react-router-dom';
import { Button , ButtonGroup, Row, Col , Card } from 'reactstrap';

 const DetailHondaCity = ({title5}) =>  {

		return (
			<Fragment>
				<div id="Rental-about" className="animate-box">
		            <div className="container">
		              <div className="row">
		                <div className="col-md-12 col-md-offset-0 text-center Rental-heading">
		                  <h2>Honda City Prime Details</h2>
		                </div>
		              </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body style={{backgroundColor: "#ff9a9e"}}>
					          <ul className="info text-center">
			                    <li><span className="first-block">Booking Status:</span><span className="second-block"><kbd>{title5}</kbd></span></li>
			                  </ul>
					        </Card>
					      </Col>
					     </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Color:</span><span className="second-block"> Grey</span></li>
			                  </ul>
					        </Card>
					      </Col>
					      </div>
					      <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Fuel Type:</span><span className="second-block">Petrol | 1799 CC </span></li>
			                  </ul>
					        </Card>
					      </Col>
					      </div>
					      <div className="row">
					      <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Model:</span><span className="second-block">Sedan TR76</span></li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Number:</span><span className="second-block">FD 54 RE 1243 </span></li>
			                  </ul>
					        </Card>
					      </Col>
					      </div>
					      <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Capacity:</span><span className="second-block">4 Seater</span></li>
			                  </ul>
					        </Card>
					      </Col>
					      </div>
					      <div className="row">
					      <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Rent/Day:</span><span className="second-block">12000 Rs / Day</span></li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><b>Description: </b> The standard safety features in Honda City Prime include Seat Belt Warning, Airbags, Dual-Stage Airbags, Pretensioning Seatbelts, Four-Point Seatbelt, Middle Rear Head Rest, Middle rear three-point seatbelt, Tyre Pressure Monitoring System (TPMS), Child Seat Anchor Points and Airbags.</li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		            </div>
		          </div>
			</Fragment>
		);
}

export default DetailHondaCity