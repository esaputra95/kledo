import { useMutation } from "@tanstack/react-query";
import { api } from "../../service";

export const useLogin= ({onSuccess, onError}) => {
    return useMutation({
        mutationFn: async (data) => {
            return await api.post(`/authentication/login`, data)
        },
        onSuccess,
        onError,
    })
}