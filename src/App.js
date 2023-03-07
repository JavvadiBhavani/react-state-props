import logo from './logo.svg';
import './App.css';
import header from './components/header';
import Reusable from './components/Reusable';
function App() {
  let obj1={
    data:"The ed-tech company was launched in 2015 after four (04) years of development and offers personalized and effective learning programs for classes 1-12 (K-12), and aspirants who prepare for competitive exams such as IIT-JEE, NEET, CAT, GRE, and GMAT. Byju’s app provides services"
  };
  return (
    [header(),<Reusable heading={"Summary"} data={obj1.data}/>,<Reusable heading={"Experience"} data={obj1.data}/>,<Reusable heading={"Contact"} data={obj1.data}/>]
  );
}

export default App;
