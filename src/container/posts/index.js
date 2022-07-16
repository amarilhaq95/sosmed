import React from "react";
import { useSelector } from "react-redux";
import { selectedUser } from "../../redux/features/socialMedia/selector";
import { useQuery } from '../../redux/features/socialMedia/service';
import './user.css';

export default function Posts() {
    const user = useSelector(selectedUser());
    const posts = useQuery?.useGetPostAndAlbumQuery({ type: "POST",
          userId: user?.id,
        })?.data;

    const handleOnclick = (type) => {
        console.log(type);
    };

    return (
      <div id="container-userpage">
        {posts?.map((post) => {
          return (
            <div className="cont-list">
              <h2>{post?.title}</h2>
              <button onClick={() => handleOnclick("delete")}>DELETE</button>
              <button onClick={() => handleOnclick("update")}>UPDATE</button>
            </div>
          );
        })}
      </div>
    );
}
