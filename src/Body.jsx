
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Hello.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));
const Body=()=>{
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return(
        <div>
            <div className='Guitar1'>
             <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="G">
            G
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Guitar"
        subheader="October 07, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMDTWk9PDPwnbUI00AHSAMbd1rvljgviINA&s"
        alt="Guitar"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Playing the guitar can help relieve stress and improve your mood.The guitar is a versatile instrument that allows you to express yourself through a range of sounds and techniques.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>About:</Typography>
          
          <Typography sx={{ marginBottom: 2 }}>
          guitar, Plucked stringed instrument. It normally has six strings, a fretted fingerboard, and a soundbox with a pronounced waist. It probably originated in Spain in the early 16th century. By 1800 it was being strung with six single strings; 19th-century innovations gave it its modern form. Modern classical guitar technique owes much to Francisco Tárrega (1852–1909), and Andrés Segovia gave the instrument prominence in the concert hall. However, it has always been primarily an amateur’s instrument, and it remains an important folk instrument in many countries. The 12-string guitar is strung in six double courses. 
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Special:
          </Typography>
          <Typography>
          Compared to wind, reed, percussion and bowed instruments which can play only one or two notes at a time, the guitar can play chords and melodically complex and interesting music. Third, the guitar is well suited to accompanying man's primary musical instrument — the human voice — in all its ranges and registers.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    <div className='Keyboard'>
             <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="G">
            K
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Keyboard"
        subheader="October 07, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="KeyBoard"
        
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        This article is about keyboards on musical instruments. For instruments referred to as "keyboards", see Keyboard instrument.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>About:</Typography>
          
          <Typography sx={{ marginBottom: 2 }}>
          A musical keyboard is the set of adjacent depressible levers or keys on a musical instrument. Keyboards typically contain keys for playing the twelve notes of the Western musical scale, with a combination of larger, longer keys and smaller, shorter keys that repeats at the interval of an octave. Pressing a key on the keyboard makes the instrument produce sounds—either by mechanically striking a string or tine (acoustic and electric piano, clavichord), plucking a string (harpsichord), causing air to flow through a pipe organ, striking a bell (carillon), or activating an electronic circuit (synthesizer, digital piano, electronic keyboard). 
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Special:
          </Typography>
          <Typography>
          There are many different types of keyboard instruments, including the piano, electric piano, organ, and accordion. You are probably familiar with the piano and electric piano (electric keyboard), but have you ever thought about what makes them different?
                  </Typography>
        </CardContent>
      </Collapse>
    </Card>
       </div>
       </div>
    )
}
export default Body;