module.exports = (req, res, next) => {
    // IF user is logged in
    if(req.user) {
        //cool - expected - allow them to proceed
        next();
    }
    else {
        // If not, do not let them in; make them login in first
        req.flash('error', 'You must be logged in to view this page!')
        res.redirect('/auth/login')
    }
   
   

}