import RedirectsMask from './RedirectsMask';
import ButtonModal from '../../../components/ButtonModal';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

function RedirectsUpdate({ source: redirectSource, target: redirectTarget, refresh, className }) {
    const { apiRequest } = useAuth();
    const [source, setSource] = useState(redirectSource);
    const [target, setTarget] = useState(redirectTarget);

    async function handleUpdate() {
        const response = await apiRequest('/api/redirects', 'PUT', {
            source: source,
            target: target,
        });

        if (response.success) {
            refresh();
        } else {
            alert(response.message || 'Failed to update redirect');
        }
    }

    return (
        <ButtonModal
            variant='warning'
            className={className}
            title='Edit Redirect'
            buttonText='Edit'
            size='lg'
            footerButtons={[
                {
                    text: 'Save',
                    variant: 'primary',
                    onClick: handleUpdate,
                    autoClose: true,
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

export default RedirectsUpdate;
