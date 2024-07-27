
import './App.css';
import { Random } from './components/Random';
import { Tag } from './components/Tag';



function App() {

  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>
      <h1 className='bg-white rounded-lg w-full text-center mt-[40px] w-11/12
      text-4xl px-10 py-2 font-bold'>RANDOM GIFS</h1>
     <div className='flex flex-col w-full items-center mt-[40px]'>
      <Random />
      <Tag/>
     </div>  
    </div>
  );
}

export default App;
