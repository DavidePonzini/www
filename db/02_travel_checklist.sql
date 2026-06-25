BEGIN;

SET search_path TO www;

CREATE TABLE IF NOT EXISTS travel_checklist_categories (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sort_order INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS travel_checklist_items (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id INTEGER NOT NULL REFERENCES travel_checklist_categories(id) ON DELETE CASCADE,
    label VARCHAR(255) NOT NULL,
    sort_order INTEGER NOT NULL
);

INSERT INTO travel_checklist_categories (name, sort_order)
SELECT category_name, sort_order
FROM (
    VALUES
        ('Vestiti', 0),
        ('Cura del corpo', 1),
        ('Elettronica', 2),
        ('Cibo', 3),
        ('Gite in montagna', 4),
        ('Mare', 5),
        ('Viaggi all''estero', 6),
        ('Conferenze', 7),
        ('Altro', 8),
        ('Essenziali', 9)
) AS seed(category_name, sort_order)
WHERE NOT EXISTS (
    SELECT 1
    FROM travel_checklist_categories
);

INSERT INTO travel_checklist_items (category_id, label, sort_order)
SELECT
    categories.id,
    seed.label,
    seed.sort_order
FROM (
    VALUES
        ('Vestiti', 'Calze', 0),
        ('Vestiti', 'Mutande', 1),
        ('Vestiti', 'Maglie', 2),
        ('Vestiti', 'Pantaloni', 3),
        ('Vestiti', 'Felpa', 4),
        ('Vestiti', 'Pigiama', 5),
        ('Vestiti', 'Ciabatte', 6),
        ('Vestiti', 'Occhiali da sole', 7),
        ('Vestiti', 'Cintura', 8),
        ('Vestiti', 'Costume', 9),
        ('Cura del corpo', 'Dentifricio', 0),
        ('Cura del corpo', 'Spazzolino denti', 1),
        ('Cura del corpo', 'Rasoio', 2),
        ('Cura del corpo', 'Sapone', 3),
        ('Cura del corpo', 'Shampoo', 4),
        ('Cura del corpo', 'Balsamo', 5),
        ('Cura del corpo', 'Burro cacao', 6),
        ('Cura del corpo', 'Crema solare', 7),
        ('Cura del corpo', 'Asciugamano', 8),
        ('Elettronica', 'Presa universale', 0),
        ('Elettronica', 'Caricatore orologio', 1),
        ('Elettronica', 'Cavo USB C - C', 2),
        ('Elettronica', 'Adattatore USB C - Lightning', 3),
        ('Elettronica', 'Auricolari', 4),
        ('Elettronica', 'Power bank', 5),
        ('Cibo', 'Acqua', 0),
        ('Gite in montagna', 'Acqua', 0),
        ('Gite in montagna', 'Ginocchiera', 1),
        ('Gite in montagna', 'Cappellino', 2),
        ('Gite in montagna', 'Crema solare', 3),
        ('Gite in montagna', 'Occhiali da sole', 4),
        ('Mare', 'Crema solare', 0),
        ('Mare', 'Occhiali da sole', 1),
        ('Mare', 'Cappellino', 2),
        ('Mare', 'Costume', 3),
        ('Mare', 'Asciugamano', 4),
        ('Mare', 'Acqua', 5),
        ('Viaggi all''estero', 'Passaporto', 0),
        ('Conferenze', 'Abito elegante', 0),
        ('Conferenze', 'Computer', 1),
        ('Conferenze', 'Adattatore USB C - DC IN', 2),
        ('Conferenze', 'Chiavetta USB', 3),
        ('Altro', 'Sacchetto per vestiti sporchi', 0),
        ('Altro', 'Medicine (Moment)', 1),
        ('Essenziali', 'Portafogli', 0),
        ('Essenziali', 'Documenti', 1),
        ('Essenziali', 'Telefono', 2),
        ('Essenziali', 'Chiavi', 3)
) AS seed(category_name, label, sort_order)
JOIN travel_checklist_categories AS categories
    ON categories.name = seed.category_name
WHERE NOT EXISTS (
    SELECT 1
    FROM travel_checklist_items
);

COMMIT;
