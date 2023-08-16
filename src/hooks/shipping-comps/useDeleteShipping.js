import { useMutation } from "@tanstack/react-query";
import { api } from "../../service";

export const useDeleteShipping = ({onSuccess, onError}) => {
    return useMutation({
        mutationFn: async (id) => {
            return await api.delete(`/finance/shippingComps/${id}`)
        },
        onSuccess,
        onError,
    })
}