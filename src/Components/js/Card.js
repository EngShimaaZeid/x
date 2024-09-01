import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";


function App() {
  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5 zain-bold">
        <strong>الأدلة الإرشادية</strong>
      </h4>

      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4 zain-light">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src='./imgs/pc2.png'
                fluid
                className="w-100"
              />
              
            </MDBRipple>
            <MDBCardBody  class="ctitle">
              <a href="#!" className="text-reset">
              <h6 className="card-title mb-3">عنوان الخدمة</h6>
              </a>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4 zain-light">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src='./imgs/pc3.jpeg'
                fluid
                className="w-100"
              />

              
            </MDBRipple>
            <MDBCardBody class="ctitle">
              <a href="#!" className="text-reset">
                <h6 className="card-title mb-3">عنوان الخدمة</h6>
              </a>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

         <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src='./imgs/pc1.jpeg'
                fluid
                className="w-100"
              />

              
            </MDBRipple>
            <MDBCardBody class="ctitle">
              <a href="#!" className="text-reset">
              <h6 className="card-title mb-3 zain-light">عنوان الخدمة</h6>
              </a>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src='./imgs/pc3.jpeg'
                fluid
                className="w-100"
              />
              
            </MDBRipple>
            <MDBCardBody class="ctitle">
              <a href="#!" className="text-reset">
                <h6 className="card-title mb-3 zain-light">عنوان الخدمة  </h6>
              </a>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src='./imgs/pc1.jpeg'
                fluid
                className="w-100"
              />

              
            </MDBRipple>
            <MDBCardBody class="ctitle">
              <a href="#!" className="text-reset">
              <h6 className="card-title mb-3 zain-light">عنوان الخدمة  </h6>
              </a>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

         <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src='./imgs/pc2.png'
                fluid
                className="w-100"
              />

              
            </MDBRipple>
            <MDBCardBody class="ctitle">
              <a href="#!" className="text-reset">
              <h6 className="card-title mb-3 zain-light">عنوان الخدمة  </h6>
              </a>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>



      </MDBContainer>
  );
}

export default App;