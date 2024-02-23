import React, { useState ,useEffect} from 'react'

const Stopwatch = () => {
    const [time,setTime]=useState(0)
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        let interval = null;
 
        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused])

  return (
    <div>

        <h1>Stopwatch</h1>
        Time: <span className="digits">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
                {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
       <br/>
       {isActive ? (<button onClick={(e)=>{setIsPaused(!isPaused)
       setIsActive(false)}
       }>Stop</button>):(<button onClick={(e)=>{setIsActive(true)
    setIsPaused(false)}
    }>Start</button>)} 
        <button onClick={(e)=>{ 
            setTime(0)
         setIsActive(false)}
        }> Reset</button>
      
    </div>
  )
}

export default Stopwatch
