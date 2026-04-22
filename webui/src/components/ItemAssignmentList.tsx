import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

type AssignmentItem = {
    id: string;
    label: string;
    isAssigned: boolean;
};

type ItemAssignmentListProps = {
    fetchItems: () => Promise<AssignmentItem[]>;
    assignAction: (id: string, value: boolean) => Promise<void>;
    title?: string;
    disabledItems?: string[];
};

function ItemAssignmentList({
    fetchItems,             // async () => [{ id, label, isAssigned }]
    assignAction,           // async (id: string, value: boolean) => void
    title = 'Assign to',    // UI label above the list
    disabledItems = [],     // List of items that should be disabled
}: ItemAssignmentListProps) {
    const [items, setItems] = useState<AssignmentItem[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    async function handleAssign(id: string, value: boolean) {
        await assignAction(id, value);

        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, isAssigned: value } : item))
        );
    }

    async function handleSelectAll(value: boolean) {
        setSelectAll(value);

        // Update UI optimistically, skipping the disabled items
        setItems((prev) =>
            prev.map((item) => (disabledItems.includes(item.id) ? item : { ...item, isAssigned: value }))
        );
        
        // Send requests for all entities, skipping the disabled ones
        await Promise.all(
            items
                .filter((item) => !disabledItems.includes(item.id))
                .map((item) => assignAction(item.id, value))
        );
    }

    useEffect(() => {
        async function fetchData() {
            const data = await fetchItems();
            setItems(data);
        }
        fetchData();
    }, [fetchItems]);

    useEffect(() => {
        const allAssigned = items.length > 0 && items.every((i) => i.isAssigned);
        setSelectAll(allAssigned);
    }, [items]);

    return (
        <div className="mb-3">
            <label className="form-label">{title}</label>

            {items.length > 0 && (
                <div className="form-check mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="select-all"
                        checked={selectAll}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleSelectAll(event.currentTarget.checked)}
                    />
                    <label className="form-check-label" htmlFor="select-all">
                        Select All
                    </label>
                </div>
            )}

            {items.map((item) => (
                <div key={item.id} className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={item.isAssigned}
                        id={`item-${item.id}`}
                        disabled={disabledItems.includes(item.id)}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleAssign(item.id, event.currentTarget.checked)}
                    />
                    <label className="form-check-label" htmlFor={`item-${item.id}`}>
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default ItemAssignmentList;
