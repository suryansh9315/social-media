import React, { useState, useEffect } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon,
  PaperAirplaneIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import Moment from "react-moment";

const Post = ({ post }) => {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", post.id, "comments"),
          orderBy("timeStamp", "desc")
        ),
        (snapshot) => {
          setComments(snapshot.docs);
          console.log(snapshot.docs);
        }
      ),
    [db, post.id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", post.id, "likes"), (snapshot) => {
        setLikes(snapshot.docs);
      }),
    [db, post.id]
  );

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const sendComment = async (e) => {
    e.preventDefault();
    const commentCopy = comment;
    setComment("");
    await addDoc(collection(db, "posts", post.id, "comments"), {
      comment: commentCopy,
      username: session.user.username,
      userImage: session.user.image,
      timeStamp: serverTimestamp(),
    });
  };

  const sendDeleteLike = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", post.id, "likes", session.user.uid));
      console.log("Like Added");
    } else {
      await setDoc(doc(db, "posts", post.id, "likes", session.user.uid), {
        username: session.user.username,
      });
      console.log("Like Deleted");
    }
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={post.data().profileImg}
          alt=""
        />
        <p className="flex-1 font-semibold">{post.data().username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      <img className="object-contain w-full" src={post.data().image} alt="" />
      {session && (
        <div className="flex items-center justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                onClick={sendDeleteLike}
                className="btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={sendDeleteLike} className="btn" />
            )}
            <ChatBubbleOvalLeftIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      <p className="p-5 truncate">
        <span className="font-semibold mr-1">{post.data().username} </span>
        {post.data().caption}
      </p>
      {comments.length > 1 && (
        <div className="ml-5 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-semibold">{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
              <Moment className="pr-5 text-xs" fromNow>
                {comment.data().timeStamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            className="border-none flex-1 outline-none focus:ring-0"
            placeholder="Add a comment..."
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            onClick={sendComment}
            disabled={!comment.trim()}
            type="button"
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
