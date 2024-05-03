import { useState } from "react";
import BlackJack from "../Components/Projects/BlackJack/blackJack";
import Drums from "../Components/Projects/drums/drums";
import Hookah from "../Components/Projects/hookahFlavors/Hookah";
import classes from "./projects.module.css";
import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";
import { AiTwotoneContacts } from "react-icons/ai";

export default function ProjectPage() {
  const [isChange, setIsChanged] = useState(false);

  const handleChange = (projectId) => {
    setIsChanged(projectId);
  };

  function onLeave() {
    setIsChanged(false);
  }

  return (
    <>
      <div className={classes.divback}>
        <Link className={classes.back} to="/home">
          <p>
            Contact <AiTwotoneContacts />
          </p>
        </Link>
        {/* <Link className={classes.back} to="/..">
          <p>
            Back <VscArrowLeft />
          </p>
        </Link> */}
      </div>
      <h1 className={classes.header}>
        A preview of some projects I have worked on
      </h1>
      <div className={classes.an}>
        <ul className={classes.container}>
          <li
            className={classes.hookah}
            style={{
              opacity: !isChange ? 1 : 0.8,
            }}
            onMouseOver={() => handleChange(true)}
            onMouseLeave={onLeave}
          >
            <Hookah flag={isChange} />
          </li>
          <li
            className={classes.drums}
            style={{
              opacity: !isChange ? 1 : 0.8,
            }}
            onMouseOver={handleChange}
            onMouseLeave={onLeave}
          >
            <Drums flag={isChange} />
          </li>
          <li
            className={classes.blackjack}
            style={{
              opacity: !isChange ? 1 : 0.8,
            }}
            onMouseOver={handleChange}
            onMouseLeave={onLeave}
          >
            <BlackJack flag={isChange} />
          </li>
          <li
            className={classes.blackjack}
            style={{
              opacity: !isChange ? 1 : 0.8,
            }}
            onMouseOver={handleChange}
            onMouseLeave={onLeave}
          >
            <BlackJack flag={isChange} />
          </li>
        </ul>
      </div>
      {isChange ? <p>IS CHANGED</p> : null}
    </>
  );
}
