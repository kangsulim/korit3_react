import { useState } from "react"

export default function MyForm3() {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleSubmit = (event) => {
    alert(`안녕하세요, ${lastName} ${firstName} 님. Email 주소는 ${email}`);
    event.preventDefault();
  }
  // 나는 이렇게 작성했는데
  // const handleChangeFirstName = (event) => {
  //   setFirstName(event.target.value)
  // }

  // const handleChangeLastName = (event) => {
  //   setLastName(event.target.value);
  // }

  // const handleChangeEmail = (event) => {
  //   setEmail(event.target.value);
  // }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Write Your Profile</label><br /><br />
        {/* 강사님은 이렇게 했음 */}
        <input type="text" name="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)}/><br /><br />
        <input type="text" name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)}/><br /><br />
        <input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/><br /><br />
        <input type="submit" value="제출"/>
      </form>
    </>
  )
}