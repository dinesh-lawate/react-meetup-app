import MeetupItem from "./MeetupItem";


export default function MeetupList(props) {
    return (
        <ul>
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