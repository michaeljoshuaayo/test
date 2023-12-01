import React from 'react';
import { Container, Button, Navbar } from 'react-bootstrap';
const NavigationVar = () => {
  return (
    <>
      <Navbar style={{ height: '90px' }} expand="lg" className="bg-primary">
        <Container>
          
              
              <Button variant="primary" className="btn-lg"><b>Product Management</b></Button>
              <Button variant="primary" className="btn-lg"><b>Transaction Management</b></Button>
              <Button variant="primary" className="btn-lg"><b>Stocks Management</b></Button>
              <Button variant="primary" className="btn-lg"><b>Transaction Report</b></Button>
              
            
        </Container>
      </Navbar>
      
    </>
  );
};

export default NavigationVar;