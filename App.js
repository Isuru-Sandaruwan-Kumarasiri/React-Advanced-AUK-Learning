
import './App.css';
import Post from './Components/Post';
const Data=[
  {        //selecting area can be reapeated by Press control+alt key and press down key 
    fname:"Chathura",
    job:"react-Developer",
    university:"university of Peradeniya",
    school:"R/st.Aloysious College"
  },
  {
    fname:"isuru",
    job:"react-Developer",
    university:"university of Peradeniya",
    school:"R/st.Aloysious College"
  },
  {
    fname:"isuru",
    job:"react-Developer",
    university:"university of Peradeniya",
    school:"R/st.Aloysious College"
  },
  {
    fname:"sandarwuan",
    job:"Front-end-Developer",
    university:"university of ruhuna",
    school:"R/st.Aloysious College"
  },
  {
    fname:"Niman",
    job:"full-stack-Developer",
    university:"university of Moratuwa",
    school:"R/st.Aloysious College"
  },
  {
    fname:"Thilini Athukorala",
    job:"back-end--Developer",
    university:"university of kelaniya",
    school:"R/st.Aloysious College"
  },
]


function App() {
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

{/* ====================avoid Error beause not used Key varaiable================================
map method magin access karann puluwan parameter 3k(looping index,complete Array,return Element)
***key ekak add kirima aniwaren sidu kalyuthuri,nattm identifer karagann ba react ekat componnents */}
    {
      Data.map(({fname,school,job,university},index)=>{
        return <Post key={index} name={fname} school={school} university={university} job={job}/>
      })
    }
   







    
    </>
  );
}

export default App;
