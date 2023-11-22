export interface SignUpUser{
    success: boolean,
    message: string,
    response: {
        id: number,
        email: string,
        password: string,
        updatedAt: string,
        createdAt:string
    },
    status: number
}
// {
//     "success": true,
//         "message": "Registered successfully !",
//             "response": {
//         "id": 1,
//             "userName": "selva",
//                 "email": "selva@mailinator.com",
//                     "password": "$2b$04$TpJcvI9ABv0w6WzAKfmaYuYv5DHfzccOJ/v4/fGDa/a8kbxpwQegy",
//                         "updatedAt": "2023-11-22T07:03:45.762Z",
//                             "createdAt": "2023-11-22T07:03:45.762Z"
//     },
//     "status": 200
// }
export interface SignInUser{
    success: boolean,
    message: string,
    response: {
        id: number,
        userName: string,
        password: string,
        JWT_Token:string
    },
    status: number
}
// {
//     "success": true,
//         "message": "User Logined Successfully !",
//             "response": {
//         "id": 1,
//             "userName": "selva",
//                 "email": "selva@mailinator.com",
//                     "password": "$2b$04$TpJcvI9ABv0w6WzAKfmaYuYv5DHfzccOJ/v4/fGDa/a8kbxpwQegy",
//                         "phoneNumber": null,
//                             "socialLinks": null,
//                                 "bio": null,
//                                     "profilePicture": null,
//                                         "createdAt": "2023-11-22T07:03:45.000Z",
//                                             "updatedAt": "2023-11-22T07:03:45.000Z",
//                                                 "deletedAt": null,
//                                                     "JWT_Token": "U2FsdGVkX19KY3YXfPSp3pI21A1c6VdM3UBmtoJytW2Xqr9rxbBa/fDFun0Ztjk3Z54xt49xL+vQrtx4kHI/7gFBw4c/AlOE/bkh7LSQKZ22s978r+n8bC8Ses0NHinD51PG85+oyv/sJ0ZjN11+KT/fb0xoOKrkgVv5ol5Kb8F6kHOrCOlmeGL3USfa5KfIyOpFYWkKr02MSCx2V76ctdMzq2M/IKiOutbvFgPe1sTdQbrfmNRTCwSJ4q6mxbBse3yupPcuVQBQVAPOqshQ3eyN0OSbdPHF0QQUn3mnTJH07N8EhppuWdCI6vMwzXPK"
//     },
//     "status": 200
// }