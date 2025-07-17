import ButtonModal from '../../../components/ButtonModal';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import RedirectsMask from './RedirectsMask';

// Button to add a new redirect
function RedirectsAdd({ refresh }) {
    const { apiRequest } = useAuth();
    const [source, setSource] = useState('');
    const [target, setTarget] = useState('');

    async function handleAdd() {
        const response = await apiRequest('/api/redirects', 'POST', {
            'source': source,
            'target': target,
        });

        if (response.success) {
            refresh();
        } else {
            alert(response.message || 'Failed to add redirect');
        }
    }
    return (
        <ButtonModal
            variant='primary'
            title='New Redirect'
            size='lg'
            buttonText={
                <span>
                    <i className='fa fa-plus me-1'></i> New Redirect
                </span>
            }
            footerButtons={[
                {
                    text: 'Save',
                    variant: 'primary',
                    onClick: handleAdd,
                    autoClose: true,
                    disabled: !source || !target,
                },
            ]}
        >
            <RedirectsMask
                source={source}
                setSource={setSource}
                target={target}
                setTarget={setTarget}
            />
        </ButtonModal>
    );
}

export default RedirectsAdd;