import Api from "../../../services/Api"
import user from "../../../routes/user"


export default async (endpoint, id) => {
    const headers = user.getAdminAuthorizationHeader()

    endpoint += `/${id}`
    await Api.delete(endpoint, {headers})
}