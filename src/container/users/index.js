import React from "react";
import { useQuery } from '../../redux/features/socialMedia/service';
import './.css';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../../redux/features/socialMedia/actions";

export default function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usersData = useQuery.useGetUsersQuery().data;

  const handleClickButton = (path, user) => {
    dispatch(setSelectedUser(user));
    navigate(path);
  };

  return (
    <div id="container-userpage">
      <ul class="list">
        {
          usersData?.map((user) => {
            return (
              <li className="cont-list">
                <h2>{user?.name}</h2>
                <button
                  onClick={() => handleClickButton("/posts", user)}
                >
                  GO TO POST
                </button>
                <button
                  onClick={() => handleClickButton("/album", user)}
                >
                  GO TO ALBUM
                </button>
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}
