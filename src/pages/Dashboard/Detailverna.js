import React, { Fragment , useState} from 'react';
import { Link } from 'react-router-dom';
import { Button , ButtonGroup, Row, Col , Card } from 'reactstrap';

 const Detailverna = ({title2}) =>  {

		return (
			<Fragment>
				<div id="Rental-about" className="animate-box">
		            <div className="container">
		              <div className="row">
		                <div className="col-md-12 col-md-offset-0 text-center Rental-heading">
		                  <h2>Hyundai Verna Details</h2>
		                </div>
		              </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body style={{backgroundColor: "#ff9a9e"}}>
					          <ul className="info text-center">
			                    <li><span className="first-block">Booking Status:</span><span className="second-block"><kbd>{title2}</kbd></span></li>
			                  </ul>
					        </Card>
					      </Col>
					     </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Color:</span><span className="second-block"> Black</span></li>
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
			                    <li><span className="first-block">Model:</span><span className="second-block">Sedan EXT-L</span></li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Number:</span><span className="second-block">TD 31 Gh 8765 </span></li>
			                  </ul>
					        </Card>
					      </Col>
					      </div>
					      <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Capacity:</span><span className="second-block">5 Seater</span></li>
			                  </ul>
					        </Card>
					      </Col>
					      </div>
					      <div className="row">
					      <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Rent/Day:</span><span className="second-block">6000 Rs / Day</span></li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><b>Description: </b> The standard safety features in Verna include Seat Belt Warning, Airbags, Dual-Stage Airbags, Pretensioning Seatbelts, Four-Point Seatbelt, Middle Rear Head Rest, Middle rear three-point seatbelt, Tyre Pressure Monitoring System (TPMS), Child Seat Anchor Points and Airbags.</li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		            </div>
		          </div>
			</Fragment>
		);
}

export default Detailverna