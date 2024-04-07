import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const defaultTheme = createTheme();

export default function SignIn() {
    const [isChecked, setIsChecked] = React.useState(false);
    const [open, setOpen] = React.useState(true); 
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmNewPassword, setConfirmNewPassword] = React.useState('');
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = React.useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePasswordChange = (event) => {
        const { name, value } = event.target;
     
         if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'confirmNewPassword') {
            setConfirmNewPassword(value);
        }
    };

    const togglePasswordVisibility = (field) => {
        switch (field) {
            case 'newPassword':
                setShowNewPassword((prev) => !prev);
                break;
            case 'confirmNewPassword':
                setShowConfirmNewPassword((prev) => !prev);
                break;
            default:
                break;
        }
    };

    const handleUpdatePassword = () => {
        const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&#])[A-Za-z\d@$!%?&#]{8,}$/;
        if (!passwordRegex.test(newPassword)) {
            console.error('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one special character.');
            alert('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one special character.');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            alert("New Password and Confirm New Password don't match!");
            return;
        }
        setNewPassword('');
        setConfirmNewPassword('');
        setOpen(false);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: '10%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                        <DialogTitle>Update Password</DialogTitle>
                        <DialogContent dividers>
                            <Grid container spacing={4}>
                                <Grid item xs={6}>
                                    <Input
                                        fullWidth
                                        placeholder="New Password"
                                        name="newPassword"
                                        id="newPassword"
                                        color='success'
                                        type={showNewPassword ? 'text' : 'password'}
                                        value={newPassword}
                                        onChange={handlePasswordChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => togglePasswordVisibility('newPassword')}>
                                                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Input
                                        fullWidth
                                        placeholder="Confirm New Password"
                                        name="confirmNewPassword"
                                        id="confirmNewPassword"
                                        color='success'
                                        type={showConfirmNewPassword ? 'text' : 'password'}
                                        value={confirmNewPassword}
                                        onChange={handlePasswordChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => togglePasswordVisibility('confirmNewPassword')}>
                                                    {showConfirmNewPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                type="submit"
                                fullWidth
                                color='success'
                                variant="contained"
                                onClick={handleUpdatePassword}
                                sx={{
                                    borderRadius: 5,
                                    mt: 3,
                                    mb: 2,
                                    width: { xs: '100%', sm: 'auto' },
                                    marginRight: '10px'
                                }}
                                style={{
                                    backgroundColor: '#11BF4E',
                                    color: 'white',
                                }}
                            >
                                Update
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                color='success'
                                variant="contained"
                                onClick={handleClose}
                                sx={{
                                    borderRadius: 5,
                                    mt: 3,
                                    mb: 2,
                                    width: { xs: '100%', sm: 'auto' },
                                    marginRight: '10px'
                                }}
                                style={{
                                    backgroundColor: '#11BF4E',
                                    color: 'white',
                                }}
                            >
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
