const isLogin = async (req, res, next) => {
    try {
        if (req.session.user_id) {
           
            next();
        } else {
            
            res.redirect('/admin');
        }
    } catch (error) {
        console.log(error.message);
    }
};

const isLogout = async (req, res, next) => {
    try {
        if (req.session.user_id) {
           
            req.session.destroy((err) => {
                if (err) {
                    console.log(err.message);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.redirect('/admin/login');
                }
            });
        } else {
       
            next();
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    isLogin,
    isLogout
};
