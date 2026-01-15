import PropTypes from 'prop-types'

function Student(props){

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    //fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
    //fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC
    
    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // FRUITS LESS THAN 100 CALORIES
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100); // FRUITS GREATHER THAN OR EQUAL 100 CALORIES

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key = {item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>
                                );   
  
    return(
        <>
            <h3>{category}</h3>
            <ol>{listItems}</ol>
        </>
    );
}
 export default Student

 /*

<div>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Student: {isStudent ? "Yes" : "No"}</p>
</div>

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
*/

/*
List.propTypes = {
    category: PropTypes.string,
    items: PropTypesarrayOf(PropTypes.shape({id: PropTypes.number, 
                                            name: PropTypes.string,
                                            calories: PropTypes.number,                                            
                                            })),
}

List.defaultProps = {
    category: "Category",
    items: [],
}
*/