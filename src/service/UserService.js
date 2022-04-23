import HttpService from "./HttpService";

const UserService = {
    login: async (username, password) => {
        try {
            let { data } = await HttpService.post("/api/login", { username, password })
            localStorage.setItem("token", data.token)
            return true;
        } catch (err) {
            return false
        }
    },
    profile: async () => {
        const { data } = await HttpService.get("/api/profil")
        return data
    }
}


export default UserService;