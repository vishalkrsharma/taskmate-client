import Login from '@/components/auth/login';
import Signup from '@/components/auth/signup';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Auth = () => {
  return (
    <div className='flex justify-center items-center min-h-screen font-victor'>
      <Tabs
        defaultValue='login'
        className='w-[400px]'
      >
        <TabsList className='w-full mb-4'>
          <TabsTrigger
            value='login'
            className='flex-1 font-bold'
          >
            Log in
          </TabsTrigger>
          <TabsTrigger
            value='signup'
            className='flex-1 font-bold'
          >
            Sign up
          </TabsTrigger>
        </TabsList>
        <div className='border p-4 rounded-md'>
          <TabsContent value='login'>
            <Login />
          </TabsContent>
          <TabsContent value='signup'>
            <Signup />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Auth;
