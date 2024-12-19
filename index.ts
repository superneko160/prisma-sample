import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 1件検索
  // ユーザデータのみ取得
//   const alice = await prisma.user.findUnique({
//     where: { email: 'alice@example.com' }
//   })
//   console.log(alice)

  // JOIN検索
  // ユーザデータに加えて投稿データも取得
//   const charlie = await prisma.user.findUnique({
//     where: { email: 'charlie@example.com' },
//     include: { posts: true }
//   })
//   console.log(charlie)

  // JOIN検索
  // titleにTypeScriptが含まれているデータを昇順で5件まで取得
  // 投稿者データも含める
  const posts = await prisma.post.findMany({
    where: {
        title: {
            contains: 'TypeScript'
        }
    },
    take: 5,
    orderBy: {
        id: 'asc'
    },
    include: {
        author: true
    }
  })
  console.log(posts)

  // Native Query（SQLべた書き）
  // const email = 'alice@example.com'
  // const alice = await prisma.$queryRaw<User>`SELECT * FROM user WHERE email = ${email}`
  // console.log(alice)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
