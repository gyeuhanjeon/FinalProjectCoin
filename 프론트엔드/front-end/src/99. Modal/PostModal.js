import React from "react";
import TeamAPI from '../0. API/TeamAPI';
import Cookies from 'universal-cookie';
import './ChangePwdModal.css';

const PostModal = (props) => {
  const { open, close, sender, content, senderId } = props;
  console.log("\n>> PostModal : " + open);

  const cookies = new Cookies();
  // ▼ 로그인 안 되어 있으면 로그인 페이지로
  const localId = cookies.get('rememberId');
  let sendMessage;

  const onClickReply = async() => {
    console.log("답장하기 버튼 눌렀어요.");

    try {
      const isMember = await TeamAPI.memberRegCheck(senderId);
      console.log(sender + "(" + senderId + ")이 현재 존재하는 회원인지 확인이 필요합니다.");
      console.log("isMember.data.result : " + isMember.data);

      if(isMember.data === true) {
        console.log("쪽지를 보낼 수 있습니다.");
        sendMessage = prompt("쪽지 내용을 작성하세요.", "");

        if(sendMessage !== null) {
          const response = await TeamAPI.sendPost(localId, senderId, sendMessage);
          console.log("\n\n보내는 사람(localId) : " + localId);
          console.log("받는 사람(modalName) : " + senderId);
          console.log("쪽지 내용(sendMessage) : " + sendMessage);
          alert("쪽지 보내기 성공!!");
        } else {
          console.log("\n\n!!쪽지 내용 없음!!");
          alert("쪽지 내용을 작성하셔야죠..^^");
        } 
      /* 탈퇴한 회원이라면 */  
      } else {
        alert("존재하지 않는(탈퇴한) 회원입니다.");
        alert("쪽지를 삭제하시겠습니까? (구현하면 좋을 듯)");
        console.log("쪽지를 보낼 수 없습니다.");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>

        {/* header 영역 */}
          <header>
            쪽지 자세히 보기
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>

        {/* main 영역 */}
          <main>
            <div className="Modal-Form-item">
              <label className="form-label">보낸 사람 닉네임</label>
              <input type="text" className="Modal-Form-control" value={sender} disabled/>
            </div>

            <div className="Modal-Form-item">
              <label className="form-label">쪽지 내용</label>
              <input type="text" className="Modal-Form-control" value={content} disabled/>
            </div>
          </main>

        {/* footer 영역 */}
          <footer>
            <button className="close" onClick={close}>
              닫기
            </button>
            <button type="button" onClick={onClickReply}>
              답장하기
            </button>
          </footer>

        </section>
      ) : null}
    </div>
  );
}

export default PostModal;