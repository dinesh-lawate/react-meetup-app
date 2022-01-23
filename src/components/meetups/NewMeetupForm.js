import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

export default function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function onSubmit(event) {
        event.preventDefault();

        const title = titleInputRef.current.value;
        const image = imageInputRef.current.value;
        const address = addressInputRef.current.value;
        const description = descriptionInputRef.current.value;

        const meetup = {
            title,
            image,
            address,
            description
        }

        props.onAddMeetup(meetup);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={onSubmit}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' id='title' required ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' id='image' required ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' id='address' required ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef} />
                </div>
                <div className={classes.action}>
                    <button>Submit</button>
                </div>
            </form>
        </Card>
    );
}