import React from 'react'

function User() {
    const { auth } = useAuth()
    return auth.user.email    // make a call to /user/:id
}

export default User