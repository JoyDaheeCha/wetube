export const join = (req, res) => res.render("Join", {
    pageTitle: "Join"
});
export const login = (req, res) => res.render("Login", {
    pageTitle: "Login"
});
export const logout = (req, res) => res.render("Logout", {
    pageTitle: "Logout"
});

export const users = (req, res) => res.render("Users", {
    pageTitle: "Users"
});
export const usersDetails = (req, res) => res.render("Users details", {
    pageTitle: "Users details"
});
export const editProfile = (req, res) => res.render("Edit profile", {
    pageTitle: "Edit profile"
});
export const changePassword = (req, res) => res.render("Change password", {
    pageTitle: "Change password"
});