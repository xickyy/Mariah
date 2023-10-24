import './Counter.css'

import { useState } from "react";

import img from './img.jpg';

const Counter = () => {

  let date = 'Monday October 23rd ♡♡ 2023 ♡♡'

  const [yesCount, setYesCount] = useState(false)
  let [noCount, setNoCount] = useState(0)

  let style = {}
  let yesStyle = {}

  if (noCount === 1) {
    style = { marginTop: '50px' }
  }
  if (noCount === 2) {
    style = { marginLeft: '75px' }
  }
  if (noCount === 3) {
    style = { marginRight: '75px' }
  }
  if (noCount === 4) {
    style = { marginTop: '50px', marginRight: '-75px'  }
  }
  if (noCount === 5) {
    style = { marginTop: '50px', marginLeft: '-75px' }
  }
  if (noCount === 6) {
    style = { marginTop: '20px' }
  }

  if (noCount === 7) {
    style = { color: 'hotpink', backgroundColor: 'hotpink', border: 'hotpink', marginLeft: '-1500px'}
    yesStyle = {fontSize: '60px'}
  }

  const yes = () => {
    return (
      <button style={yesStyle} className="yes" onClick={() => setYesCount(true)}>♡ YES ♡</button>
    )
  }





  let no = () => {
    return (
      <button style={style} className="no" onClick={() => setNoCount(noCount = noCount + 1)}>NEVER 👹</button>
    )
  }

  if (yesCount === true) {
    return (
      <div className="after-answer">
        <h1 className='title'>♡ Mariah Alyssa Arciniega ♡</h1>
        <h2>♡ AKA Babygirl ♡</h2>
        <h1>♡ Thats right! ♡</h1>
        <h1>♡ Now gimmie a kisss ♡</h1>
        <img className='image' src={img}></img>
      </div>
    )
  } else {
    return (
      <div className="before-answer">
        <h1 className='name'>♡ Mariah Alyssa Arciniega ♡</h1>
        <h2>♡ AKA Babygirl ♡</h2>
        <p className='text'>Its been 3 months now, and we still got forever to go</p>
        <bl></bl>
        <p className='text'>Will you be my girlfriend as of {date} </p>
        <bl></bl>
        {yes()} {no()}
      </div>

    )
  }
}

export default Counter;
