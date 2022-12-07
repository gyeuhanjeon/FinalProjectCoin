import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

/*
<Pagination/> 컴포넌트는 <Posts/> 컴포넌트로부터 총 게시물 수(total)와 페이지 당 게시물 수(limit) 그리고 현재 페이지 번호(page)를 prop으로 받는데요.
위에서 배운 페이지네이션 알고리즘에 따라 필요한 페이지의 개수(numPages)를 계산한 후 이 페이지의 개수만큼 루프를 돌면서 페이지 번호 버튼을 출력합니다.
페이지 번호 버튼에 클릭 이벤트가 발생하면 prop으로 넘어온 setPage() 함수를 호출하여 부모인 <Posts/> 컴포넌트의 page 상태가 변경되도록 합니다. 그러면 <Posts/> 컴포넌트는 새로운 페이지 번호에 해당하는 게시물 범위를 계산하여 다시 화면을 렌터링할 것입니다.
*/

function Pagination_({ total, limit, page, setPage }) {
  const totalPages = Math.ceil(total / limit); // 총 페이지 수 >> 13 나누기 10 => 2
  console.log("numPages : " + totalPages);

  console.log("전체 쪽지 수(total) : " + total);
  console.log("한 페이지에 보여줄 쪽지 수(limit) : " + limit); // 고정 10
  console.log("현재 page : " + page); // 고정 1
  
  let pageCount; // 화면에 보여줄 페이지 수
  if(totalPages > 5) pageCount = 5;
  else pageCount = totalPages;

  const pageGroup = Math.ceil(page / pageCount); // 페이지 그룹


  let lastNum = pageGroup * pageCount // 화면에 보여질 마지막 페이지 번호
  if (lastNum > total) {
    lastNum = total
  }
  let firstNum = lastNum - (pageCount - 1) // 화면에 보여질 첫번째 페이지 번호

  const next = lastNum + 1 // 6
  const before = firstNum - 1 // 0

  const onClickBeforeIcon =() => {
    if(page === 1) return;
    setPage(page - 1);
  }

  const onClickNextIcon =() => {
    if(page === totalPages) return;
    setPage(page + 1);
  }

  return (
    <div className="Postbox-Pagination">
      <span className="move before" onClick={onClickBeforeIcon}>
        <NavigateBeforeIcon />
      </span>

      <li onClick={() => setPage(firstNum)}
        aria-current={page === firstNum ? "page" : null}
      >
        {firstNum}
      </li>

      {Array(pageCount-1).fill().map((_, i) => {
        if(i <= 2) {
          return (
            <span className="move">
              <li
                key={i+1+firstNum} 
                onClick={() => {setPage(firstNum+1+i)}}
                aria-current={page === firstNum+1+i ? "page" : null}>
                {firstNum+1+i}
              </li>
            </span>
          )
        } else if(i >= 3) {
          return (
            <span className="move">
              <li
                key ={i+1}
                onClick={() => setPage(lastNum)}
                aria-current={page === lastNum ? "page" : null}>
                {lastNum}
              </li>
            </span>
          )  
        }
      })}

      <span className="move next" onClick={e => onClickNextIcon(e.target)}>
        <NavigateNextIcon />
      </span>
    </div>
  );
}



export default Pagination_;
// arr.fill() : 배열에다가 채운다. 채울 값을, n 번 인덱스부터, n길이까지
// arr.map() : x => x*2
// Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.
