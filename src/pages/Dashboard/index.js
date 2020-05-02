import React, { Fragment , useState , useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import M from 'materialize-css';
import DetailsHondaCivic from './DetailHondaCivic'
import Detailverna from './Detailverna'
import DetailLamborginiAventador from './DetailLamborginiAventador'
import DetailAudiR8 from './DetailAudiR8'
import DetailHondaCity from './DetailHondaCity'
import DetailLamborginiVeneno from './DetailLamborginiVeneno'
import { Button , Card, CardTitle, CardText, Row, Col , InputGroupText,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter , Label } from 'reactstrap';
import '../../assets/Rental/css/animate.css'
import '../../assets/Rental/css/style.css'

const Dashboard = (props) =>  {

   	const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");

    const [title1,setTitle1] = useState("Available");
    const [title2,setTitle2] = useState("Available");
    const [title3,setTitle3] = useState("Available");
    const [title4,setTitle4] = useState("Available");
    const [title5,setTitle5] = useState("Available");
    const [title6,setTitle6] = useState("Available");

    const [buttontitle1,setButtonTitle1] = useState("false");
    const [buttontitle2,setButtonTitle2] = useState("false");
    const [buttontitle3,setButtonTitle3] = useState("false");
    const [buttontitle4,setButtonTitle4] = useState("false");
    const [buttontitle5,setButtonTitle5] = useState("false");
    const [buttontitle6,setButtonTitle6] = useState("false");

	const [modal1, setModal1] = useState(false);
  	const toggle1 = () => setModal1(!modal1);

	const [modal2, setModal2] = useState(false);
  	const toggle2 = () => setModal2(!modal2); 

  	const [modal3, setModal3] = useState(false);
  	const toggle3 = () => setModal3(!modal3);

	const [modal4, setModal4] = useState(false);
  	const toggle4 = () => setModal4(!modal4);

  	const [modal5, setModal5] = useState(false);
  	const toggle5 = () => setModal5(!modal5);

	const [modal6, setModal6] = useState(false);
  	const toggle6 = () => setModal6(!modal6); 

  	const [modal7, setModal7] = useState(false);
  	const toggle7 = () => setModal7(!modal7);

	const [modal8, setModal8] = useState(false);
  	const toggle8 = () => setModal8(!modal8); 

  	const [modal9, setModal9] = useState(false);
  	const toggle9 = () => setModal9(!modal9);

	const [modal10, setModal10] = useState(false);
  	const toggle10 = () => setModal10(!modal10); 

  	const [modal11, setModal11] = useState(false);
  	const toggle11 = () => setModal11(!modal11);

	const [modal12, setModal12] = useState(false);
  	const toggle12 = () => setModal12(!modal12); 

  	const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 8),
      key: 'selection'
    }
  	]);


  	const PostData1 = (props) => {
  		if (!/\S/.test(name)) {
		  M.toast({html: "Name is Required", classes: "#c62828 red darken-3"})
		  return
		}
		if (!/\S/.test(number)) {
		  M.toast({html: "Number is Required"})
		  return
		}
		if (!/^\d+$/.test(number)) {
			M.toast({html: "Number must a Digits"})
		  	return
		}
		if (!/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits"})
		  return
		}
		if (!/^[0-9]{10}$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits only"})
		  return
		}
		if (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(state)) {
			M.toast({html: "Date Must be Provided"})
		  	return
		}
		M.toast({html: 'Booked Successfully -> Note : You Cannot Book a Car Twice', completeCallback: function(){
			alert('Booked Honda Civic -> Press ok to Continue')
			changeTitle1()
			M.toast({html: "Thank you for Booking Honda Civic for 6000 Rs / Day"})
		}})
	}

	const PostData2 = (props) => {
  		if (!/\S/.test(name)) {
		  M.toast({html: "Name is Required"})
		  return
		}
		if (!/\S/.test(number)) {
		  M.toast({html: "Number is Required"})
		  return
		}
		if (!/^\d+$/.test(number)) {
			M.toast({html: "Number must a Digits"})
		  	return
		}
		if (!/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits"})
		  return
		}
		if (!/^[0-9]{10}$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits only"})
		  return
		}
		if (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(state)) {
			M.toast({html: "Date Must be Provided"})
		  	return
		}
		M.toast({html: 'Booked Successfully -> Note : You Cannot Book a Car Twice', completeCallback: function(){
			alert('Booked Hyundai Verna -> Press ok to Continue')
			changeTitle2()
			M.toast({html: "Thank you for Booking Hyundai Verna for 6500 Rs / Day"})
		}})
	}

	const PostData3 = (props) => {
  		if (!/\S/.test(name)) {
		  M.toast({html: "Name is Required"})
		  return
		}
		if (!/\S/.test(number)) {
		  M.toast({html: "Number is Required"})
		  return
		}
		if (!/^\d+$/.test(number)) {
			M.toast({html: "Number must a Digits"})
		  	return
		}
		if (!/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits"})
		  return
		}
		if (!/^[0-9]{10}$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits only"})
		  return
		}
		if (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(state)) {
			M.toast({html: "Date Must be Provided"})
		  	return
		}
		M.toast({html: 'Booked Successfully -> Note : You Cannot Book a Car Twice', completeCallback: function(){
			alert('Booked Lamborgini Aventador -> Press ok to Continue')
			changeTitle3()
			M.toast({html: "Thank you for Booking Lamborgini Aventador for 60000 Rs / Day"})
		}})
	}

	const PostData4 = (props) => {
  		if (!/\S/.test(name)) {
		  M.toast({html: "Name is Required"})
		  return
		}
		if (!/\S/.test(number)) {
		  M.toast({html: "Number is Required"})
		  return
		}
		if (!/^\d+$/.test(number)) {
			M.toast({html: "Number must a Digits"})
		  	return
		}
		if (!/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits"})
		  return
		}
		if (!/^[0-9]{10}$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits only"})
		  return
		}
		if (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(state)) {
			M.toast({html: "Date Must be Provided"})
		  	return
		}
		M.toast({html: 'Booked Successfully -> Note : You Cannot Book a Car Twice', completeCallback: function(){
			alert('Booked Audi R8 -> Press ok to Continue')
			changeTitle4()
			M.toast({html: "Thank you for Booking Audi R8 for 95000 Rs / Day"})
		}})
	}

	const PostData5 = (props) => {
  		if (!/\S/.test(name)) {
		  M.toast({html: "Name is Required"})
		  return
		}
		if (!/\S/.test(number)) {
		  M.toast({html: "Number is Required"})
		  return
		}
		if (!/^\d+$/.test(number)) {
			M.toast({html: "Number must a Digits"})
		  	return
		}
		if (!/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits"})
		  return
		}
		if (!/^[0-9]{10}$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits only"})
		  return
		}
		if (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(state)) {
			M.toast({html: "Date Must be Provided"})
		  	return
		}
		M.toast({html: 'Booked Successfully -> Note : You Cannot Book a Car Twice', completeCallback: function(){
			alert('Booked Honda City Prime -> Press ok to Continue')
			changeTitle5()
			M.toast({html: "Thank you for Booking Honda City Prime for 12000 Rs / Day"})
		}})
	}

	const PostData6 = (props) => {
  		if (!/\S/.test(name)) {
		  M.toast({html: "Name is Required"})
		  return
		}
		if (!/\S/.test(number)) {
		  M.toast({html: "Number is Required"})
		  return
		}
		if (!/^\d+$/.test(number)) {
			M.toast({html: "Number must a Digits"})
		  	return
		}
		if (!/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits"})
		  return
		}
		if (!/^[0-9]{10}$/.test(number)) {
		  M.toast({html: "Number must be 10 Digits only"})
		  return
		}
		if (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(state)) {
			M.toast({html: "Date Must be Provided"})
		  	return
		}
		M.toast({html: 'Booked Successfully -> Note : You Cannot Book a Car Twice', completeCallback: function(){
			alert('Booked Lamborgini Veneno Roadster -> Press ok to Continue')
			changeTitle6()
			M.toast({html: "Thank you for Booking Lamborgini Veneno Roadster for 130000 Rs / Day"})
		}})
	}

    function changeTitle1() {
  		setTitle1("unavailable");
  		setButtonTitle1("");
	};

   function changeTitle2() {
      setTitle2("unavailable");
      setButtonTitle2("");
   };

    function changeTitle3()  {
      setTitle3("unavailable");
      setButtonTitle3("");
   };

    function changeTitle4() {
      setTitle4("unavailable");
      setButtonTitle4("");
   };

    function changeTitle5() {
      setTitle5("unavailable");
      setButtonTitle5("");
   };

    function changeTitle6() {
      setTitle6("unavailable");
      setButtonTitle6("");
   };

   	return (
			<Fragment>
				<div id="Rental-about" className="animate-box">
		            <div className="container">
		              <div className="row">
		                <div className="col-md-12 col-md-offset-0 text-center Rental-heading">
		                  <h2>Car Rental System</h2>
		                </div>
		              </div>
		              <div className="row">
		                <Col sm="4">
					        <Card body>
					          <CardTitle><b>Honda Civic</b></CardTitle>
					          <ul className="info">
			                    <li><span className="first-block">Rent/Day:</span><span className="second-block">6500 Rs/Day  </span></li>
			                    <li><span className="first-block">Booking:</span><span className="second-block"><kbd>{title1}</kbd></span></li>
			                  </ul>
			                  <Button onClick={toggle1} disabled={!buttontitle1}>Book Car</Button> 
					          <Button onClick={toggle2}>Details</Button>
					        </Card>
					      </Col>
		                <Col sm="4">
					        <Card body>
					          <CardTitle><b>Hyundai Verna</b></CardTitle>
					          <ul className="info">
			                    <li><span className="first-block">Rent/Day:</span><span className="second-block">6000 Rs/Day </span></li>
			                    <li><span className="first-block">Booking:</span><span className="second-block"><kbd>{title2}</kbd></span></li>
			                  </ul>
			                  <Button onClick={toggle3} disabled={!buttontitle2}>Book  a Car</Button> 
					          <Button onClick={toggle4}>Details</Button>
					        </Card>
					      </Col>
					      <Col sm="4">
					        <Card body>
					          <CardTitle><b>Lamborgini Aventador</b></CardTitle>
					          <ul className="info">
			                    <li><span className="first-block">Rent/Day:</span><span className="second-block">60000 Rs/Day </span></li>
			                    <li><span className="first-block">Booking:</span><span className="second-block"><kbd>{title3}</kbd></span></li>
			                  </ul>
			                  <Button onClick={toggle5} disabled={!buttontitle3}>Book Car</Button> 
					          <Button onClick={toggle6}>Details</Button>
					        </Card>
					      </Col>
		              </div>
		              <br />
		              <div className="row">
		                <Col sm="4">
					        <Card body>
					          <CardTitle><b>Audi R8</b></CardTitle>
					          <ul className="info">
			                    <li><span className="first-block">Rent/Day:</span><span className="second-block">95000 Rs/Day </span></li>
			                    <li><span className="first-block">Booking:</span><span className="second-block"><kbd>{title4}</kbd></span></li>
			                  </ul>
			                  <Button onClick={toggle7} disabled={!buttontitle4}>Book Car</Button> 
					          <Button onClick={toggle8}>Details</Button>
					        </Card>
					      </Col>
		                <Col sm="4">
					        <Card body>
					          <CardTitle><b>Honda City Prime</b></CardTitle>
					          <ul className="info">
			                    <li><span className="first-block">Rent/Day:</span><span className="second-block">12000 Rs/Day </span></li>
			                    <li><span className="first-block">Booking:</span><span className="second-block"><kbd>{title5}</kbd></span></li>
			                  </ul>
			                  <Button onClick={toggle9} disabled={!buttontitle5}>Book Car</Button> 
					          <Button onClick={toggle10}>Details</Button>
					        </Card>
					      </Col>
					      <Col sm="4">
					        <Card body>
					          <CardTitle><b>Lamborgini Veneno Roadster</b></CardTitle>
					          <ul className="info">
			                    <li><span className="first-block">Rent/Day:</span><span className="second-block">130000 Rs/Day </span></li>
			                    <li><span className="first-block">Booking:</span><span className="second-block"><kbd>{title6}</kbd></span></li>
			                  </ul>
			                  <Button onClick={toggle11} disabled={!buttontitle6}>Book Car</Button> 
					          <Button onClick={toggle12}>Details</Button>
					        </Card>
					      </Col>
		              </div>
		            </div>
		          </div>
		          
		          <Modal zIndex={2000} centered isOpen={modal1} toggle={toggle1}>
			        <div>
			          <Card className="bg-secondary shadow-none border-0">
			            <div className="card-body px-lg-5 py-lg-5">
			              <div className="text-center text-muted mb-4">
			                <small>Provide Details for Booking</small>
			              </div>

			              <form>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Name" type="name" size="13" value={name} onChange={(e) => setName(e.target.value)} />
			                  </div>
			                </div>
			                <FormGroup>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Number" type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
			                  </div>
			                </div>
			                </FormGroup>
			               	<FormGroup>
			               		<DateRange
								  editableDateInputs={true}
								  onChange={item => setState([item.selection])}
								  moveRangeOnFirstSelection={false}
								  ranges={state}
								/>
			               	</FormGroup>
			                <div className="text-center">
			                  <Button color="second" className="mt-4" onClick={() => PostData1()}>
			                    Confirm Booking
			                  </Button>
			                </div>
			              </form>
			            </div>
			          </Card>
			        </div>
			      </Modal>
			    <Modal zIndex={2000} centered isOpen={modal2} toggle={toggle2}>
			    	<DetailsHondaCivic title1={title1} />
				</Modal>
				<Modal zIndex={2000} centered isOpen={modal3} toggle={toggle3}>
			        <div>
			          <Card className="bg-secondary shadow-none border-0">
			            <div className="card-body px-lg-5 py-lg-5">
			              <div className="text-center text-muted mb-4">
			                <small>Provide Details for Booking</small>
			              </div>

			              <form>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Name" type="name" size="13" value={name} onChange={(e) => setName(e.target.value)} />
			                  </div>
			                </div>
			                <FormGroup>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Number" type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
			                  </div>
			                </div>
			                </FormGroup>
			               	<FormGroup>
			               		<DateRange
								  editableDateInputs={true}
								  onChange={item => setState([item.selection])}
								  moveRangeOnFirstSelection={false}
								  ranges={state}
								/>
			               	</FormGroup>
			                <div className="text-center">
			                  <Button color="second" className="mt-4" onClick={() => PostData2()}>
			                    Confirm Booking
			                  </Button>
			                </div>
			              </form>
			            </div>
			          </Card>
			        </div>
			      </Modal>
			    <Modal zIndex={2000} centered isOpen={modal4} toggle={toggle4}>
			    	<Detailverna title2={title2} />
				</Modal>
				<Modal zIndex={2000} centered isOpen={modal5} toggle={toggle5}>
			        <div>
			          <Card className="bg-secondary shadow-none border-0">
			            <div className="card-body px-lg-5 py-lg-5">
			              <div className="text-center text-muted mb-4">
			                <small>Provide Details for Booking</small>
			              </div>

			              <form>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Name" type="name" size="13" value={name} onChange={(e) => setName(e.target.value)} />
			                  </div>
			                </div>
			                <FormGroup>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Number" type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
			                  </div>
			                </div>
			                </FormGroup>
			               	<FormGroup>
			               		<DateRange
								  editableDateInputs={true}
								  onChange={item => setState([item.selection])}
								  moveRangeOnFirstSelection={false}
								  ranges={state}
								/>
			               	</FormGroup>
			                <div className="text-center">
			                  <Button color="second" className="mt-4" onClick={() => PostData3()}>
			                    Confirm Booking
			                  </Button>
			                </div>
			              </form>
			            </div>
			          </Card>
			        </div>
			      </Modal>
			    <Modal zIndex={2000} centered isOpen={modal6} toggle={toggle6}>
			    	<DetailLamborginiAventador title3={title3} />
				</Modal>
				<Modal zIndex={2000} centered isOpen={modal7} toggle={toggle7}>
			        <div>
			          <Card className="bg-secondary shadow-none border-0">
			            <div className="card-body px-lg-5 py-lg-5">
			              <div className="text-center text-muted mb-4">
			                <small>Provide Details for Booking</small>
			              </div>

			              <form>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Name" type="name" size="13" value={name} onChange={(e) => setName(e.target.value)} />
			                  </div>
			                </div>
			                <FormGroup>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Number" type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
			                  </div>
			                </div>
			                </FormGroup>
			               	<FormGroup>
			               		<DateRange
								  editableDateInputs={true}
								  onChange={item => setState([item.selection])}
								  moveRangeOnFirstSelection={false}
								  ranges={state}
								/>
			               	</FormGroup>
			                <div className="text-center">
			                  <Button color="second" className="mt-4" onClick={() => PostData4()}>
			                    Confirm Booking
			                  </Button>
			                </div>
			              </form>
			            </div>
			          </Card>
			        </div>
			      </Modal>
			    <Modal zIndex={2000} centered isOpen={modal8} toggle={toggle8}>
			    	<DetailAudiR8 title4={title4} />
				</Modal>
				<Modal zIndex={2000} centered isOpen={modal9} toggle={toggle9}>
			        <div>
			          <Card className="bg-secondary shadow-none border-0">
			            <div className="card-body px-lg-5 py-lg-5">
			              <div className="text-center text-muted mb-4">
			                <small>Provide Details for Booking</small>
			              </div>

			              <form>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Name" type="name" size="13" value={name} onChange={(e) => setName(e.target.value)} />
			                  </div>
			                </div>
			                <FormGroup>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Number" type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
			                  </div>
			                </div>
			                </FormGroup>
			               	<FormGroup>
			               		<DateRange
								  editableDateInputs={true}
								  onChange={item => setState([item.selection])}
								  moveRangeOnFirstSelection={false}
								  ranges={state}
								/>
			               	</FormGroup>
			                <div className="text-center">
			                  <Button color="second" className="mt-4" onClick={() => PostData5()}>
			                    Confirm Booking
			                  </Button>
			                </div>
			              </form>
			            </div>
			          </Card>
			        </div>
			      </Modal>
			    <Modal zIndex={2000} centered isOpen={modal10} toggle={toggle10}>
			    	<DetailHondaCity title5={title5} />
				</Modal>
				<Modal zIndex={2000} centered isOpen={modal11} toggle={toggle11}>
			        <div>
			          <Card className="bg-secondary shadow-none border-0">
			            <div className="card-body px-lg-5 py-lg-5">
			              <div className="text-center text-muted mb-4">
			                <small>Provide Details for Booking</small>
			              </div>

			              <form>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Name" type="name" size="13" value={name} onChange={(e) => setName(e.target.value)} />
			                  </div>
			                </div>
			                <FormGroup>
			                <div className="form-group mb-3">
			                  <div className="input-group input-group-alternative">
			                    <Input placeholder="Number" type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
			                  </div>
			                </div>
			                </FormGroup>
			               	<FormGroup>
			               		<DateRange
								  editableDateInputs={true}
								  onChange={item => setState([item.selection])}
								  moveRangeOnFirstSelection={false}
								  ranges={state}
								/>
			               	</FormGroup>
			                <div className="text-center">
			                  <Button color="second" className="mt-4" onClick={() => PostData6()}>
			                    Confirm Booking
			                  </Button>
			                </div>
			              </form>
			            </div>
			          </Card>
			        </div>
			      </Modal>
			    <Modal zIndex={2000} centered isOpen={modal12} toggle={toggle12}>
			    	<DetailLamborginiVeneno title6={title6} />
				</Modal>

			</Fragment>
		);
};

export default Dashboard