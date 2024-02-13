import userServices from "@/services/user-services"
import { User } from "@/types/user-types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const useAddUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["user"],
    mutationFn: (data: User) => {
      return userServices.postUser(data)
    }, 
    onSuccess: () => {
      queryClient.invalidateQueries(["user"])
    }
  })
}

const useGetUsers = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return userServices.getUser()
    }
  })
}

const useGetUsersById = (userId: string | undefined) => {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: () => {
      return userServices.getUserById(userId)
    }
  })
}

const useUpdateUser = (userId: string | undefined) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["update-user"],
    mutationFn: (data: User) => {
      return userServices.updateUser(data, userId)
    }, 
    onSuccess: () => {
      queryClient.invalidateQueries(["update-user"])
    }
  })
}


const useDeleteUserById = (userId: string | undefined) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["delete-user"],
    mutationFn: (userId: string | undefined) => {
      return userServices.deleteUser(userId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["delete-user"])
    }
  })
}

export {
  useAddUser,
  useGetUsers,
  useGetUsersById,
  useUpdateUser,
  useDeleteUserById
}