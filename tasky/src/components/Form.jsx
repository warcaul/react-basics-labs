import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

const AddTaskForm = (props) => {

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
            }}
            onSubmit={props.submit}
        >
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                Add a New Task
            </Typography>

            <div>
                <TextField
                    required
                    name="title"
                    label="Task Title"
                    value={props.form.title}
                    slotProps={{ inputLabel: { shrink: true } }}
                    onChange={props.change}
                />
            </div>

            <div>
                <TextField
                    required
                    name="deadline"
                    label="Deadline"
                    type="date"
                    value={props.form.deadline}
                    slotProps={{ inputLabel: { shrink: true } }}
                    onChange={props.change}
                />
            </div>

            <div>
                <TextField
                    select
                    required
                    name="priorityLevel"
                    label="Priority"
                    value={props.form.priorityLevel}
                    slotProps={{ inputLabel: { shrink: true } }}
                    onChange={props.change}
                >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                </TextField>
            </div>

            <div>
                <TextField
                    name="description"
                    label="Task Details"
                    multiline
                    rows={4}
                    value={props.form.description}
                    slotProps={{ inputLabel: { shrink: true } }}
                    onChange={props.change}
                />
            </div>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                sx={{
                    m: 1,
                    p: 1,
                    width: '30ch',
                    borderRadius: 5,
                    textTransform: 'none'
                }}
            >
                Add Task
            </Button>
        </Box>
    );
};

export default AddTaskForm;