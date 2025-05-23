import { useState } from "react"

export default function MyForm3() {
  const [ user, setUser] = useState({
    lastName: '',
    firstName: '',
    email: ''
  });

  const handleSubmit = (event) => {
    alert(`안녕하세요, ${user.lastName} ${user.firstName} 님. Email 주소는 ${user.email}`);
    event.preventDefault();
  }

  const handleChange = (event) => {
    // 풀이 1번 <- 나의 풀이
    // const { name, value} = event.target;
    // setUser((prevUser) => ({
    //   ...prevUser,
    //   [name]: value
    // }));

    // 풀이 2번 <- 강사님 풀이
    setUser( {...user, [event.target.name]: event.target.value} ); // 대괄호는 키를 불러내는 방식, 이게 더 편해보이네용
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Write Your Profile</label><br /><br />
        <input type="text" name="lastName" value={user.lastName} onChange={handleChange}/><br /><br />
        <input type="text" name="firstName" value={user.firstName} onChange={handleChange}/><br /><br />
        <input type="text" name="email" value={user.email} onChange={handleChange}/><br /><br />
        <input type="submit" value="제출"/>
      </form>
    </>
  )
}