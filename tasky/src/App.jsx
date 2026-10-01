import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from './components/Task';
import AddTaskForm from './components/Form';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import ChecklistIcon from '@mui/icons-material/Checklist';

const emptyForm = { title: "", description: "", deadline: "", priorityLevel: "" };

function App() {

  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", priorityLevel: "Low", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priorityLevel: "Medium", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", priorityLevel: "High", done: false }
    ]
  });

  const [formState, setFormState] = useState(emptyForm);
  const [snackOpen, setSnackOpen] = useState(false);

  const doneHandler = (id) => {
    const tasks = taskState.tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTaskState({ tasks });
  };

  const deleteHandler = (id) => {
    const tasks = taskState.tasks.filter((task) => task.id !== id);
    setTaskState({ tasks });
  };

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newTask = { ...formState, id: uuidv4(), done: false };
    setTaskState({ tasks: [...taskState.tasks, newTask] });
    setFormState(emptyForm);
    setSnackOpen(true);
  };

  return (
    <div className="container">
      {/* App Header */}
      <Container component="header" maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: 3,
            boxShadow: 3,
            p: 3,
            my: 4
          }}
        >
          <ChecklistIcon sx={{ fontSize: 48 }} />
          <Typography component="h1" variant="h3" sx={{ fontWeight: 700 }}>
            Tasky
          </Typography>
        </Box>
      </Container>
      {/* End App Header */}

      {/* Task Card Grid */}
      <Container maxWidth="md" component="main">
        {taskState.tasks.length === 0 ? (
          <Typography align="center" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
            No tasks yet. Add one below!
          </Typography>
        ) : (
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {taskState.tasks.map((task) => (
              <Task
                key={task.id}
                title={task.title}
                description={task.description}
                deadline={task.deadline}
                priorityLevel={task.priorityLevel}
                done={task.done}
                markDone={() => doneHandler(task.id)}
                deleteTask={() => deleteHandler(task.id)}
              />
            ))}
          </Grid>
        )}
      </Container>
      {/* End Task Card Grid */}

      {/* Footer - Add Task Form */}
      <Container
        component="footer"
        maxWidth="sm"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          my: 6,
          py: 6
        }}
      >
        <AddTaskForm
          form={formState}
          change={formChangeHandler}
          submit={formSubmitHandler}
        />
      </Container>
      {/* End Footer */}

      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Task added!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;