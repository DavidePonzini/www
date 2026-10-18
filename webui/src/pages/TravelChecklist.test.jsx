import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TravelChecklist from './TravelChecklist';
import useAuth from '../hooks/useAuth';

jest.mock('../hooks/useAuth');
jest.mock('../components/Layout', () => ({ children }) => <div>{children}</div>);
jest.mock('../components/SectionBackground', () => ({ children }) => <div>{children}</div>);
jest.mock('../components/Section', () => () => <div>Travel Checklist</div>);

const sections = [{ id: 1, category: 'Essentials', items: [{ id: 1, label: 'Water' }] }];
const key = 'travel-checklist-checked-item-labels';

beforeEach(() => {
    localStorage.clear();
    global.fetch = jest.fn().mockResolvedValue({ json: async () => ({ success: true, data: sections }) });
    useAuth.mockReturnValue({ isLoggedIn: false, loadingUser: false, userInfo: null, apiRequest: jest.fn() });
});

test('guest selections survive loading and remounting', async () => {
    localStorage.setItem(key, JSON.stringify(['Water']));
    const view = render(<TravelChecklist />);
    const checkbox = await screen.findByRole('checkbox');
    expect(checkbox.checked).toBe(true);
    expect(JSON.parse(localStorage.getItem(key))).toEqual(['Water']);
    fireEvent.click(checkbox);
    await waitFor(() => expect(checkbox.checked).toBe(false));
    view.unmount();
    render(<TravelChecklist />);
    expect((await screen.findByRole('checkbox')).checked).toBe(false);
});

test('logged in selections load from the server and reset there', async () => {
    const apiRequest = jest.fn().mockResolvedValue({ success: true, data: ['Water'] });
    useAuth.mockReturnValue({ isLoggedIn: true, loadingUser: false, userInfo: { username: 'alice' }, apiRequest });
    localStorage.setItem(key, JSON.stringify(['Guest item']));
    render(<TravelChecklist />);
    expect((await screen.findByRole('checkbox')).checked).toBe(true);
    expect(apiRequest).toHaveBeenCalledWith('/api/travel-checklist/selections');
    fireEvent.click(screen.getByText('Reset'));
    await waitFor(() => expect(screen.getByRole('checkbox').checked).toBe(false));
    expect(apiRequest).toHaveBeenCalledWith('/api/travel-checklist/selections', 'PUT', { labels: [] });
    expect(JSON.parse(localStorage.getItem(key))).toEqual(['Guest item']);
});

test('failed loads preserve guest selections', async () => {
    localStorage.setItem(key, JSON.stringify(['Water']));
    global.fetch.mockRejectedValue(new Error('Offline'));
    render(<TravelChecklist />);
    await screen.findByRole('alert');
    expect(JSON.parse(localStorage.getItem(key))).toEqual(['Water']);
    expect(screen.getByText('Reset').disabled).toBe(true);
});

test('checkboxes stay enabled and rapid changes save in order', async () => {
    let finishFirstSave;
    const firstSave = new Promise((resolve) => { finishFirstSave = resolve; });
    const apiRequest = jest.fn()
        .mockResolvedValueOnce({ success: true, data: [] })
        .mockReturnValueOnce(firstSave)
        .mockResolvedValue({ success: true });
    useAuth.mockReturnValue({ isLoggedIn: true, loadingUser: false, userInfo: { username: 'alice' }, apiRequest });
    global.fetch.mockResolvedValue({ json: async () => ({ success: true, data: [{
        ...sections[0], items: [...sections[0].items, { id: 2, label: 'Passport' }],
    }] }) });
    render(<TravelChecklist />);
    const water = await screen.findByRole('checkbox', { name: 'Water' });
    const passport = screen.getByRole('checkbox', { name: 'Passport' });
    fireEvent.click(water);
    expect(water.checked).toBe(true);
    expect(water.disabled).toBe(false);
    expect(passport.disabled).toBe(false);
    fireEvent.click(passport);
    expect(passport.checked).toBe(true);
    await waitFor(() => expect(apiRequest).toHaveBeenCalledTimes(2));
    expect(apiRequest).toHaveBeenLastCalledWith('/api/travel-checklist/selections', 'PUT', { labels: ['Water'] });
    finishFirstSave({ success: true });
    await waitFor(() => expect(apiRequest).toHaveBeenCalledTimes(3));
    expect(apiRequest).toHaveBeenLastCalledWith('/api/travel-checklist/selections', 'PUT', { labels: ['Water', 'Passport'] });
});
