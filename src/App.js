import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <video
        autoPlay
        loop
        muted
        style={{
          // position: "fixed",
          width: '100%',
          // left: 0,
          // top: 0,
        }}
      >
        <source src='/VideoHeader.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
