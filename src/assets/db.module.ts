const data=[
  {
    "name": "John",
    "email": "John@gmail.com",
    "id": 1
  },
  {
    "name": "Bob",
    "email": "Bob@gmail.com",
    "id": 2
  },
  {
    "name": "Alice",
    "email": "Alice@gmail.com",
    "id": 3
  },
  {
    "name": "disha",
    "email": "disha@gmail.com",
    "id": 4
  },
  {
    "name": "user1",
    "email": "user1@gmail.com",
    "id": 5
  },
  {
    "name": "disha123",
    "email": "disha123@gmail.com",
    "id": 7
  },
  {
    "name": "Disha",
    "email": "Disha@gmail.com",
    "id": 8
  }
  ]

  
  let d;
  export const updatedb = ()=>{
    localStorage.setItem("user",JSON.stringify(data))
    d=localStorage.getItem("user")
    if(d!=null)
    return JSON.parse(d);
  }
  
  const users=d;
  export default users