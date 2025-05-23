import { useQuery } from "@tanstack/react-query";
import UserService from "@services/UserService";

const useUserQuery = {
    getProfile: (jwtAuth) => {
        return useQuery({
            queryKey: ["userProfile", jwtAuth],
            queryFn: async () => {
                return await UserService.getUserProfile(jwtAuth);
            },
        });
    },
    validateUserOtp: (jwtAuth, userOtp) => {
        return useQuery({
            queryKey: ["userOTP", jwtAuth],
            queryFn: async () => {
                return await UserService.validateOtp(jwtAuth, userOtp);
            },
        });
    },
};

export default useUserQuery;
