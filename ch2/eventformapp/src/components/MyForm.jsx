export default function MyForm() {
  // 폼이 제출될 때 호출되는 함수
  const handleSubmit = event => {
    event.preventDefault();     // 기본 작동 방지
    // 폼 제출을 방지하는 메서드...? -> 이런 메서드가 있다는 것만 알고 넘어가자
    alert('폼이 제출되었습니다.')
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="제출" />
        <br />
      </form>
    </>
  )
}