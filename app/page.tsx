import Guest from '@/compnonents/Guest';
import { currentUser } from '@clerk/nextjs/server';


export default async function Home() {
  const user = await currentUser();
    if (!user) {
    return <Guest />;
  }
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      Home page 
    </div>
  );
}
