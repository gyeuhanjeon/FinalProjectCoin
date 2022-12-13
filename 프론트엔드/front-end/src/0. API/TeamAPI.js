import axios from "axios";

const HEADER = 'application/json';
/* ▼ 인텔리제이용 ▼ */
export const TEAM_DOMAIN = "http://localhost:8282/";
/* ▼ 이클립스용 ▼ */
// export const TEAM_DOMAIN = "http://localhost:8111/ISOUR/";/

const TeamAPI = {

  /* 아이디 중복확인(회원가입 여부 확인) */
  memberRegCheck: async function (id) {
    const regCheck = {
      id: id
    };
    // @PostMapping("/IsMemberCheck")
    return await axios.post(TEAM_DOMAIN + "IsMemberCheck", regCheck, HEADER);
  },

  /* 닉네임 중복확인(회원가입 여부 확인) */
  nicknameCheck: async function (nickname) {
    const nicknameObj = {
      nickname: nickname
    };
    // @PostMapping("/IsNicknameCheck")
    return await axios.post(TEAM_DOMAIN + "IsNicknameCheck", nicknameObj, HEADER);
  },

  /* 회원가입 */
  memberReg: async function (kakaoId, kakaoEmail, name, id, pwd, nickname, email, birth, gender, region1, region2, introduce, check_term1, check_term2) {
    const memberObj = {
      kakaoId: kakaoId,
      kakaoEmail: kakaoEmail,
      name: name,
      id: id,
      pwd: pwd,
      nickname: nickname,
      email: email,
      birth: birth,
      gender: gender,
      region1: region1,
      region2: region2,
      introduce: introduce,
      check_term1: check_term1,
      check_term2: check_term2
    };
    // @PostMapping("/SignUp")
    return await axios.post(TEAM_DOMAIN + "SignUp", memberObj, HEADER);
  },

  /* 로그인 */
  userLogin: async function (id, pwd) {
    const loginObj = {
      id: id,
      pwd: pwd
    }
    // @PostMapping("/Login")
    return await axios.post(TEAM_DOMAIN + "Login", loginObj, HEADER);
  },

  /* MBTI 검사 결과 저장*/
  mbtiReg: async function (mbti, id) {
    const resultObj = {
      mbti: mbti,
      id: id
    };
    // @PostMapping("/MBTI")
    return await axios.post(TEAM_DOMAIN + "MBTI", resultObj, HEADER);
  },

  /* 프로필 이미지 변경 */
  changeFace: async function (url, localId) {
    const faceObj = {
      url: url,
      id: localId
    };
    // @PostMapping("/changeFace")
    return await axios.post(TEAM_DOMAIN + "changeFace", faceObj, HEADER);
  },

  /* 회원 조회 */
  memberInfo: async function (id) {
    // @GetMapping("/MyPage")
    return await axios.get(TEAM_DOMAIN + `MyPage?id=${id}`, HEADER);
  },

  /* 비밀번호 찾기 */
  findPwd: async function (id, email, birth) {
    // @GetMapping("/FindPwd")
    return await axios.get(TEAM_DOMAIN + `FindPwd?id=${id}&email=${email}&birth=${birth}`, HEADER);
  },

  /* 아이디 찾기 */
  findId: async function (name, email, birth) {
    // @GetMapping("/FindId")
    return await axios.get(TEAM_DOMAIN + `FindId?name=${name}&email=${email}&birth=${birth}`, HEADER);
  },

  /* 회원정보 수정 */
  memberUpdate: async function (id, pwd, nickname, introduce, email, region1, region2) {
    const memberObj = {
      id: id,
      pwd: pwd,
      nickname: nickname,
      introduce: introduce,
      email: email,
      region1: region1,
      region2: region2
    };
    // @PutMapping("/MyPage")
    return await axios.put(TEAM_DOMAIN + "MyPage", memberObj, HEADER);
  },

  /* 회원 탈퇴 */
  memberDelete: async function (id, pwd) {
    const goodbyeObj = {
      id: id,
      pwd: pwd
    };
    // @PostMapping("/Goodbye")
    return await axios.post(TEAM_DOMAIN + "Goodbye", goodbyeObj, HEADER);
  },

  // ========= PostController =========

  /* 쪽지함 조회 */
  postbox: async function (id) {
    const postObj = {
      id: id
    }
    // @PostMapping("/GetPostbox")
    return await axios.post(TEAM_DOMAIN + "GetPostbox", postObj, HEADER);
  },

  /* 쪽지 보내기 */
  sendPost: async function (id, receiverId, content) {
    const postObj = {
      id: id,
      receiverId: receiverId,
      content: content
    };
    // @PostMapping("/SendPost")
    return await axios.post(TEAM_DOMAIN + "SendPost", postObj, HEADER);
  },

  /* 쪽지 삭제 */
  postDelete: async function (obj) {
    const postObj = {
      obj: obj
    };
    // @PostMapping("/DeletePost")
    return await axios.post(TEAM_DOMAIN + "DeletePost", obj, HEADER);
  },
  //chat
  memberChat: async function (content,nickname) {
    const chatObj = {
      nickname:nickname,
      content: content
    };
    return await axios.put(TEAM_DOMAIN + `Chat?id=${content}`, chatObj, HEADER);
  },

  chatInfo: async function (content) {
    return await axios.post(TEAM_DOMAIN + "Chat", HEADER);
  },

  chatRoomOpen: async function (name) {
    const chatObject = {
      "name": name
    };
    return await axios.put(TEAM_DOMAIN + "Chatting", chatObject, HEADER);
  },


  // 이미지 파일 업로드
  UploadService: async function (formData) {
    const regCheck = {
      formData: formData
    };
    const config = {
      Header: {
        'content-type': 'multipart/form-data',
      },
    };

    return await axios.post(TEAM_DOMAIN + "UploadService", regCheck, config, HEADER);
  },

  // 매칭회원 불러오기
  MatchingMember2: async function (id, localId_num, pageNum) {
    const regCmd = {
      id: id,
      localId_num: localId_num,
      pageNum: pageNum
    }
    return await axios.post(TEAM_DOMAIN + "Matching", regCmd, HEADER);
  },

  //회원가입 이메일 주소 전송(인증 번호 받기 위해)
  emailCheck: async function (email) {
    const regCmd = {
      id: email
    }
    return await axios.post(TEAM_DOMAIN + "service/mail", regCmd, HEADER);
  },

  //회원가입 이메일 인증번호받은거 확인차 전송
  emailCode: async function (code) {
    const regCmd = {
      code: code
    }
    return await axios.post(TEAM_DOMAIN + "service/verifyCode", regCmd, HEADER);
  },

  coinUpdate: async function(localId, coin){

    const regCmd={
      id : localId,
      coin : coin
    }
    return await axios.post(TEAM_DOMAIN + "coinUpdate", regCmd, HEADER);
  },


  //이메일 중복확인
  emailDuplicateCheck: async function (email) {
    const regCmd = {
      email: email
    }
    return await axios.post(TEAM_DOMAIN + "service/isEmailCheck", regCmd, HEADER);
  },

  //구글 이메일 중복확인
  googleInfo: async function (googleEmail) {
    const regCmd = {
      email: googleEmail
    }
    //@PostMapping("/GoogleInfo")

    return await axios.post(TEAM_DOMAIN + "GoogleInfo", regCmd, HEADER);
  },

  /* 카카오 회원 조회 */
  kakaomember: async function (id_num) {
    // @GetMapping("/MyPage")
    return await axios.post(TEAM_DOMAIN + `MyPage?id_num=${id_num}`, HEADER);
  },

   // 카카오 로그인
   KakaoLogin: async function (access_token) {
    const regCmd = {
      access_token: access_token
    }
    return await axios.post(TEAM_DOMAIN + "login/kakao", regCmd, HEADER);
  },

  // 채팅 친구 추가
  chatAddMember: async function (MyId, chatMemberId,nickname) {
    const regCmd = {
      MyId: MyId,
      chatMemberId: chatMemberId,
      nickname : nickname
    }
    return await axios.post(TEAM_DOMAIN + "chat/addMember", regCmd, HEADER);
  },

    // 채팅 친구 찾기
    chatFindMember: async function (MyId, chatMemberId) {
      const regCmd = {
        MyId: MyId,
        chatMemberId: chatMemberId
      }
      return await axios.post(TEAM_DOMAIN + "chat/findMember", regCmd, HEADER);
    },

}

export default TeamAPI;