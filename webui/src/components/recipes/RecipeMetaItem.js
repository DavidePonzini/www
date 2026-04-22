function RecipeMetaItem({ icon, children, detail = null }) {
    if (children === undefined || children === null || children === '') {
        return null;
    }

    const iconNode = typeof icon === 'string'
        ? <i className={icon} aria-hidden='true' />
        : icon;

    return (
        <tr>
            <td style={{ width: '2.5rem', textAlign: 'center' }}>
                <span
                    style={{
                        opacity: 0.75,
                        width: '1.25rem',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}
                >
                    {iconNode}
                </span>
            </td>
            <td>
                <div>{children}</div>
                {detail && (
                    <div style={{ fontSize: '0.95rem', opacity: 0.75 }}>
                        {detail}
                    </div>
                )}
            </td>
        </tr>
    );
}

export default RecipeMetaItem;
