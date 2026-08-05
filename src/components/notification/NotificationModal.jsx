import React from 'react'

const NotificationModal = ({ notification ,setIsModalOpen}) => {
    console.log(notification)

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">

            <div className="bg-white rounded-xl p-6 w-[400px] ">


                <h2 className="font-bold text-lg">
                    {notification.title}
                </h2>


                <p className="mt-4 text-slate-600">
                    {notification.message}
                </p>


                <p className="mt-3 text-sm text-slate-400">
                    {notification.time}
                </p>


                <button
                       onClick={()=>setIsModalOpen(false)}
                    className="mt-5"
                >
                    Close
                </button>


            </div>

        </div>
    )

}

export default NotificationModal;


