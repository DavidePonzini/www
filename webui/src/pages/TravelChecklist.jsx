import { useEffect, useMemo, useState } from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import SectionBackground from '../components/SectionBackground';
import useAuth from '../hooks/useAuth';

const CHECKLIST_KEY = 'travel-checklist-checked-item-labels';

function cloneSections(sections) {
    return sections.map((section) => ({
        id: section.id ?? null,
        category: section.category,
        items: section.items.map((item) => ({
            id: item.id ?? null,
            label: item.label,
        })),
    }));
}

function moveInArray(list, fromIndex, toIndex) {
    const next = [...list];
    const [moved] = next.splice(fromIndex, 1);
    next.splice(toIndex, 0, moved);
    return next;
}

function TravelChecklist() {
    const { apiRequest, isLoggedIn, userInfo } = useAuth();
    const isAdmin = Boolean(isLoggedIn && userInfo?.isAdmin);

    const [sections, setSections] = useState([]);
    const [draftSections, setDraftSections] = useState([]);
    const [checked, setChecked] = useState(() => {
        const stored = localStorage.getItem(CHECKLIST_KEY);
        if (!stored) {
            return [];
        }

        try {
            return JSON.parse(stored);
        } catch {
            return [];
        }
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState('');
    const [saveMessage, setSaveMessage] = useState('');

    const itemLabels = useMemo(
        () => [...new Set(sections.flatMap((section) => section.items.map((item) => item.label)))],
        [sections]
    );

    useEffect(() => {
        localStorage.setItem(CHECKLIST_KEY, JSON.stringify(checked));
    }, [checked]);

    useEffect(() => {
        setChecked((prev) => prev.filter((label) => itemLabels.includes(label)));
    }, [itemLabels]);

    useEffect(() => {
        async function fetchChecklist() {
            setLoading(true);
            setError('');

            try {
                const response = await fetch('/api/travel-checklist');
                const data = await response.json();

                if (!data.success) {
                    setError(data.message || 'Failed to load checklist.');
                    return;
                }

                setSections(data.data);
                setDraftSections(cloneSections(data.data));
            } catch {
                setError('Could not load the checklist.');
            } finally {
                setLoading(false);
            }
        }

        fetchChecklist();
    }, []);

    function toggleItem(itemLabel) {
        setChecked((prev) =>
            prev.includes(itemLabel)
                ? prev.filter((currentLabel) => currentLabel !== itemLabel)
                : [...prev, itemLabel]
        );
    }

    function onReset() {
        setChecked([]);
    }

    function startEditing() {
        setDraftSections(cloneSections(sections));
        setEditing(true);
        setSaveMessage('');
        setError('');
    }

    function cancelEditing() {
        setDraftSections(cloneSections(sections));
        setEditing(false);
        setSaveMessage('');
        setError('');
    }

    function updateCategory(categoryIndex, value) {
        setDraftSections((prev) => prev.map((section, index) => (
            index === categoryIndex
                ? { ...section, category: value }
                : section
        )));
    }

    function addCategory() {
        setDraftSections((prev) => [
            ...prev,
            {
                id: null,
                category: 'New category',
                items: [],
            },
        ]);
    }

    function removeCategory(categoryIndex) {
        setDraftSections((prev) => prev.filter((_, index) => index !== categoryIndex));
    }

    function moveCategory(categoryIndex, direction) {
        setDraftSections((prev) => moveInArray(prev, categoryIndex, categoryIndex + direction));
    }

    function addItem(categoryIndex) {
        setDraftSections((prev) => prev.map((section, index) => (
            index === categoryIndex
                ? {
                    ...section,
                    items: [...section.items, { id: null, label: 'New item' }],
                }
                : section
        )));
    }

    function updateItem(categoryIndex, itemIndex, value) {
        setDraftSections((prev) => prev.map((section, sectionIndex) => {
            if (sectionIndex !== categoryIndex) {
                return section;
            }

            return {
                ...section,
                items: section.items.map((item, currentItemIndex) => (
                    currentItemIndex === itemIndex
                        ? { ...item, label: value }
                        : item
                )),
            };
        }));
    }

    function removeItem(categoryIndex, itemIndex) {
        setDraftSections((prev) => prev.map((section, sectionIndex) => {
            if (sectionIndex !== categoryIndex) {
                return section;
            }

            return {
                ...section,
                items: section.items.filter((_, currentItemIndex) => currentItemIndex !== itemIndex),
            };
        }));
    }

    function moveItem(categoryIndex, itemIndex, direction) {
        setDraftSections((prev) => prev.map((section, sectionIndex) => {
            if (sectionIndex !== categoryIndex) {
                return section;
            }

            return {
                ...section,
                items: moveInArray(section.items, itemIndex, itemIndex + direction),
            };
        }));
    }

    async function saveChecklist() {
        setSaving(true);
        setSaveMessage('');
        setError('');

        try {
            const response = await apiRequest('/api/travel-checklist', 'PUT', {
                sections: draftSections,
            });

            if (!response.success) {
                setError(response.message || 'Failed to save checklist.');
                return;
            }

            setSections(response.data);
            setDraftSections(cloneSections(response.data));
            setEditing(false);
            setSaveMessage('Checklist saved.');
        } catch {
            setError('Could not save the checklist.');
        } finally {
            setSaving(false);
        }
    }

    return (
        <Layout>
            <SectionBackground>
                <Section title="Travel Checklist" />

                <div className="d-flex flex-wrap gap-2 mb-3">
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={onReset}
                    >
                        Reset
                    </button>

                    {isAdmin && !editing && (
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={startEditing}
                        >
                            Edit Checklist
                        </button>
                    )}
                </div>

                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                {saveMessage && (
                    <div className="alert alert-success" role="alert">
                        {saveMessage}
                    </div>
                )}

                {isAdmin && editing && (
                    <div className="card mb-4 text-start">
                        <div className="card-body">
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={saveChecklist}
                                    disabled={saving}
                                >
                                    {saving ? 'Saving...' : 'Save'}
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={cancelEditing}
                                    disabled={saving}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-success"
                                    onClick={addCategory}
                                    disabled={saving}
                                >
                                    Add Category
                                </button>
                            </div>

                            {draftSections.map((section, categoryIndex) => (
                                <div
                                    key={section.id ?? `category-${categoryIndex}`}
                                    className="border rounded p-3 mb-3"
                                    style={{ backgroundColor: 'rgba(255, 248, 230, 0.55)' }}
                                >
                                    <div
                                        className="border rounded p-3 mb-3"
                                        style={{ backgroundColor: 'rgba(201, 162, 39, 0.12)' }}
                                    >
                                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                                            <div className="fw-bold text-uppercase" style={{ letterSpacing: '0.08em' }}>
                                                Category {categoryIndex + 1}
                                            </div>

                                            <div className="d-flex flex-wrap gap-2">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => moveCategory(categoryIndex, -1)}
                                                    disabled={categoryIndex === 0 || saving}
                                                >
                                                    Move Up
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => moveCategory(categoryIndex, 1)}
                                                    disabled={categoryIndex === draftSections.length - 1 || saving}
                                                >
                                                    Move Down
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => removeCategory(categoryIndex)}
                                                    disabled={saving}
                                                >
                                                    Delete Category
                                                </button>
                                            </div>
                                        </div>

                                        <label className="form-label fw-semibold mb-2">
                                            Category title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            style={{ maxWidth: '420px' }}
                                            value={section.category}
                                            onChange={(event) => updateCategory(categoryIndex, event.currentTarget.value)}
                                        />
                                    </div>

                                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                                        <div className="fw-semibold">
                                            Items
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-success"
                                            onClick={() => addItem(categoryIndex)}
                                            disabled={saving}
                                        >
                                            Add Item
                                        </button>
                                    </div>

                                    <div className="d-flex flex-column gap-2">
                                        {section.items.map((item, itemIndex) => (
                                            <div
                                                key={item.id ?? `item-${itemIndex}`}
                                                className="d-flex flex-wrap gap-2 align-items-center border rounded p-2"
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                                            >
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    style={{ maxWidth: '420px' }}
                                                    value={item.label}
                                                    onChange={(event) => updateItem(categoryIndex, itemIndex, event.currentTarget.value)}
                                                />

                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => moveItem(categoryIndex, itemIndex, -1)}
                                                    disabled={itemIndex === 0 || saving}
                                                >
                                                    Up
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => moveItem(categoryIndex, itemIndex, 1)}
                                                    disabled={itemIndex === section.items.length - 1 || saving}
                                                >
                                                    Down
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => removeItem(categoryIndex, itemIndex)}
                                                    disabled={saving}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        ))}

                                        {section.items.length === 0 && (
                                            <div className="text-muted">No items in this category yet.</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {loading ? (
                    <div>Loading checklist...</div>
                ) : (
                    sections.map((section) => (
                        <div key={section.id}>
                            <h2 className="mt-2">
                                {section.category}
                            </h2>

                            <div className="text-start" style={{ columnCount: 'auto', columnWidth: '300px' }}>
                                {section.items.map((item) => (
                                    <div key={item.id}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={checked.includes(item.label)}
                                                onChange={() => toggleItem(item.label)}
                                                style={{
                                                    marginRight: '0.5rem',
                                                    accentColor: checked.includes(item.label) ? 'gray' : 'inherit',
                                                }}
                                            />
                                            <span
                                                style={{
                                                    color: checked.includes(item.label) ? 'gray' : 'inherit',
                                                    textDecoration: checked.includes(item.label) ? 'line-through' : 'none',
                                                }}
                                            >
                                                {item.label}
                                            </span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </SectionBackground>
        </Layout>
    );
}

export default TravelChecklist;
