import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap';

const propTypes = {
  count: PropTypes.number.isRequired,
  incrementAction: PropTypes.func.isRequired,
  decrementAction: PropTypes.func.isRequired
}

const CounterComponent = ({
  count, incrementAction, decrementAction
}) => (
    <React.Fragment>
      <div className={'container'}>
        <h2>Redux Counter</h2>
        <Row className={'py-5'}>
        <Col></Col>
        <Col xs={2} className={'d-flex align-items-center'}><Button color={'danger'} className={'mx-auto'} onClick={() => decrementAction()}>Decrease</Button></Col>
        <Col xs={2} className={'d-flex align-items-center'}><h2 className={'mx-auto'}>{count}</h2></Col>
        <Col xs={2} className={'d-flex align-items-center'}><Button color={'success'} className={'mx-auto'} onClick={() => incrementAction()}>Increase</Button></Col>
        <Col></Col>
        </Row>
      </div>
    </React.Fragment>
)

CounterComponent.proptypes = propTypes

export default CounterComponent;
