function List () {
   const listOfArguments = ['arg1', 'arg2', 'arg3'];
   const listItems = listOfArguments.map((arg) => (
     <li key={arg}>{arg}</li>
   ));
   return (
     <ul>
       {listItems}
     </ul>
   )
}

export default List;