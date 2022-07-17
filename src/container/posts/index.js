import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectedUser } from "../../redux/features/socialMedia/selector";
import { useQuery } from '../../redux/features/socialMedia/service';
import './.css';



export default function Posts() {
  const [commentData, setCommentData] = useState({});
  const [commentReq, setCommentReq] = useState({});
  const { data, isFetching } = useQuery?.useGetCommentQuery(commentReq)
  const [deleteComment] = useQuery?.useDeleteCommentMutation();


  const user = useSelector(selectedUser());
  const posts = useQuery?.useGetPostAndAlbumQuery({
    type: "POST",
    userId: user?.id,
  })?.data;

  useEffect(() => {
    const commentClass = document.querySelectorAll('.comment-post');
    commentClass.forEach(comment => { comment.style.display = 'none' });
    if (commentData.id && !isFetching && !commentData.isShow) {
      const elementDisplay = document.getElementById(`comment-${commentData.id}`).style.display;
      document.getElementById(`comment-${commentData.id}`).style.display = elementDisplay === 'none' ? 'block' : 'none';
    }
  }, [commentData, isFetching])

  // useEffect(() => {
  //   console.log("status: ", status);
  //   console.log("dataDel: ", dataDel);
  // }, [dataDel, status])

  const handleOnclick = (type) => {
    console.log(type);
  };

  const handlePostOnClick = (data, type) => {
    switch (type) {
      case 'delete':
        deleteComment({ type: "POST", commentId: data.id })
        break;

      default:
        break;
    }
  };

  const handleCommentOnClick = (data, type) => {
    switch (type) {
      case 'get':
        const elementDisplay = document.getElementById(`comment-${data.id}`).style.display;
        const isShow = elementDisplay !== 'none';
        setCommentData({ ...data, isShow });
        setCommentReq({ type: "COMMENT", postId: data.id })
        break;

      case 'delete':
        deleteComment({ type: "COMMENT", commentId: data.id })
        console.log('delete');
        break;
      case 'update':
        console.log('update');
        break;
      default:
        console.log('other!');
        break;
    }
  };

  return (
    <div id="container-postpage">
      {posts?.map((post) => {
        return (
          <div className="cont-list">
            <h2>{post?.body}</h2>
            <button onClick={() => handleOnclick("update")}>EDIT</button>
            <button onClick={() => handlePostOnClick(post, "delete")}>DELETE</button>
            <button onClick={() => handleCommentOnClick(post, 'get')}>SEE COMMENT</button>
            <ul id={`comment-${post.id}`} className={'comment-post'} style={{ display: 'none', paddingLeft: '20px' }}>
              {data?.map((dataComment) => {
                return (
                  <li style={{ listStyleType: 'none', border: '1px solid red', margin: 10, padding: 10 }}>
                    <h4>{dataComment.body}</h4>
                    <button onClick={() => handleOnclick("update")}>EDIT</button>
                    <button onClick={() => handleCommentOnClick(dataComment, "delete")}>DELETE</button>
                  </li>
                )
              })}
            </ul>
            {/* : null} */}
          </div>
        );
      })}
    </div >
  );
}
