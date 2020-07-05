import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 30,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    marginLeft: 5,
    padding: 10,
    backgroundColor: "#eeeeee",
  }
});

const ProjectCard = (props) => {
  const classes = useStyles()

  const actions = Object.keys(props.links).map(key => {
    const buttonLabel = (key === "more") ? "learn more" : key
    return (
        <div key={key}>
          <Button className={classes.button} size="medium" href={props.links[key]}>{buttonLabel}</Button>
        </div>
    )
  })
  
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.date}
        </Typography>
        <Typography variant="body2" component="p">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        {actions}
      </CardActions>
    </Card>
  )
}

export default ProjectCard
