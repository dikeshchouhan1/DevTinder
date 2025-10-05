# DevTinder APIs

## authRouter
- POST/profile/view
- POST/profile/edit
- POST/profile/password

## profileRouter
- POST/request/send/intereted/:userId
- POST/request/send/ignored/:userId

## connectionRequestRouter
- POST/request/review/accepted/:requestId
- POST/request/review/rejected/:requestId

## UserRouter
- GET/user/connections
- GET/user/requests/received
- GET/user/feed - Get you the profile of other users on platform

Status: ignore, interested , accepted , rejected