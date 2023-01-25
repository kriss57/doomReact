import React from 'react';
import Gretting from '@/components/Gretting';

const Home = (props) => {
    console.log(props)

    // déstructurer props object
    const { name, age, majeur } = props
    console.log(name, age, majeur);

    return (
        <div>
            <Gretting />
            <p style={{ color: 'white', backgroundColor: 'purple' }}>Home {props.name}!</p>
        </div>
    );
};

export default Home;