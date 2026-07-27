import PropTypes from 'prop-types'

function Student(props) {
    return(
        <>
            <div className='border border-gray-400 shadow-2xl m-0 p-4 font-serif font-semibold text-2xl'>
                <p>Student Name: {props.name}</p>
                <p>Student Age: {props.age}</p>
                <p>Student Degree: {props.degree}</p>
            </div>
        </>
    );    
}
Student.prototype ={
    name:PropTypes.string,
    age:PropTypes.number,
    degree:PropTypes.string,
}

Student.defaultProps = {
    name:"Guest",
    age:0,
    degree:"UG/PG"
}
export default Student;