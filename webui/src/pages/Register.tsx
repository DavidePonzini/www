import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthShell from '../components/AuthShell';

function Register() {
    const [usernameInput, setUsernameInput] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(false);

    const [passwordInput, setPasswordInput] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    function checkUsername(username: string) {
        setUsernameInput(username);

        if (!username) {
            setIsUsernameValid(false);
            setUsernameError('Please enter a username.');
            return false;
        }

        setIsUsernameValid(true);
        setUsernameError('');
        return true;
    }

    function checkPassword(password: string) {
        setPasswordInput(password);

        if (!password) {
            setIsPasswordValid(false);
            setPasswordError('Please enter a password.');
            return false;
        }

        if (password.length < 8) {
            setIsPasswordValid(false);
            setPasswordError('Password must be at least 8 characters long.');
            return false;
        }

        if (!/[A-Z]/.test(password)) {
            setIsPasswordValid(false);
            setPasswordError('Password must contain at least one uppercase letter.');
            return false;
        }

        if (!/[a-z]/.test(password)) {
            setIsPasswordValid(false);
            setPasswordError('Password must contain at least one lowercase letter.');
            return false;
        }

        if (!/[0-9]/.test(password)) {
            setIsPasswordValid(false);
            setPasswordError('Password must contain at least one number.');
            return false;
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setIsPasswordValid(false);
            setPasswordError('Password must contain at least one special character.');
            return false;
        }

        setIsPasswordValid(true);
        setPasswordError('');
        return true;
    }

    async function handleRegister(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: usernameInput,
                    password: passwordInput,
                })
            });

            const data = await response.json();
            console.log(data);

            if (data.success) {
                setError('');
                setSuccess(true);
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (error) {
            setError('Could not connect to the server.');
        }
    }

    return (
        <AuthShell
            title="Register a new account"
            alternateHref="/login"
            alternateLabel="Already have an account? Log in here"
            feedback={(
                <>
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="alert alert-success" role="alert">
                            Registration successful! You can now log in with your new account.
                            <br />
                            <Link to="/login" className="alert-link">Go to Login</Link>
                        </div>
                    )}
                </>
            )}
        >
            <form onSubmit={handleRegister} noValidate>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="login-username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="login-username"
                        className={`form-control form-control-lg ${usernameError ? 'is-invalid' : ''}`}
                        placeholder="Username"
                        value={usernameInput}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => checkUsername(event.currentTarget.value)}
                        autoFocus={true}
                    />
                    {usernameError && (
                        <div className="invalid-feedback">
                            {usernameError}
                        </div>
                    )}
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="login-password">
                        Password
                    </label>

                    <div className="input-group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="login-password"
                            className={`form-control form-control-lg pe-5 ${passwordError ? 'is-invalid' : ''}`}
                            placeholder="Password"
                            value={passwordInput}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => checkPassword(event.currentTarget.value)}
                        />
                        <div
                            className="input-group-text"
                            style={{ cursor: 'pointer' }}
                        >
                            <i
                                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                style={{ width: '1.5rem' }}
                            ></i>
                        </div>
                        {passwordError && (
                            <div className="invalid-feedback">
                                {passwordError}
                            </div>
                        )}
                    </div>
                </div>

                <div className="pt-1 mb-4">
                    <button
                        className="btn btn-primary btn-lg btn-block w-100"
                        type="submit"
                        disabled={!isUsernameValid || !isPasswordValid}
                    >
                        Register
                    </button>
                </div>
            </form>
        </AuthShell>
    );
}

export default Register;
