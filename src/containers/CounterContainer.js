import { connect } from 'react-redux';
import { incrementAction, decrementAction } from '../actions/CounterActions';
import CounterComponent from '../components/CounterComponent';



const mapStateToProps = (state) => {
  return {
    count: state.count
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementAction: () => {
      dispatch(incrementAction())
    },
    decrementAction: () => {
      dispatch(decrementAction())
    },
  } 
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent)

export default CounterContainer;