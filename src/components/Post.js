import React, { useState } from 'react'
import Button from './Button'



const Post = ({ setReplay, replay, username, currentUser, currentUserPic }) => {
  const [textValue, setTextValue] = useState('')

  const textareaValue = (e) => {
    setTextValue(e.target.value)
  }

  const handelSubmit = (e) => {
    e.preventDefault()
  }

  const handelReplaySubmit = (e) => {
    e.preventDefault()
    setReplay(false)

  }
  return (
    <section className="post_container">
      <div className='post'>
        <img src={currentUserPic} alt="" className='descTop'/>
        {replay ? (
          <form className='postForm'
          onSubmit={handelReplaySubmit}>
            <textarea type="text" onChange={textareaValue}
              placeholder='Add a comment' defaultValue={` @${username} `} />
            <div className='postBtnC'>
            <img src={currentUserPic} alt="" className='mobTop'/>
            <Button replay={replay} setReplay={setReplay} btnName='SEND' />
            </div>
          </form>

        ) : (
          <form className='postForm' onSubmit={handelSubmit}>
            <textarea type="text" onChange={textareaValue} value={textValue} placeholder='Add a comment'/>
            <div className='postBtnC'>
            <img src={currentUserPic} alt="" className='mobTop'/>
            <Button replay={replay} setReplay={setReplay} btnName='SEND' />
            </div>
          </form>
        )}

      </div>
    </section>
  )
}

export default Post