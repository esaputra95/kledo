import { useMutation } from "@tanstack/react-query";
import { api } from "../../service";

export const usePostShipping = ({onSuccess, onError}) => {
    return useMutation({
        mutationFn: async (data) => {
            if(data.id){
                return await api.put(`/finance/shippingComps/${data.id}`, data)
            }else{
                return await api.post(`/finance/shippingComps`, data)
            }
        },
        onSuccess,
        onError,
    })
}