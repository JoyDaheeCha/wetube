export const join = (req, res) => res.send("Join", {
    pageTitle: "Join"
});
export const login = (req, res) => res.send("Login", {
    pageTitle: "Login"
});
export const logout = (req, res) => res.send("Logout", {
    pageTitle: "Logout"
});

export const users = (req, res) => res.send("Users", {
    pageTitle: "Users"
});
export const usersDetails = (req, res) => res.send("Users details", {
    pageTitle: "Users details"
});
export const editProfile = (req, res) => res.send("Edit profile", {
    pageTitle: "Edit profile"
});
export const changePassword = (req, res) => res.send("Change password", {
    pageTitle: "Change password"
});