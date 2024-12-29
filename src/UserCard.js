function UserCard(props){
  return(
    <div>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>emai:{props.email}</p>
    </div>
  );

}
export default UserCard;