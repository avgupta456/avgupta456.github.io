import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import {Typography} from '@material-ui/core';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import styles from './Timeline.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography,
    padding: theme.spacing(1),
  },
}));

function TimelineElement({title, location, date, details, color}) {
  const classes = useStyles();
  
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ border: `3px solid ${color}`, color: '#000' }}
      contentArrowStyle={{ borderRight: `7px solid  ${color}` }}
      date={date}
      dateClassName={classes.root}
      iconStyle={{ background: `${color}`, color: '#fff' }}
      icon={<WorkIcon />}
    >
      <Typography variant="h6" className="vertical-timeline-element-title">{title}</Typography>
      <Typography variant="subtitle2" className="vertical-timeline-element-subtitle">{location}</Typography>
      <Typography>{details}</Typography>
    </VerticalTimelineElement>
  )
}

export default function Timeline(props) {
  const primary_light = '#7986cb'
  const secondary = '#f50057'

  return (
    <VerticalTimeline
      animate={true}
      layout={'2-columns'}
      className={styles.line}
    >
      <TimelineElement
        title = "Undergraduate Researcher | Yale University (Interactive Machines Group)"
        location = "New Haven, Connecticut"
        date = "January 2020 - Present"
        details = "Developing a deep learning pipeline studying social group phenomena in the context of human-robot interaction (HRI); to be implemented on the Yale IMG Shutter Robot. Using Python, TensorFlow, and ROS."
        color = {secondary}
      />
      <TimelineElement
        title = "Data Warehouse Intern | RTI International"
        location = "Raleigh, North Carolina"
        date = "May 2020 - August 2020"
        details = "FILL IN"
        color = {primary_light}
      />
      <TimelineElement
        title = "Computer Science Instructor | Juni Learning"
        location = "Remote"
        date = "February 2020 - July 2020"
        details = "Teach middle school and high school students computer science fundamentals (in Java and Python) through the online Juni Learning platform."
        color = {primary_light}
      />
      <TimelineElement
        title = "Undergraduate Researcher | Yale University (LILY Lab)"
        location = "New Haven, Connecticut"
        date = "August 2019 - December 2019"
        details = "Developed machine learning models classifying salient events in physics simulations as part of a project studying implicit physical reasoning in the Facebook AI PHYRE Project; in collaboration with Salesforce Research. Used Python, scikit-learn."
        color = {primary_light}
      />
      <VerticalTimelineElement
        iconStyle={{ background: '#4caf50', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}
