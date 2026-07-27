import PropTypes from "prop-types";
function Greeting(props){
    const wel = <h2 className="bg-green-400 text-white rounded-3xl font-semibold font-thin">Welocome {props.username}</h2>
    const err = <h2 className="bg-red-400 text-white rounded-3xl font-semibold font-thin">Please Login to Continue</h2>

    // if (props.islogedin) {
    //     return wel
    // } else {
    //     return err
    // }

    return(props.islogedin ? wel : err) ;
}

Greeting.prototype = {
    islogedin:PropTypes.bool,
    username:PropTypes.string,
}

Greeting.defaultProps = {
    username:"Guest",
    islogedin:false,
}
export default Greeting;