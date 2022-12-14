import React, { useState } from 'react';
import styled from 'styled-components';
import TeamAPI from '../0. API/TeamAPI';
import FindInfoModal from './FindInfoModal';
import EmailModal from './EmailModal';
import ChangePwdModal from '../99. Modal/ChangePwdModal';
import { useNavigate } from "react-router-dom";
import '../0. API/defultMain.css';


const Find_Container = styled.div`
    width:600px;
    border: 1px  ;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 1;
    margin: 20vh auto;
    height: 400px;
    box-sizing: border-box;
`
const Select_Mode = styled.span`
    width:300px;
    border: 1px  black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20%;
    overflow: hidden;
    z-index: 3;
    
    position: absolute;
    height: 10vh;
    &>p{
        margin-top: 30px;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const Select_Mode2 = styled.span`
    width:300px;
    border: 1px black;
    border-radius: 20%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 3;
    overflow: hidden;

    position: absolute;
    height: 10vh;
    left:300px;
    &>p{
        margin-top: 30px;
        font-size: 25px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Input_Container = styled.div`
    margin-top: 200px;
    position: relative;
    top: 160px;

    th{
        position: relative;
        left: 20px;
        width: 80px;
    }

    .findInfo-btn{
        border : none;
        background-color: white;
        background: black;
        color: white;
        padding: 0.1rem;
        width: 560px;
        border-radius: 100px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 25px;
        background-color: skyblue;
        border: 0px none;
        font-weight: 900;  
        position: relative;
        top:30px;
        margin-left: 20px;
    }
    
    
`

const Input = styled.input`
        width:350px;
        position: relative;
        margin-left: 130px;
        border : none;
        background-color: white;
        color: black;
        padding: 0.1rem;
        height: 30px;
        border-radius: 100px;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding-left: 20px;
        font-size: 15px;
        border: 0px none;
        font-weight: 900;  
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`



const FindInfo = () => {
    const navigate = useNavigate();

    const regexName = /^[???-??????-???]{2,20}$/;
    const regexId = /^\w{5,20}$/;
    const regexEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);


    const [getId, setGetId] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [name, setName] = useState('');
    const [inputPwd, setInputPwd] = useState('');
    const [nickname, setNickname] = useState('');
    const [introduce, setIntroduce] = useState('');
    const [gender, setGender] = useState('');
    const [region1, setRegion1] = useState("");
    const [region2, setRegion2] = useState("");
    const [url, setUrl] = useState("");
    const [mbti, setMbti] = useState("");



    const [isName, setIsName] = useState(false);
    const [isId, setIsId] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isBirth, setIsBirth] = useState(false);
    const [isFind, setIsFind] = useState(true);


    const [showReqName, setShowReqName] = useState(false);
    const [showReqId, setShowReqId] = useState(false);
    const [showReqEmail, setShowReqEmail] = useState(false);

    const [findDate, setFindDate] = useState(false);

    const reqName = "????????? ????????? ???????????????."
    const reqId = "???????????? ???????????????."
    const reqEmail = "???????????? ????????? ???????????????."


    const regexPw = /^\w{8,20}$/;


    const [pwd, setPwd] = useState('');
    const [pwdcheck, setPwdcheck] = useState('');
    const [changePwdModalOpen, setChangePwdModalOpen] = useState(false);




    /* ???????????? ?????? */
    const getPwd = (pwd) => { setPwd(pwd); }
    const openChangePwdModal = () => { setChangePwdModalOpen(true); };
    const closeChangePwdModal = () => { setChangePwdModalOpen(false); };
    const onSavePwd = async (e) => {
        console.log("????????? pwd :" + pwd);
        console.log("????????? e :" + e);

        // e.preventDefault();

        try {
            const response = await TeamAPI.memberUpdate(id, pwd, nickname, introduce, email, region1, region2);
            console.log("id : " + id);
            console.log("password : " + pwd);
            console.log("nickname : " + nickname);
            console.log("introduce : " + introduce);
            console.log("email : " + email);
            console.log("region1 : " + region1);
            console.log("region2 : " + region2);

            if (response.status == 200) {
                console.log("?????? ??????(200)");
                console.log("\n>> ???????????? ?????? ??????");
                alert("???????????? ?????? ??????!!");
                // window.location.replace('/login');
                navigate('/login');
            }
        } catch (e) { console.log(e); }

    }


    const onChangeName = e => {
        let temp_name = e.target.value;
        setName(temp_name);
        if (temp_name === '' || !regexName.test(temp_name)) {
            setIsName(false);
            setShowReqName(true); //????????? ????????? ???????????????.
        } else {
            setIsName(true);
            setShowReqName(false);
        }
    }
    const onChangeId = e => {
        let temp_id = e.target.value;
        setId(temp_id);
        if (temp_id === '' || !regexId.test(temp_id)) {
            setIsId(false);
            setShowReqId(true); // ???????????? ????????? ???????????????.
        } else {
            setIsId(true);
            setShowReqId(false); // ???????????? ????????? ???????????????.
        }
    }
    const onChangeEmail = e => {
        let temp_email = e.target.value;
        setEmail(temp_email);
        if (temp_email === '' || !regexEmail.test(temp_email)) {
            setIsEmail(false);
            setShowReqEmail(true); // ???????????? ????????? ???????????????.
        } else {
            setIsEmail(true);
            setShowReqEmail(false);
        }
    }
    const onChangeBirth = e => {
        let temp_birth = e.target.value;
        setBirth(temp_birth);
        if (temp_birth !== null) {
            setIsBirth(true);
        }
    }




    const [states, setStates] = useState({
        mode: 'findId',
    });

    function changeMode(mode) {
        setStates({ ...states, ['mode']: mode })
    }

    const onClickFindPwd = async (e) => {

        console.log("\n\n???????????? ?????? ????????? ????????????");
        console.log("isId : " + isId);
        console.log("isBirth : " + isBirth);
        console.log("isEmail : " + isEmail);
        try {

            const findPwd = await TeamAPI.findPwd(id, email, birth);


            console.log(findPwd);
            console.log(findPwd.status);

            if (findPwd.data === '') {
                setId("");
                setEmail("");
                setBirth("");
                console.log('???????????? ?????? ???????????????.');
                // alert('???????????? ?????? ???????????????.');
            } else {
                // alert("?????? ????????? ????????????.");
                console.log("?????? ????????? ????????????.");
                setFindDate(true);
                setIsBirth(false);
                setIsFind(false);
                setName(findPwd.data.name);
                setId(findPwd.data.id);
                setBirth(findPwd.data.birth);
                setGender(findPwd.data.gender);
                setPwd(findPwd.data.pwd);
                setNickname(findPwd.data.nickname);
                setIntroduce(findPwd.data.introduce);
                setEmail(findPwd.data.email);
                setRegion1(findPwd.data.region1);
                setRegion2(findPwd.data.region2);
                setUrl(findPwd.data.face);
                setMbti(findPwd.data.mbti);
            }


        } catch (e) {
            console.log(e);
        }
    };
    /*????????? ??????*/
    const onClickEmailAdress = async (e) => {
        e.preventDefault();
        console.log("\n\nemail ?????? ????????? ????????????");
        try {
            const changeResult = await TeamAPI.emailCheck(email);
            console.log("emailResult.data : " + changeResult.data);
            console.log("emailResult.status : " + changeResult.status);
            if (changeResult.status === 200) {
                setOpen(true);
                setEmail(email);
            } else {
                setEmail("");
            }
        } catch (e) {
            console.log(e);
        }
    }


    const onClickFindId = async (e) => {

        console.log("\n\n????????? ?????? ????????? ????????????");
        console.log("isName : " + isName);
        console.log("isBirth : " + isBirth);
        console.log("isEmail : " + isEmail);
        try {
            if (isName && isEmail && isBirth) {
                const findId = await TeamAPI.findId(name, email, birth);


                console.log(findId.data);

                if (findId.data === '') {
                    setId("");
                    setEmail("");
                    setBirth("");
                    console.log('???????????? ?????? ???????????????.');
                    alert('???????????? ?????? ???????????????.');
                    
                } else {
                    // alert(findId.data.id);
                    console.log("?????? ????????? ????????????.");
                    setGetId(findId.data.id);
                    setOpen(true);
                }

            } else {
                console.log("?????? ????????? ?????? ????????? ???????????? ?????? ?????? ?????????.");
                alert('????????? ?????? ???????????????.');
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='Container'>

            {/* mode ??? main ??? ??? */}
            {states.mode === 'findId'
                ?
                <Find_Container>
                    <Select_Mode>
                        <p>????????? ??????</p>
                    </Select_Mode>
                    <Select_Mode2 onClick={() => changeMode('findPwd')}>
                        <p>???????????? ??????</p>
                    </Select_Mode2>
                    <Input_Container>
                        <FindInfoModal open={open} modalName={getId} onHide={() => setOpen(false)} />
                        <form>
                            <table>
                                <div>
                                    <th>
                                        <label>??? ???</label>
                                    </th>
                                    <td>
                                        <Input type="text" placeholder="??????" value={name} onChange={onChangeName} required />
                                    </td>
                                    <p>{showReqName && reqName}</p>
                                </div>
                                <div>
                                    <th>
                                        <label>??? ??? ???</label>
                                    </th>
                                    <td>
                                        <Input type="text" placeholder="?????????" value={email} onChange={onChangeEmail} required />
                                    </td>
                                    <p>{showReqEmail && reqEmail}</p>
                                </div>
                                <div>
                                    <th>
                                        <label>??? ??? ??? ???</label>
                                    </th>
                                    <td>
                                        <Input type="date" value={birth} onChange={onChangeBirth} />
                                    </td>
                                </div>
                            </table>
                        </form>
                        <button className='findInfo-btn' onClick={onClickFindId}>????????? ??????</button>
                    </Input_Container>
                </Find_Container>
                : null
            }

            {states.mode === 'findPwd'
                ?
                <Find_Container>
                    <Select_Mode onClick={() => changeMode('findId')}>
                        <p>????????? ??????</p>
                    </Select_Mode>
                    <Select_Mode2>
                        <p>???????????? ??????</p>
                    </Select_Mode2>
                    <Input_Container>
                        <EmailModal open={open} modalName={email} modalContent={() => setChangePwdModalOpen(true)} onHide={() => setOpen(false)} />
                        <ChangePwdModal open={changePwdModalOpen} close={closeChangePwdModal} getPwd={getPwd} onSavePwd={onSavePwd}></ChangePwdModal>
                        <form>
                            <table>
                                <div>
                                    <th>
                                        <label >??? ??? ???</label>
                                    </th>
                                    <td>
                                        <Input type="text" placeholder="?????????" value={id} onChange={onChangeId} required />
                                    </td>
                                    <p>{showReqId && reqId}</p>
                                </div>
                                <div>
                                    <th>
                                        <label>??? ??? ???</label>
                                    </th>
                                    <td>
                                        <Input type="text" placeholder="?????????" value={email} onChange={onChangeEmail} disabled={findDate ? true : false} />
                                    </td>

                                    <p>{showReqEmail && reqEmail}</p>
                                </div>
                                <div>
                                    <th>
                                        <label>??? ??? ??? ???</label>
                                    </th>
                                    <td>
                                        <Input type="date" value={birth} onChange={onChangeBirth} />
                                    </td>
                                </div>
                            </table>
                        </form>

                        {isFind&&<button className='findInfo-btn' onClick={onClickFindPwd}>?????? ?????? ??????</button>}
                        {findDate && <button className='findInfo-btn' onClick={onClickEmailAdress}>????????? ??????</button>}

                    </Input_Container>
                </Find_Container>
                : null
            }

        </div>

    )





}

export default FindInfo;