import { Link } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import Callendar from '../../components/UI/Callendar/Callendar';

import Logo from '../../assets/lotus.png';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <section className={classes.logo}>
        <img src={Logo} alt="Lotus logo" className={classes.lotus} />
        <h1 className={classes['logo-title']}>
          Lotus
          <br />
          SPA
        </h1>
      </section>
      <section className={classes.booking}>
        <Callendar />
        <Link to="/rooms">
          <Button btnStyle="green">Book online</Button>
        </Link>
        <Button btnStyle="grey">Log in</Button>
      </section>
    </>
  );
};

export default HomePage;
