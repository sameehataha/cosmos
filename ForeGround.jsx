import { React,useRef } from 'react'
import Card from './Card'

const ForeGround = () => {
    const ref = useRef(null)
    const data =  [
        {
        desc: "🌠 The Universe is still expanding After the Big Bang (about 13.8 billion years ago), the universe has been expanding — and that expansion is actually accelerating! Dark energy is believed to be the cause, but we still don’t fully understand it. ",
        close: false,
        tag: {isOpen: true, tagTile: "DownLoad", tagColor: "blue"},
        },
        {
        desc: "🌠 The Universe is still expanding After the Big Bang (about 13.8 billion years ago), the universe has been expanding — and that expansion is actually accelerating! Dark energy is believed to be the cause, but we still don’t fully understand it. ",
        close: true,
        tag: {isOpen: true, tagTile: "DownLoad", tagColor: "blue"},
        },
        {
        desc: "🌠 The Universe is still expanding After the Big Bang (about 13.8 billion years ago), the universe has been expanding — and that expansion is actually accelerating! Dark energy is believed to be the cause, but we still don’t fully understand it. ",
        close: true,
        tag: {isOpen: true, tagTile: "DownLoad", tagColor: "pink"},
        },
    ]
  return (
    <div>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-blue-800/30 flex gap-10 flex-wrap p-5'>
       {data.map((item,index) => (
        <Card data={item} reference={ref}/>

       ))}
      </div>
    </div>
  )
}

export default ForeGround
