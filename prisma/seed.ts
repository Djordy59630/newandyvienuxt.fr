import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const danceGroups = [
  {
    name: "Les Kids",
    ageRange: "CP / CE1",
    schedule: "Samedi 12h-13h"
  },
  {
    name: "La Relève",
    ageRange: "CE2 / CM1 / CM2",
    schedule: "Samedi 10h-11h"
  },
  {
    name: "Les Espoirs",
    ageRange: "Collégiens 6ᵉ – 5ᵉ",
    schedule: "Samedi 11h-12h"
  },
  {
    name: "Les Initiés",
    ageRange: "Collégiens 4ᵉ – 3ᵉ",
    schedule: "Samedi 13h-14h"
  },
  {
    name: "Les Confirmés",
    ageRange: "Lycéens à 25 ans",
    schedule: "Vendredi 19h-20h"
  },
  {
    name: "Les Funky",
    ageRange: "+25 ans",
    schedule: "Mercredi 18h15-19h15"
  },
  {
    name: "Les Élites",
    ageRange: "Sur sélection",
    schedule: "Sur rendez-vous avec Damien"
  },
  {
    name: "Les No Limit",
    ageRange: "Personnes en situation de handicap, dès 14 ans",
    schedule: "Vendredi 18h-19h"
  },
  {
    name: "Les Rookies",
    ageRange: "Personnes en situation de handicap de 6 à 13 ans",
    schedule: "Vendredi 17h-18h"
  },
  {
    name: "Cours Général",
    ageRange: "Collège et +",
    schedule: "Samedi 10h-11h"
  },
  {
    name: "Débutants/Inter",
    ageRange: "CE2 au CM2",
    schedule: "Samedi 11h-12h"
  },
  {
    name: "Show Break Débutants/Inter",
    ageRange: "Tous niveaux",
    schedule: "Samedi 12h-13h"
  },
  {
    name: "Cours Confirmés / Entraînement libre",
    ageRange: "Niveau confirmé",
    schedule: "Mercredi & Vendredi 18h-20h"
  }
]

async function main() {
  console.log('🌱 Initialisation des groupes de danse...')
  
  for (const group of danceGroups) {
    await prisma.danceGroup.upsert({
      where: { name: group.name },
      update: {},
      create: group
    })
  }
  
  console.log('✅ Groupes de danse initialisés avec succès!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })