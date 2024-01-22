import React from "react";
import { auth } from "../utils/auth";

const Profile = async () => {
  const session = await auth();
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <img
        src={session?.user?.image?.toString()}
        alt=""
        className="border rounded-full h-[40px]"
      />
      <p></p>
    </div>
  );
};

export default Profile;
