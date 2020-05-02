import React, { Fragment , useState} from 'react';
import { Link } from 'react-router-dom';
import { Button , ButtonGroup, Row, Col , Card } from 'reactstrap';

 const DetailLamborginiVeneno = ({title6}) =>  {

		return (
			<Fragment>
				<div id="Rental-about" className="animate-box">
		            <div className="container">
		              <div className="row">
		                <div className="col-md-12 col-md-offset-0 text-center Rental-heading">
		                  <h2>Lamborgini Veneno Roadster Details</h2>
		                </div>
		              </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body style={{backgroundColor: "#ff9a9e"}}>
					          <ul className="info text-center">
			                    <li><span className="first-block">Booking Status:</span><span className="second-block"><kbd>{title6}</kbd></span></li>
			                  </ul>
					        </Card>
					      </Col>
					     </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Color:</span><span className="second-block"> Black </span></li>
			                  </ul>
					        </Card>
					      </Col>
					      </div>
					      <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Fuel Type:</span><span className="second-block">Petrol | 5799 CC </span></li>
			                  </ul>
					        </Card>
					      </Col>
					      </div>
					      <div className="row">
					      <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Model:</span><span className="second-block">Sports ZW13</span></li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Number:</span><span className="second-block">AW 32 RT 8990 </span></li>
			                  </ul>
					        </Card>
					      </Col>
					      </div>
					      <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Capacity:</span><span className="second-block">2 Seater</span></li>
			                  </ul>
					        </Card>
					      </Col>
					      </div>
					      <div className="row">
					      <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><span className="first-block">Rent/Day:</span><span className="second-block">130000 Rs / Day</span></li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		              <div className="row">
		                <Col sm="12">
					        <Card body>
					          <ul className="info text-center">
			                    <li><b>Description: </b> The standard safety features in Lamborgini Veneno Roadster include Seat Belt Warning, Airbags, Dual-Stage Airbags, Pretensioning Seatbelts, Four-Point Seatbelt, Middle Rear Head Rest, Middle rear three-point seatbelt, Tyre Pressure Monitoring System (TPMS), Child Seat Anchor Points and Airbags.</li>
			                  </ul>
					        </Card>
					      </Col>
		              </div>
		            </div>
		          </div>
			</Fragment>
		);
}

export default DetailLamborginiVeneno