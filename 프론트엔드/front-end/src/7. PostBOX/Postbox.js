
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamAPI from '../0. API/TeamAPI';
import PostModal from '../99. Modal/PostModal';
import yong from '../images/아이셔용.png';
import Cookies from 'universal-cookie';
import Moment from "react-moment";
import Pagination from "./Pagination";
import './Postbox.css'
import '../font/Jalnan.ttf';

const Postbox = () => {

  const cookies = new Cookies();
  const localId = cookies.get('rememberId');
  const location = useNavigate();

  /* 변수(useState) 선언 */
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);

  
  const [limit, setLimit] = useState(10); // 페이지당 게시물 수
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const offset = (page - 1) * limit; // 각 페이지별 첫 게시물의 위치 계산
  console.log("offset : " + offset);

  // ▼ 체크된 쪽지를 담을 배열
  const [checkedPosts, setCheckedPosts] = useState([]);
  const [postSender, setPostSender] = useState("");
  const [postSenderId, setPostSenderId] = useState("");
  const [content, setContent] = useState("");
  const [modalOn, setModalOn] = useState(false);
  const [goPagination, setGoPagination] = useState(false);

  /* 
  최초 통신(useEffect) */
  useEffect(() => {

    if(localId === undefined) location("/login");
    // ▲ 로그인 안 되어 있으면 로그인 페이지로 

    const postData = async () => {
      setLoading(true);

      try {
        const response = await TeamAPI.postbox(localId);
        if (response.status == 200) {
          console.log("통신 성공(200)");
          console.log(response.data);
          console.log(response.data[0].postSenderId);
          setPostList(response.data);
          // console.log("보낸 사람[0] : " + response.data[0].postSender);
          // console.log("내용[0] : " + response.data[0].content);
        }
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
      setGoPagination(true);
    };
    postData();
  }, []);

  /* 
  쪽지 자세히 보기 */
  const openModal = () => { setModalOn(true); };
  const closeModal = () => { setModalOn(false); };

  const onClickPost = (postSendrId, postSender, content) => {
    console.log("보낸 사람(postSender) : " + postSender);
    setPostSenderId(postSendrId);
    setPostSender(postSender);

    console.log("내용(content) : " + content);
    setContent(content);

    setModalOn(true);
  }

  /* 
  체크박스 단일 선택 */
  const handleSingleCheck = (checked, num) => {
    console.log(num + "번 쪽지가 선택 되었나요? : " + checked);

    if (checked) {
      setCheckedPosts(fix => [...fix, num]); // 체크된 쪽지 번호를 checkedPosts 배열에 추가
      console.log("checkedPosts : " + checkedPosts.toString());
    } else {
      setCheckedPosts(checkedPosts.filter((e) => e !== num)); // 체크된 쪽지 번호를 checkedPosts 배열에서 삭제
      console.log("checkedPosts : " + checkedPosts.toString());
    }
  };

  /* 
  체크박스 전체 선택 */
  const handleAllCheck = (checked) => {
    console.log("전체 선택 되었나요? : " + checked);

    if (checked) {
      const postNumArray = []; // postNum 을 담을 빈 배열(postNumArray) 생성
      postList.forEach((e) => postNumArray.push(e.postNum)); // postList 를 하나씩 돌면서 postNumArray에 postNum을 추가
      console.log("postNumArray : " + postNumArray); // 모든 쪽지의 postNum 을 담은 배열로 checkedPosts 상태 업데이트
      setCheckedPosts(postNumArray);
    }
    else {
      setCheckedPosts([]); // checkedPosts 를 빈 배열로 상태 업데이트
    }
  }

  /* 
  쪽지 삭제 */
  const onClickDelete = async () => {
    console.log("\n\n삭제 버튼 눌렀어요.");

    console.log("checkedPosts : " + checkedPosts); // 5,6
    console.log("typeof(checkedPosts) : " + typeof (checkedPosts));

    if (checkedPosts.length < 1) {
      alert('삭제할 쪽지를 선택해주세요~^^');
    } else {
      try {
        const response = await TeamAPI.postDelete(checkedPosts);
        if (response.status == 200) {
          console.log("통신 성공(200)");
          alert("선택한 쪽지가 삭제되었습니다.");
          window.location.reload();
        } else {
          console.log("통신 실패 : " + response.status);
          alert("통신 실패 : " + response.status);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  if (loading) {
    return (
      <>
        <img src={yong} alt="아이셔용" />
        <div>대기 중...</div>
      </>
    );
  }

  return ( 
    <div className='Container'>
      <PostModal open={modalOn} close={closeModal} sender={postSender} content={content} senderId={postSenderId} />
      <div className='Postbox-Container'>

        {/* header 영역 */}
        <div className='Postbox-header'>
          <h1>{localId} 님의 쪽지함</h1>
        </div>

        <button className='delete' onClick={onClickDelete} disabled={postList.length === 0}>삭제</button>

        {/* main 영역 */}
        <div className='Postbox-main'>
          <table className='Postbox-table'>
            {/* thead 의 시작 */}
            <thead>
              <tr>
                <th>
                  <input type='checkbox' className='Postbox-table checkbox'
                    // ▼ checked 는 true 또는 false
                    onChange={(e) => handleAllCheck(e.target.checked)}
                    // ▼ 전체 쪽지 수와 체크된 쪽지의 수가 다르면 false(전체 선택 해제)
                    checked={checkedPosts.length === postList.length ? true : false} />
                </th>
                <th className='Postbox-table postSender'>보낸 사람</th>
                <th className='Postbox-table content'>내용</th>
                <th className='Postbox-table postTime'>시간</th>
              </tr>
            </thead>

            {/* tbody 의 시작 */}
            <tbody>
              {postList.length === 0 
              ? 
              <tr>
                <td colSpan='4'>쪽지가 없습니다.</td>
              </tr>
              // slice(2, 4) : 인덱스 2부터 4-1(=3)까지
              : (postList.slice(offset, offset + limit).map(post => (
                <tr key={post.postNum}>
                  <td className='Postbox-table-tbody-td-checkbox'>
                    <input type='checkbox'
                      onChange={(e) => handleSingleCheck(e.target.checked, post.postNum)}
                      // ▼ checkedPosts 에 해당 쪽지의 postNum 이 있으면 true, 아니면 false
                      checked={checkedPosts.includes(post.postNum) ? true : false} />
                  </td>
                  <td className='Postbox-table-tbody-td-postSender'>{post.postSender}</td>
                  <td className='Postbox-table-tbody-td-content'
                    onClick={() => onClickPost(post.postSenderId, post.postSender, post.content)}>
                    <div className='Postbox-table-tbody-td-content-div'>
                      {post.content}
                    </div>
                  </td>
                  <td className='Postbox-table-tbody-td-postTime'>
                    <Moment format='YY-MM-DD HH:mm'>{post.postTime}</Moment>
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>

        {/* footer 영역 */}
        <div className='Postbox-footer'>
        {goPagination ?
          <Pagination
            total={postList.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        : null}
        </div>
      </div>
    </div>
  );
}
export default Postbox;