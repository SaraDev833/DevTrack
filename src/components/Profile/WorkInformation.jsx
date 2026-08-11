import { BriefcaseBusiness, LocateFixed, UserRound ,Mail } from 'lucide-react'
import React from 'react'

const WorkInformation = ({user}) => {
  return (
      <div className="bg-white border border-slate-200 p-6 rounded-md shadow-sm">
      {/* Header */}
      <div className="flex gap-2 items-center mb-6">
        <div className="h-8 w-8 rounded-full bg-indigo-200/50 text-indigo-600 flex items-center justify-center">
          <BriefcaseBusiness size={16} />
        </div>
        <p className="text-slate-900 font-bold">Work Information</p>
      </div>

      {/* Information */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-6">
        {/* Full Name */}
        <div className="flex gap-2 border-b border-slate-200 pb-6">
          <div className="h-8 w-8 rounded-full bg-indigo-200/50 text-indigo-600 flex items-center justify-center">
            <UserRound size={16} />
          </div>

          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-slate-900 font-medium">Role</p>
            <span className="text-xs font-medium text-slate-900">
              {user.position}
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex gap-2 border-b border-slate-200 pb-6">
          <div className="h-8 w-8 rounded-full bg-indigo-200/50 text-indigo-600 flex items-center justify-center">
            <LocateFixed size={16} />
          </div>

          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-slate-900 font-medium">Joined At</p>
            <span className="text-xs font-medium text-slate-900">
              {user.joinedAt}
            </span>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-indigo-200/50 text-indigo-600 flex items-center justify-center">
            <Mail size={16} />
          </div>

          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-slate-900 font-medium">User Type</p>
            <span className="text-xs font-medium text-slate-900 break-all">
              {user.userType}
            </span>
          </div>
        </div>

        {/* Phone */}
        {/* <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-indigo-200/50 text-indigo-600 flex items-center justify-center">
            <Phone size={16} />
          </div>

          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-slate-900 font-medium">Phone</p>
            <span className="text-xs font-medium text-slate-900">
              {user.phone}
            </span>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default WorkInformation
