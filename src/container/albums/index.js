import React from "react";
import { useSelector } from "react-redux";
import { selectedUser } from "../../redux/features/socialMedia/selector";
import { useQuery } from '../../redux/features/socialMedia/service';
import './.css';

export default function Album() {
    const user = useSelector(selectedUser());
    const album = useQuery?.useGetPostAndAlbumQuery({type : "ALBUM", userId: user?.id})?.data;

    return (
      <div id="container-albumpage">
        {album?.map((user) => {
          return (
            <div className="cont-list">
              <h2>{user?.title}</h2>
            </div>
          );
        })}
      </div>
    );
}
