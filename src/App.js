import { useEffect, useRef, useState } from "react";
import UseRefEG1 from "./UseRefEG1";
import UseRefEG2 from "./UseRefEG2";
import UseRefEG3 from "./UseRefEG3";
import UseEffectEG2 from "./UseEffectEG2";
import UseEffectEG3 from "./UseEffectEG3";
import UseEffectEG4 from "./UseEffectEG4";


function App() {

//This is for useRef examples

  //Eg1
  //Focus element using ref
  const inputRef = useRef(null);
  const focusInput = () => {
    // Focus the input element
    inputRef.current.focus();
  };

  //Eg2
  //Counting Renders
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  //Eg3
  //Managing Focus
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [isFirstInput, setIsFirstInput] = useState(true);

  const toggleFocus = () => {
    if (isFirstInput) {
      inputRef2.current.focus();
    } else {
      inputRef1.current.focus();
    }
    setIsFirstInput(!isFirstInput);
  };

  //This is UseEffect examples

  //Eg1
  //Fetches data from API
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('https://api.example.com/data')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  //EG2
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  //This code prints "Rendered" only when page is initially rendered only as dependency array is empty
  //If no dependency array, it prints for every element's render.
  // useEffect(()=>{
  //   console.log("Rendered");
  // },[])

  //[items] means the effect takes place when 
  //items state is modified ie(new item added, deleted)
  //Here the useEffect print statement is executed last after before and after render
  //And the before and after render is printed all the time for all events

  //Eg3
  //CLeanup function
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(timer);
  }, []);

  //Eg4
  //Conditionally run effects

  const [text, setText] = useState('');
  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(text);
    }, 300);

    // Cleanup function to clear the timeout if text changes
    return () => clearTimeout(handler);
  }, [text]); // Run the effect only when text changes

  return (
    <div className="App">
      <UseRefEG1 
        inputRef={inputRef}
        focusInput={focusInput}
      />
      <UseRefEG2 
        count={count}
        setCount={setCount}
        renderCount={renderCount}
      />
      <UseRefEG3 
        inputRef1={inputRef1}
        inputRef2={inputRef2}
        toggleFocus={toggleFocus}
      />

      <UseEffectEG2
        count1={count1}
        setCount1={setCount1}
      />

      <UseEffectEG3 
        count2={count2}
        setCount2={setCount2}
      />

      <UseEffectEG4 
        text={text}
        setText={setText}
        debouncedText={debouncedText}
        setDebouncedText={setDebouncedText}
      />
    </div>
  );
}

export default App;
