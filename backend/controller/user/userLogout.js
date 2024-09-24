async function userLogout(req, res){
    try{
        const tokenOption = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',  // Secure in production
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',  // None for cross-site cookies
            path: '/',
        };
          

        res.clearCookie("token",tokenOption)
        console.log("token verify",res.getHeaders());

        res.json({
            message : "Logged out successfully",
            error : false,
            success : true,
            data : []
        })
    }catch (err) {
        res.json({
        message: err.message || err,
        error: true,
        success: false,
        })
    }
}

module.exports = userLogout