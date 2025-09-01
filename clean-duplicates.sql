-- 1. D'abord voir quels userId ont des doublons
SELECT userId, COUNT(*) as count, GROUP_CONCAT(id) as dancer_ids
FROM dancers
GROUP BY userId
HAVING COUNT(*) > 1;

-- 2. Pour chaque userId avec doublons, garder seulement le plus récent
-- Cette requête supprime tous les doublons sauf le plus récent (id le plus élevé)
DELETE d1 FROM dancers d1
INNER JOIN dancers d2 
WHERE d1.userId = d2.userId 
AND d1.id < d2.id;

-- 3. Vérifier qu'il n'y a plus de doublons
SELECT userId, COUNT(*) as count
FROM dancers
GROUP BY userId
HAVING COUNT(*) > 1;

-- Si la requête ci-dessus ne retourne rien, vous pouvez exécuter Prisma db push