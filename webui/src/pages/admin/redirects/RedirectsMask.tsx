import type { ChangeEvent } from 'react';

// Data placeholder for redirects data
type RedirectsMaskProps = {
    source: string;
    setSource: (value: string) => void;
    target: string;
    setTarget: (value: string) => void;
};

function RedirectsMask({ source, setSource, target, setTarget }: RedirectsMaskProps) {
    function handleSourceChange(event: ChangeEvent<HTMLInputElement>) {
        setSource(event.currentTarget.value);
    }

    function handleTargetChange(event: ChangeEvent<HTMLInputElement>) {
        setTarget(event.currentTarget.value);
    }

    return (
        <>
            <div className='mb-3'>
                <label className='form-label'>Source</label>
                <input type='text' className='form-control' style={{fontFamily: 'monospace'}} value={source} onChange={handleSourceChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Destination</label>
                <input type='text' className='form-control' style={{fontFamily: 'monospace'}} value={target} onChange={handleTargetChange} />
            </div>
        </>
    );
}

export default RedirectsMask;
