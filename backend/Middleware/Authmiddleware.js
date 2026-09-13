const authMiddleware =  (req, res, next)=>{
      console.log(req.headers)
   const authHeader = req.headers
   console.log(authHeader)
   next
}
export default authMiddleware