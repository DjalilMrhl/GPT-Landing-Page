import {NavBar,Header,About,CaseStudies,OpenAI,Register,Blogs,Footer} from './components'
import './index.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <About/>
      <OpenAI/>
      <CaseStudies/>
      <Register/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
