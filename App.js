
import './App.css';
import Post from './Components/Post';
import Data from './data'
import { MyData } from './data';

// const Mainblock=()=>{
//   return(
//     <>
//       {
//          Data.map(({fname,school,job,university})=>{
//           return <Post key={fname} name={fname} school={school} university={university} job={job}/>
//         })
  
//       }
//     </>
//   )
// }
function App() {

  const MainBlock= Data.map(({fname,school,job,university})=>{
    return <Post key={fname} name={fname} school={school} university={university} job={job}/>
  })

  return (
    <>
    {/*                           ==================== Normal Data Mapping Method ================================

    {
      Data.map((obj)=>{
        return <Post name={obj.fname} school={obj.school} university={obj.university} job={obj.job}/>
      })
    } 

    */}
            
   {/* 
                                ==================== Object distructure  Method ================================
            ***Choosing all variable crtl+D

    {
      Data.map(({fname,school,job,university})=>{
        return <Post name={fname} school={school} university={university} job={job}/>
      })
    }

   */}




   {/*
  ====================avoid Error beause not used Key varaiable================================
map method magin access karann puluwan parameter 3k(looping index,complete Array,return Element)
***key ekak add kirima aniwaren sidu kalyuthuri,nattm identifer karagann ba react ekat componnents 
    {
      Data.map(({fname,school,job,university},index)=>{
        return <Post key={index} name={fname} school={school} university={university} job={job}/>
      })
    }
   {
      Data.map(({fname,school,job,university})=>{
        return <Post key={fname} name={fname} school={school} university={university} job={job}/>
      })
    }


    */}



    {/* ==================By Function Calling ===============*/}
              {MainBlock}


    {/* ==============Inside componentwise calling================== 

         <MainBlock/>

    */}


   {/* ==================Undefined error data handling (if hava undefined data ,check by ? symbol ) ===============*/}

    {
        MyData?.map(({fname,school,job,university},index)=>{
          return <Post key={index} name={fname} school={school} university={university} job={job}/>
        }) 
    }


    
    </>
  );
}

export default App;
