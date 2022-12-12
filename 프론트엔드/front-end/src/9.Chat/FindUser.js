// export interface UserData {
//     uid?: string;
//     userName?: string;
//     photoURL?: string;
//   }
  
//   function Main({userInfoData}: {userInfoData: UserData}) {
//     const [findUser, setFindUser] = useState<string>('');
//     const [userData, setUserData] = useState<Array<UserData>>([]);
//     const [isFindUserFinished, setIsFindUserFinished] = useState<boolean>(false);
  
//     // 유저검색
//     const onChangeFindUserInput = (e: React.FormEvent<HTMLInputElement>) => {
//       const { value } = e.target as HTMLInputElement;
//       setFindUser(value);
//     }
//     const onSubmitFindUser = async (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       const q = query(collection(db, "Users"), where("userName", "==", findUser));
//       const querySnapshot = await getDocs(q);
//       setUserData([]); // 초기화시키고 forEach문 동작(중복방지)
//       querySnapshot.forEach((doc) => {
//         const {userName, photoURL, uid} = doc.data();
//         const data: UserData = {uid, userName, photoURL};
//         setUserData(arr => arr ? [...arr, data] : [data]);
//       });
//       setIsFindUserFinished(true);
//     }
  
//     return (
//       <>
//         <div>
//           <form onSubmit={onSubmitFindUser}>
//           <div className="FindUserInputBox">
//             <input className="FindUserInput" 
//                      value={findUser}
//                      onChange={onChangeFindUserInput} 
//                      type="text"
//                      placeholder="유저를 검색하세요"
//               />
//             <button type="submit">
//               <SearchIcon className="FindUserInputIcon" />
//             </button>
//           </div>
//           </form>
//         </div>
//         <div>
//           {userData.length || !isFindUserFinished
//             ? userData.map(data => <UserList key={data.uid} data={data}/>)
//             : '해당 유저정보를 찾을수없습니다.'}
//         </div>
//            ...
//       </>
//     )
//   }
  
//   export default Main;