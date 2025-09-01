-- Vérifier les doublons de userId dans la table dancers
SELECT userId, COUNT(*) as count
FROM dancers
GROUP BY userId
HAVING COUNT(*) > 1;

-- Voir tous les danseurs pour un userId donné
-- Remplacez X par le userId qui a des doublons
-- SELECT * FROM dancers WHERE userId = X;

-- Pour garder seulement la dernière inscription de chaque utilisateur
-- et supprimer les doublons :
DELETE d1 FROM dancers d1
INNER JOIN dancers d2 
WHERE d1.userId = d2.userId 
AND d1.id < d2.id;

-- Après suppression des doublons, ajouter la contrainte unique
ALTER TABLE dancers 
ADD CONSTRAINT unique_user_id UNIQUE (userId);