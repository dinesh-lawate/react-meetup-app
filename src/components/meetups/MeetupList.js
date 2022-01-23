import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css';


export default function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {
                props.meetups.map(x => {
                    return <MeetupItem key={x.id}
                        image={x.image} title={x.title}
                        address={x.address} description={x.description} />
                })
            }
        </ul>
    );
}