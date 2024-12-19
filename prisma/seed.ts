import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  const deletePost = prisma.post.deleteMany()
  const deleteProfile = prisma.profile.deleteMany()
  const deleteUser = prisma.user.deleteMany()

  // 全レコードの削除をトランザクションを実行
  await prisma.$transaction([deletePost, deleteProfile, deleteUser])

  // Create users
  const alice = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      name: 'Alice',
    },
  })

  const bob = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      name: 'Bob',
    },
  })

  const charlie = await prisma.user.create({
    data: {
      email: 'charlie@example.com',
      name: 'Charlie',
    },
  })

  // Create profiles
  await prisma.profile.create({
    data: {
      bio: 'I love Prisma!',
      userId: alice.id,
    },
  })

  await prisma.profile.create({
    data: {
      bio: 'Next.js is awesome!',
      userId: charlie.id,
    },
  })

  // Create posts
  await prisma.post.create({
    data: {
      title: 'I started using Prisma with TypeScript Project!',
      content: "aaaaaaaaaaaaaaaaaaaaaaaa",
      published: true,
      authorId: alice.id,
    },
  })

  await prisma.post.create({
    data: {
      title: 'I need to study Next.js more',
      content: "bbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      authorId: alice.id,
    },
  })

  await prisma.post.create({
    data: {
      title: 'I cannot wait for Next.js Conference',
      content: "cccccccccccccccccccccccccccccccccccc",
      published: true,
      authorId: charlie.id,
    },
  })

  await prisma.post.create({
    data: {
      title: 'I am planning to use Prisma',
      content: "ddddddddddddddddddddddddddddddddd",
      authorId: charlie.id,
    },
  })

  await prisma.post.create({
    data: {
      title: "I am doing 100 Days' TypeScript Challenge",
      content: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      authorId: charlie.id,
    },
  })

  console.log('Seed data inserted successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
