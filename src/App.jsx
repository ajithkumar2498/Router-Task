import Fsd from "./components/Fsd.jsx"
import Ds from "./components/Ds.jsx"
import Cs from "./components/Cs.jsx"
import All from "./components/All.jsx"
import mern from '../src/images/MERN.png'
import mean from '../src/images/MEAN.png'
import PY from '../src/images/python-Course.jpg'
import java from '../src/images/mob-tools.png'
import cs from '../src/images/Cyber-security.jpg'
import ds from '../src/images/DATA SCIENCE.jpg'
import Tab from "./components/Tab.jsx"
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"

function App() {
  let cardData=[
    {
      image:mern,
     Heading:"MERN Full Stack Development",
     Content:"Begin a MERN stack course led by top rated professionals on Udemy and learn how you can build powerful, database driven applications."
  },
  {
    image:mean,
   Heading:"MEAN Full Stack Development",
   Content:"Learn the MEAN Stack from top-rated web development experts. Udemy offers basic to advanced courses to help you master the full MEAN Stack, ...$139.99"
},
{
  image:java,
 Heading:"Java Full Stack Development",
 Content:"High-quality and affordable courses - 30-day satisfaction guarantee. Start learning today. Join millions of learners from around the world already learning on Udemy. Pandas Tutorials."
},
{
  image:PY,
 Heading:"Python Full Stack Development",
 Content:"100 Days of Code: The Complete Python Pro Bootcamp for 2023 Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!"
},
{
  image:cs,
 Heading:"Cyber Security",
 Content:"Learn in-depth cryptography skills, incident detection & more with an MS in CS Engineering. Boost your career growth with an online MS in CS Engineering from a top global university."
},
{
  image:ds,
 Heading:"Data Science",
 Content:"Learn Data Science or improve your skills online today. Choose from a wide range of Data Science courses offered from top universities and industry leaders."
}]

  return (
    <>
    <BrowserRouter>
    <Tab />
    <div className="container">
      <Routes>       
         <Route path="/all" element={ cardData.map((e,i)=>{return <All image={e.image} heading={e.Heading} content={e.Content} key= {i}/> })}/>         
         <Route path="/fsd" element={cardData.map((e,i)=>{if(i>=0 && i<4){return  <Fsd image={e.image} heading={e.Heading} content={e.Content} key= {i} />} })}/>
         <Route path="/cs" element={cardData.map((e,i)=>{if(i===4){return  <Cs image={e.image} heading={e.Heading} content={e.Content} key= {i} />} })}/>
         <Route path="/ds" element={cardData.map((e,i)=>{if(i===5){return  <Ds image={e.image} heading={e.Heading} content={e.Content} key= {i} />} })}/>
         <Route path="*" element={<Navigate to="/all" />}/>
        </Routes>
    </div>

   </BrowserRouter>
    </>
  )
}

export default App
