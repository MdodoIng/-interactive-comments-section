import { useState } from "react";
import Post from "./Post";
import "./style.css";
import CommentBox from "./CommentBox";



const Comment = ({ comment, replies, currentUser, currentUserPic, item }) => {
  const [replay, setReplay] = useState(false);

  return (
    <>
      <CommentBox 
      key={comment?.id}
      rep={comment}
      item={item}
      use_id={comment.user?.username}
      />
        <>
          {replies.map((reply) => (
            <>
              {reply.content && replies && (
                <div key={reply.id} className="replay_container">
                  <div className="replay_body">
                    <CommentBox
                      key={reply.id}
                      rep={reply}
                      item={item}
                      use_id={comment.user?.username}
                    />
                  </div>
                </div>
                )}
            </>
          ))}
           </>
          {replay && (
            <Post
              currentUser={currentUser}
              currentUserPic={currentUserPic}
              replay={replay}
              setReplay={setReplay}
              username={comment?.user?.username}
            />
          )}
        </>
      );
};

      export default Comment;
