import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const danceGroups = [
  {
    name: "Les Kids",
    ageGroup: "CP / CE1",
    schedule: "Samedi 12h-13h",
    description: "Pour les plus jeunes danseurs, découverte du hip-hop en s'amusant"
  },
  {
    name: "La Relève",
    ageGroup: "CE2 / CM1 / CM2",
    schedule: "Samedi 13h-14h",
    description: "Apprentissage des bases du hip-hop avec créativité"
  },
  {
    name: "Les Espoirs",
    ageGroup: "6e / 5e",
    schedule: "Samedi 14h-15h",
    description: "Développement technique et style personnel"
  },
  {
    name: "Les Confirmés",
    ageGroup: "4e / 3e",
    schedule: "Samedi 15h-16h",
    description: "Perfectionnement et préparation aux battles"
  },
  {
    name: "Hiphop Battle",
    ageGroup: "Lycée",
    schedule: "Samedi 16h-17h30",
    description: "Entraînement intensif pour les compétitions"
  },
  {
    name: "Hiphop Advanced",
    ageGroup: "Adulte",
    schedule: "Samedi 17h30-19h",
    description: "Cours avancé pour adultes passionnés"
  },
  {
    name: "Danses Du Monde / K-pop",
    ageGroup: "Tout âge",
    schedule: "Dimanche 14h-15h",
    description: "Découverte de différents styles de danse"
  }
]

async function main() {
  console.log('🌱 Initialisation de la base de données...')
  
  // Créer un utilisateur de test
  const hashedPassword = await bcrypt.hash('test123', 10)
  
  const testUser = await prisma.user.upsert({
    where: { email: 'test@square630.fr' },
    update: {},
    create: {
      email: 'test@square630.fr',
      password: hashedPassword,
      roles: 'user'
    }
  })
  console.log('✅ Utilisateur de test créé:', testUser.email)

  // Créer un utilisateur admin
  const adminPassword = await bcrypt.hash('admin123', 10)
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@square630.fr' },
    update: {},
    create: {
      email: 'admin@square630.fr',
      password: adminPassword,
      roles: 'admin'
    }
  })
  console.log('✅ Utilisateur admin créé:', adminUser.email)
  
  // Créer les groupes de danse
  for (const group of danceGroups) {
    // @ts-ignore - TypeScript cache issue
    await (prisma as any).danceGroup.upsert({
      where: { name: group.name },
      update: {},
      create: group
    })
    console.log(`✅ Groupe de danse créé: ${group.name}`)
  }
  
  console.log('🎉 Base de données initialisée avec succès!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })