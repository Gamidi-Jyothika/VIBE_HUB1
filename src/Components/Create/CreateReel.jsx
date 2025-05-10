import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { FaPhotoVideo } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import SpinnerCard from "../Spinner/Spinner"; // Adjust the path if your Spinner is in another directory
import { uploadMediaToCloudinary } from "../../Config/UploadVideoToCloudnary"; // Adjust the path as needed
import { createReel } from "../../Redux/Reel/Action";

const CreateReelModal = ({ onOpen, isOpen, onClose }) => {
  const finalRef = React.useRef(null);
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { user } = useSelector((store) => store);
  const [videoUrl, setVideoUrl] = useState();
  const [postData, setPostData] = useState({
    video: "",
    caption: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleOnChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setFile(file);
      setIsUploading(true);

      try {
        const url = await uploadMediaToCloudinary(file);
        setPostData((prevValues) => ({ ...prevValues, video: url }));
        setVideoUrl(URL.createObjectURL(file));
      } catch (error) {
        alert("Failed to upload video. Please try again.");
      } finally {
        setIsUploading(false);
      }
    } else {
      alert("Please select a video file.");
    }
  };

  const handleSubmit = async () => {
    if (!postData.video) {
      alert("Please upload a video before sharing.");
      return;
    }

    const data = {
      jwt: token,
      reelData: postData,
    };

    setIsUploading(true);

    try {
      await dispatch(createReel(data));
      handleClose();
    } catch (error) {
      alert("Failed to create reel. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  function handleClose() {
    onClose();
    setFile(null);
    setIsDragOver(false);
    setPostData({ video: "", caption: "", location: "" });
    setVideoUrl("");
  }

  return (
    <div>
      <Modal size={"4xl"} finalFocusRef={finalRef} isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent fontSize={"sm"}>
          <div className="flex justify-between py-1 px-10 items-center">
            <p>Create New Reel</p>
            <Button onClick={handleSubmit} colorScheme="blue" size={"sm"} variant="ghost" disabled={isUploading}>
              {isUploading ? "Sharing..." : "Share"}
            </Button>
          </div>

          <hr />

          <ModalBody>
            <div className="modalBodyBox flex h-[70vh] justify-between">
              <div className="w-[50%] flex flex-col justify-center items-center">
                {!videoUrl && !isUploading && (
                  <div className="drag-drop h-full">
                    <FaPhotoVideo className="text-3xl" />
                    <p>Drag videos here or select from computer</p>
                    <label htmlFor="file-upload" className="custom-file-upload">
                      Select from computer
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      accept="video/*"
                      onChange={handleOnChange}
                    />
                  </div>
                )}

                {isUploading && <SpinnerCard />}

                {videoUrl && !isUploading && (
                  <video width="60%" controls className="object-contain">
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                )}
              </div>

              <div className="w-[1px] border h-full"></div>

              <div className="w-[50%]">
                <div className="flex items-center px-2">
                  <img
                    className="w-7 h-7 rounded-full"
                    src={user?.reqUser?.image || "default-avatar.png"}
                    alt=""
                  />
                  <p className="font-semibold ml-4">{user?.reqUser?.username}</p>
                </div>
                <textarea
                  className="captionInput"
                  placeholder="Write a caption..."
                  name="caption"
                  rows="4"
                  onChange={handleInputChange}
                  value={postData.caption}
                />
                <hr />
                <div className="p-2 flex items-center">
                  <input
                    className="locationInput"
                    type="text"
                    placeholder="Add Location"
                    name="location"
                    onChange={handleInputChange}
                    value={postData.location}
                  />
                  <GoLocation />
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateReelModal;
