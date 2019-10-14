import routes from "../routes";
import User from "../models/User"

export const getJoin = (req, res) => {
    res.render("join", {
        pageTitle: "Join"
    });
};

export const postJoin = async (req, res) => {
    const {
        body: {
            name,
            email,
            password,
            password2
        }
    } = req;

    if (password !== password2) {
        res.status(400);
        res.render("join", {
            pageTitle: "Join"
        });
    } else {
        try {
            //To Do: Register User
            const user = await User({
                name,
                email
            });
            //To Do: Log user in 
            await User.register(user, password);
        } catch (error) {
            console.log(error);
        }
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => {
    res.render("login", {
        pageTitle: "Login"
    });
};

export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    //To do: process Lout out
    res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", {
    pageTitle: "Users"
});
export const userDetail = (req, res) => res.render("userDetail", {
    pageTitle: "Users details"
});
export const editProfile = (req, res) => res.render("editProfile", {
    pageTitle: "Edit profile"
});
export const changePassword = (req, res) => res.render("changePassword", {
    pageTitle: "Change password"
});