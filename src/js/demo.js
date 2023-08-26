import { z } from './vendor/zod/index.mjs';

const config = {
    baseurl: "http://localhost:5000/server.php/api",
};

export const service = {

    config: {
        baseurl: `${config.baseurl}`,
    },

    //context: HttpContext,

    services: {

        TokenService: {

            //context: ApiContext,
            config: {
                baseurl: `${config.baseurl}/token`,
            },
            
            methods: {

                Get2FADevices: {
                    url: "/",
                    method: "POST",
                    data: z.object({
                        email: z.string().email(),
                        password: z.string().min(1)
                    }),
                },
                
                GetAccessToken: {
                    url: "/",
                    method: "POST",
                    data: z.object({
                        email: z.string().email(),
                        password: z.string().min(1),
                        device: z.number().min(1),
                        type: z.enum(["email", "mobile"]),
                    })
                },

                GetRefreshToken: {
                    url: "/refresh",
                    method: "POST"
                },

            }
        
        }

    }

}; export default service;