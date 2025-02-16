import { tm } from '@/utils/tw-merge';

function Users(){
    return(
        <section className={tm('bg-[#E6EAF8]', 'px-[193px]', 'py-[173px]')}>
            <div className={tm('bg-white', 'rounded-md', 'px-[100px]', 'py-[100px]')}>
                <h1>Users</h1>
                <div>
                    <input type='text' className={tm('border-purple-900', 'border-[1px]', 'h-[50px]', 'px-[20px]')} placeholder='Search users'/>
                    <nav>
                        <a href="" class="active">Reputation</a>
                        <a href="">New users</a>
                        <a href="">Voters</a>
                        <a href="">Editors</a>
                        <a href="">Moderators</a>
                    </nav>
                </div>
            </div>
        </section>
    )
}
export default Users;