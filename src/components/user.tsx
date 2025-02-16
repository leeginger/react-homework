//import { useState } from 'react';
import { tm } from '@/utils/tw-merge';

function Users(){
    const newUsers = ["Lelah Nichols", "Jesus Weiss", "Annie Rice", "Robert Brower", "Amy Campbell", "Anthony S. Morin"];

    return(
        <section className={tm('bg-[#E6EAF8]', 'px-[193px]', 'py-[173px]')}>
            <div className={tm('bg-white', 'rounded-md', 'px-[100px]', 'py-[100px]')}>
                <h1>Users</h1>
                <div className='flex justify-between'>
                    <input type='text' className={tm('border-purple-900', 'border-[1px]', 'h-[50px]', 'px-[20px]')} placeholder='Search users'/>
                    <nav>
                        <a href="">Reputation</a>
                        <a href="">New users</a>
                        <a href="">Voters</a>
                        <a href="">Editors</a>
                        <a href="">Moderators</a>
                    </nav>
                </div>
                <ul className='flex items-center justify-between flex-wrap gap-[20px]'>
                    {newUsers.map((user,index) => (
                    <li key={index} className='w-[33.3%]'>
                        <figure>
                            <img src={`/images/user-${index + 1}.svg`} />
                            <figcaption>{user}</figcaption>
                        </figure>
                    </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Users;