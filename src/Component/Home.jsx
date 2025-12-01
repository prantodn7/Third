import React from 'react';
import Form from './Contact/Form';
import Bestwish from './Bestwish';
import Download from './Download';
import Testimonial from './Testimonial';
import Cap from './Cap';
import Cover from '../Cover';

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <Form></Form>
            <Cap></Cap>
            <Bestwish></Bestwish>
            <Download></Download>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;