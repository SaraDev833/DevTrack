import Notification from "../Models/Notification.js";

const getNotification =async(req ,res)=>{
const userId = req.user.userId;
try {
    const recipient = await Notification.find({
        recipient: userId
    }).populate("recipient" , "name")
    res.json({
        recipient
    })
} catch (error) {
    console.log(error)
    res.json({
        message:"Not able to fetch notifications!"
    })
}
}
const deleteNotifications=async(req,res)=>{
try {
         const currentUser = req.user.userId
        await Notification.deleteMany({
            recipient:currentUser
        })
        res.json({
            message:"Notifications has been deleted!"
        })
} catch (error) {
    console.log(error)
    res.json({
        message:"There are some error in clearing notifications!"
    })
}


}
export {getNotification, deleteNotifications}