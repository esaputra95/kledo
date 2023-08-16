import { useQuery } from "@tanstack/react-query";
import { api } from "../../service";

export const useFetShipping = (params) => {
    return useQuery({
        queryFn: async () => {
            const response = await api.get(`/finance/shippingComps`, { params: { name: params } })
            return response.data.data
        },
        refetchOnWindowFocus: false,
        queryKey:['get-shipping'],
    })
}