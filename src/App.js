import { connect } from "react-redux"
import Counter from "./counter"

// Map Redux state to component props
/*
This function subscribes to all store updates and gets called 
when anything in our store changes. 
What it returns is an object that contains the store data you wish 
to transmit as props to a component. 
*/
function mapStateToProps(state) {
    // returns the props that will be passed to the react component
    return {   
        countValue: state.count
    };
}

// Actions
var incrementAction = { type: "INCREMENT" };
var decrementAction = { type: "DECREMENT" };

//Map Redux actions to component props

/*
The really interesting stuff happens with mapDispatchToProps. 
We return an object containing the name of the two functions our component 
can call to dispatch a change to our store. The increaseCount function fires
 off a dispatch with an action type of increase. The decreaseCount function 
 fires off a dispatch with an action type of decrease. If we look at the 
 reducer we added a few moments ago, you can see how either of these 
 function calls will affect the value of count we are storing in our store.
 */
function mapDispatchToProps(dispatch) {
    return {
        incrementCount: function() {
            //Call the store dispatch method, passing the action to it.
            //This runs the reducer and returns the new state to the store.
            return dispatch(incrementAction); 
        },
        decrementCount: function() {
            return dispatch(decrementAction);
        }
    }
}

// The HOC
var connectedComponent = connect(
    mapStateToProps, mapDispatchToProps
)(Counter);

export default connectedComponent;