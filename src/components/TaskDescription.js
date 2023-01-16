import React, { useEffect, useState } from 'react'

const TaskDescription = ({ counter1, setFlag }) => {
  const [isStart, setIsStart] = useState(true)
  const [counter, setCounter] = useState(counter1)

  useEffect(() => {
    if (setFlag === true) {
      setCounter(counter1)
    }
  }, [setFlag, counter1])

  const getPadTime = (time) => {
    return time.toString().padStart(2, '0')
  }

  const minutes = getPadTime(Math.floor(counter / 60))
  const seconds = getPadTime(counter - minutes * 60)

  //  const format = (time) => {
  //     const minutes = getPadTime(Math.floor(time / 60))
  //     const seconds = getPadTime(time % 60)
  //     return `${minutes}:${seconds}`
  //   }

  useEffect(() => {
    if (isStart === true) {
      setTimeout(() => {
        setCounter(counter + 1)
      }, 1000)
    }
  }, [counter, isStart])

  const handleStart = () => {
    setIsStart(true)
  }

  const handleStop = () => {
    setIsStart(false)
  }

  return (
    <span className='description'>
      <button className='icon icon-play' onClick={() => handleStart()} />
      <button className='icon icon-pause' onClick={() => handleStop()} />
      {minutes}:{seconds}
      {/* {format(counter)} */}
    </span>
  )
}

export default TaskDescription
