import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetups() {
    const navigate = useNavigate();

    function onAddMeetupHandler(meetupData) {
        fetch('https://react-meetup-app-81f38-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                navigate('/');
            });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </section>
    );
}