import Command from "./components/comment";
import Post from "./components/Post";
import { data } from "./content/data";

function App() {
  return (
    <div className="container">
      <section className="active_box">
        {data.map((index, i) => (
          <>
            {index.comments.map((comment) => (
              <Command
                key={comment.id}
                comment={comment}
                replies={comment.replies}
                currentUser={index.currentUser.username}
                currentUserPic={index.currentUser.image.png}
                item={index}
              />
            ))}
            <Post
              key={i}
              currentUser={index.currentUser.username}
              currentUserPic={index.currentUser.image.png}
            />
          </>
        ))}
      </section>
    </div>
  );
}

export default App;
