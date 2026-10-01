import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteIcon from '@mui/icons-material/Delete';
import EventIcon from '@mui/icons-material/Event';

const priorityColors = { High: 'error', Medium: 'warning', Low: 'success' };

const Task = (props) => {
    return (
        // Exercise 4: 1 per row on phones, 2 on tablets, 3 on larger screens
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            {/* Exercise 1: sx styling */}
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    borderTop: 6,
                    borderColor: props.done ? 'grey.500' : 'primary.main',
                    backgroundColor: props.done ? 'grey.200' : 'background.paper',
                    opacity: props.done ? 0.7 : 1,
                    boxShadow: 3,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 }
                }}
            >
                <CardHeader
                    sx={{ textAlign: 'center', pb: 1 }}
                    title={
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                textDecoration: props.done ? 'line-through' : 'none'
                            }}
                        >
                            {props.title}
                        </Typography>
                    }
                />

                <CardContent sx={{ flexGrow: 1 }}>
                    {/* Exercise 3: Stack + Chip */}
                    <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', mb: 2 }}>
                        <Chip
                            icon={<EventIcon />}
                            label={props.deadline}
                            variant="outlined"
                            size="small"
                        />
                        <Chip
                            label={props.priorityLevel ?? 'No priority'}
                            color={priorityColors[props.priorityLevel] ?? 'default'}
                            size="small"
                        />
                    </Stack>

                    {/* Exercise 3: Divider */}
                    <Divider sx={{ mb: 2 }} />

                    <Typography
                        variant="body1"
                        align="center"
                        sx={{ fontStyle: 'italic', color: 'text.secondary' }}
                    >
                        {props.description}
                    </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                    {/* Exercise 2: icon inside a Button via startIcon */}
                    <Tooltip title={props.done ? 'Mark as not done' : 'Mark as done'}>
                        <Button
                            variant="contained"
                            size="small"
                            color="success"
                            startIcon={props.done ? <UndoIcon /> : <CheckCircleIcon />}
                            onClick={props.markDone}
                            sx={{ borderRadius: 5, textTransform: 'none', px: 2 }}
                        >
                            {props.done ? 'Undo' : 'Done'}
                        </Button>
                    </Tooltip>

                    {/* Exercise 3: IconButton + Tooltip */}
                    <Tooltip title="Delete this task">
                        <IconButton color="error" onClick={props.deleteTask} aria-label="delete task">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Task;