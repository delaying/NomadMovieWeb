// import { useEffect, useState } from "react";
// import Button from "./Button";

// function App2() {
//   const [counter, setVelue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick= ()=>setVelue((prev)=>prev+1);
//   const onChange = (event) =>setKeyword(event.target.value);
//   useEffect(()=>{
//     console.log("I run only one");
//   }, []);
//   useEffect(()=>{
//     console.log("I run when 'keyword' changes", keyword);
//   }, [keyword]);
//   useEffect(()=>{
//     console.log("I run when 'counter' changes", keyword);
//   }, [counter]);

//   return (
//    <>
//       <input value={keyword} onChange={onChange} type="text" palceholder="Search here..."/>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>  
//    </>
//   );
// }

// export default App2;
