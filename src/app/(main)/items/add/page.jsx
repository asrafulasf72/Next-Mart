import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import AddItemForm from '@/components/Items/AddItemForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

 const AddItemPage =async () => {
    const session=await getServerSession(authOptions)

    if(!session){
        redirect("/login")
    }
  return (
     <div className="max-w-5xl mx-auto px-6 py-16">
      <AddItemForm />
    </div>
  )
}
export default AddItemPage;