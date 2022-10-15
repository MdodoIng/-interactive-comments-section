import React, { useState } from "react";
import replyIcon from "../images/icon-reply.svg";
import editIcon from "../images/icon-edit.svg";
import deleteBtn from "../images/icon-delete.svg";

import Post from "./Post";
import Button from "./Button";

const CommentBox = ({
  rep,
  item,
  use_id,
  replyingTo,
}) => {
  const [replay, setReplay] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [update, setUpdate] = useState('');
  

  const handelUpdate = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  const oneUser = item?.currentUser?.username !== rep?.user?.username;

  const deleteReplay = (req) => {
    setEdit(false)
    setIsDelete(false)
  };

  const Counter = ({score}) => {
    return (
      <div className="counting_container">
        <span>

          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            />
          </svg>
        </span>
        <p>{score || 0}</p>
        <span>
          <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF" /></svg>
        </span>
      </div>
    );
  };

  const Reaction = ({ classN }) =>

    <div className={`${classN} comment_replay_btn`} >
      <span
        className="delete"
        style={{ display: oneUser ? "none" : "flex" }}
        onClick={() => setIsDelete(true)}
      >
        <img src={deleteBtn} alt="" />
        <p>Delete</p>
      </span>

      <span
        className="reply"
        onClick={() =>
          !oneUser ? setEdit(true) : setReplay(true)
        }
      >
        <img src={!oneUser ? editIcon : replyIcon} alt="" />
        <p>{oneUser ? "Replay" : "Edit"}</p>
      </span>
    </div>

    const userIdTrue = user => {

      if (replyingTo) {
        return '@'+ replyingTo
      } else return null
    }
    

  return (
    <>
      <div className="comment">
        <div className="counter">
          <Counter score={rep.score} />
          <Reaction classN='mobTop' />
        </div>
        <div className="comment_cont">
          <div className="comment_top">
            <div className="comment_user">
              <img src={rep?.user?.image?.png} alt="" />
              <p>{rep?.user?.username}</p>
              <span
                style={{
                  display: oneUser ? "none" : "flex",
                }}
                className="you"
              >
                you
              </span>
              <small>{rep?.createdAt}</small>
            </div>
            <Reaction classN='descTop' />
          </div>
          {!edit ? (
            <p className="comment_text"> <span className="userId">{userIdTrue(use_id)}</span> {rep.content}
            </p>
          ) : (
            <form className="formEdit" onSubmit={handelUpdate}>
              <textarea
                type="text"
                className="textarea"
                onChange={(e) => setUpdate(e.target.value)}
                placeholder="Add a comment"
                defaultValue={`${userIdTrue(use_id)} ${rep.content}`}
              />
              
              <Button btnName={"UPDATE"} style={{ marginTop: "15px" }} />
            </form>
          )}
        </div>
      </div>
      {
        replay && (
          <Post
            replay={replay}
            setReplay={setReplay}
            currentUserPic={item?.currentUser?.image?.png}
            username={rep?.user?.username}
          />
        )
      }
      {
        isDelete && (
          <div className="deleteContainer">
            <div className="deleteBox">
              <h2>Delete command</h2>
              <p>
                Are you sure you want to delete this comment? This will
                remove the comment and can't be undone
              </p>
              <div className="btn">
                <Button
                  onClick={() => setIsDelete(false)}
                  btnName="NO, CANCEL"
                  styles={{ backgroundColor: "#67727e" }}
                />
                <Button
                  onClick={deleteReplay}
                  btnName="YES, DELETE"
                  styles={{ backgroundColor: "#ed6468" }}
                />
              </div>
            </div>
          </div>
        )
      }

    </>
  )
};

export default CommentBox;
