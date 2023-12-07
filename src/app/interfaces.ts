export interface fetchProfile {
    success: boolean,
    message: string,
    response: {
        userName: string,
        email: string,
        phoneNumber: number | null,
        socialLinks: {
            whatsApp: string,
            faceBook: string,
            instagram: string,
            snapChat: string,
            telegram: string
        } | null,
        bio: {
            quote: string,
            others: string
        } | null,
        profilePicture: string | null,
        createdAt: Date
    },
    status: number
}

// {
//     "success": true,
//         "message": "User Profile Fetch Success !",
//             "response": {
//         "id": 1,
//             "userName": "Admin_24",
//                 "email": "admin2428@mailinator.com",
//                     "phoneNumber": null,
//                         "socialLinks": null,
//                             "bio": {
//             "quote": "My life my rules !"
//         },
//         "profilePicture": "https://yt3.googleusercontent.com/2Q6rW4LmqUPhvz-e7h61OrIM352k6MXr5_aoqBhhjxNsZ0xe9JesD1QEV6ZFLQC4_nyT2ieW=s900-c-k-c0x00ffffff-no-rj",
//             "createdAt": "2023-11-24T06:46:18.000Z",
//                 "updatedAt": "2023-11-30T11:36:40.000Z",
//                     "deletedAt": null
//     },
//     "status": 200
// }