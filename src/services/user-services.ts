import { User } from "@/types/user-types"
import axiosUsers from "@/utils/axios"
import { AxiosRequestConfig } from "axios"

class UsersServices {

  async postUser(data:User) {
    const res = await axiosUsers.post("/users", data)
    return res.data
  }

  async getUser() {
    const res = await axiosUsers.get("/users")
    return res.data
  }

  async getUserById(userId: string | undefined) {
    const res = await axiosUsers.get(`/users/${userId}`)
    return res.data
  }

  async updateUser(data:User, userId: string | undefined) {
    const res = await axiosUsers.put(`/users/${userId}`, data)
    return res.data
  }

  async deleteUser(userId: string | undefined) {
    console.log(userId)
    const res = await axiosUsers.delete(`/users/${userId}`)
    return res.data
  }

}

export default new UsersServices() 