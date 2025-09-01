-- Script pour corriger les faux emails dans la table dancers
-- Les emails se terminant par @temp.com doivent être remplacés par le vrai email du user

UPDATE dancers d
INNER JOIN users u ON d.userId = u.id
SET d.email = u.email
WHERE d.email LIKE '%@temp.com';

-- Vérifier le résultat
SELECT d.email as dancer_email, u.email as user_email 
FROM dancers d 
INNER JOIN users u ON d.userId = u.id 
WHERE d.email != u.email;