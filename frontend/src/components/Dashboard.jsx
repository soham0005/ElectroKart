import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, ListGroup } from 'react-bootstrap';
import { useState } from 'react';

const Dashboard = () => {
    const [day,setDay] = useState(new Date().toLocaleDateString())
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);
    
    
  return (
    <Container fluid className="mt-4">
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <h1>Welcome back, John Doe!</h1>
          <p>{day} | {time}</p>
        </Col>
      </Row>

      {/* Recent Orders */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Your Recent Orders</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#001</td>
                    <td>2024-10-08</td>
                    <td>Shipped</td>
                    <td>$500</td>
                    <td><Button variant="info" size="sm">Track Order</Button></td>
                  </tr>
                  <tr>
                    <td>#002</td>
                    <td>2024-10-07</td>
                    <td>Processing</td>
                    <td>$200</td>
                    <td><Button variant="info" size="sm">Track Order</Button></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recommended Products */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Recommended for You</Card.Title>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>Product 1</Card.Title>
                      <Card.Text>$99.99</Card.Text>
                      <Button variant="primary">View Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>Product 2</Card.Title>
                      <Card.Text>$89.99</Card.Text>
                      <Button variant="primary">View Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>Product 3</Card.Title>
                      <Card.Text>$59.99</Card.Text>
                      <Button variant="primary">View Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Account Details */}
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Your Account Details</Card.Title>
              <ListGroup>
                <ListGroup.Item>Email: johndoe@example.com</ListGroup.Item>
                <ListGroup.Item>Phone: +1234567890</ListGroup.Item>
                <ListGroup.Item>Address: 123 Main St, New York, NY</ListGroup.Item>
              </ListGroup>
              <Button variant="secondary" className="mt-3">Edit Profile</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Payment Methods</Card.Title>
              <ListGroup>
                <ListGroup.Item>Visa ending in 1234</ListGroup.Item>
                <ListGroup.Item>MasterCard ending in 5678</ListGroup.Item>
              </ListGroup>
              <Button variant="secondary" className="mt-3">Manage Payments</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Wishlist */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Your Wishlist</Card.Title>
              <ListGroup>
                <ListGroup.Item>Product 1 - $99.99 <Button variant="primary" size="sm" className="float-end">Buy Now</Button></ListGroup.Item>
                <ListGroup.Item>Product 2 - $89.99 <Button variant="primary" size="sm" className="float-end">Buy Now</Button></ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Notifications */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Notifications</Card.Title>
              <ListGroup>
                <ListGroup.Item>Order #001 has been shipped</ListGroup.Item>
                <ListGroup.Item>Discount code available for your next purchase</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Support */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Need Help?</Card.Title>
              <p>Contact our support team or visit our <a href="/help">FAQ page</a>.</p>
              <Button variant="danger">Contact Support</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer */}
      <Row className="mt-4">
        <Col>
          <p className="text-center">© 2024 Your eCommerce App</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;