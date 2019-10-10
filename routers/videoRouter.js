import express from "express";
import routes from "../routes";
import {
    videos,
    videoDetails,
    editVideo,
    deleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.videoDetail, videoDetails);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;