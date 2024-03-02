
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


    



    
    </>
  );
}

export default App;
