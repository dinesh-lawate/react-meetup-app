import classes from './Layout.module.css'
import MainNavigation from './main-navigation';

export default function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    );
}