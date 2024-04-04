import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Video = () => {
  const { id } = useParams();
  const [randomRoomId, setRandomRoomId] = useState("45654");

  function randomNums() {
    let a = Math.floor(Math.random() * 1999 + 9999);
    const randomId = a.toString();
    setRandomRoomId(randomId);
  }
  useEffect(() => {
    randomNums();
  }, []);

  const roomID = randomRoomId;
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 425967371;
    const serverSecret = import.meta.env.VITE_APP_SERVERSCRET_ID;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      id
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Video;
