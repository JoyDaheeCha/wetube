export const home = (req, res) => res.render("home", {
    pageTitle: "Home"
});
export const search = (req, res) => res.render("search", {
    pageTitle: "Search"
});

export const videos = (req, res) => res.render("upload", {
    pageTitle: "Upload"
});
export const videoDetails = (req, res) => res.render("videoDetail", {
    pageTitle: "Video Details"
});
export const editVideo = (req, res) => res.render("editVideo", {
    pageTitle: "Edit Video"
});
export const deleteVideo = (req, res) => res.render("deleteVideo", {
    pageTitle: "Delete Video"
});