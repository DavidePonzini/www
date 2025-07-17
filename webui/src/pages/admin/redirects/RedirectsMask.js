// Data placeholder for redirects data
function RedirectsMask({ source, setSource, target, setTarget }) {
    return (
        <>
            <div className='mb-3'>
                <label className='form-label'>Source</label>
                <input type='text' className='form-control' style={{fontFamily: 'monospace'}} defaultValue={source} onInput={(e) => setSource(e.target.value)} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Destination</label>
                <input type='text' className='form-control' style={{fontFamily: 'monospace'}} defaultValue={target} onInput={(e) => setTarget(e.target.value)} />
            </div>
        </>
    );
}

export default RedirectsMask;