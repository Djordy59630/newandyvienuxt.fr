-- Script pour ajouter les contraintes de clés étrangères manquantes
-- IMPORTANT: Sauvegarder la base de données avant d'exécuter ce script

-- Ajouter la contrainte de clé étrangère pour userId dans dancers
-- Note: userId doit être UNIQUE car un utilisateur ne peut avoir qu'une inscription
ALTER TABLE dancers 
ADD CONSTRAINT fk_dancers_users 
FOREIGN KEY (userId) REFERENCES users(id) 
ON DELETE CASCADE;

-- Ajouter la contrainte de clé étrangère pour dancerId dans emergency_contacts
ALTER TABLE emergency_contacts 
ADD CONSTRAINT fk_emergency_contacts_dancers 
FOREIGN KEY (dancerId) REFERENCES dancers(id) 
ON DELETE CASCADE;

-- Ajouter la contrainte de clé étrangère pour dancerId dans guardians
ALTER TABLE guardians 
ADD CONSTRAINT fk_guardians_dancers 
FOREIGN KEY (dancerId) REFERENCES dancers(id) 
ON DELETE CASCADE;

-- Ajouter les contraintes de clés étrangères pour registrations
ALTER TABLE registrations 
ADD CONSTRAINT fk_registrations_dancers 
FOREIGN KEY (dancerId) REFERENCES dancers(id) 
ON DELETE CASCADE;

ALTER TABLE registrations 
ADD CONSTRAINT fk_registrations_dance_groups 
FOREIGN KEY (danceGroupId) REFERENCES dance_groups(id) 
ON DELETE CASCADE;

ALTER TABLE registrations 
ADD CONSTRAINT fk_registrations_users_reviewer 
FOREIGN KEY (reviewedBy) REFERENCES users(id) 
ON DELETE SET NULL;