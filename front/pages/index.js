//next는 import React from 'react'; 가 필요없다.
import React from 'react';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return(
        <AppLayout>
            <div>Hello, Next!</div>
        </AppLayout>
    );
}

export default Home;