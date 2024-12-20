# Prisma-Sample

- Prisma(ORM)
- MySQL(Database)
- TypeScript(Programing language)

## Usage

### Check Code

以下のコマンドで`tsc --noEmit`を実行

```bash
npm run typecheck
```

`tsc --noEmit`はTypeScriptは型チェックのみを実行し、JavaScriptファイルの生成を行わない。そのため型エラーのみを検出したい場合に実行すると良い

### Run

```bash
npm run dev
```

### Prisma

```bash
npm run prismaformat
```

```bash
npm run prismalint
```

### Execute migration

以下のコマンドを実行すると`prisma/schema.prisma`の情報をもとにマイグレーションが実行される

```bash
npx prisma migrate dev --name init
```

成功すると`prisma`下に、`migrations`ディレクトリが作成される

### Seeding

```bash
npm run seed
```

### TypedSQL

生のSQLに対して自動で型を付けてくれる機能

`prisma/sql`ディレクトリ下に置かれたsqlファイルから型定義ファイルを生成する

```bash
npm run generatesql
```

生成された型定義ファイルは`node_modules/.prisma/client/sql`に置かれる

`getUserFromEmail.sql`から`getUserFromEmail()`というように、sqlファイル名がそのまま関数名になる。生成された関数は`$queryRawTyped`メソッドを使って呼び出す

```ts
import { getUserFromEmail } from "@prisma/client/sql"

const email = 'alice@example.com'
const alice = await prisma.$queryRawTyped(getUserFromEmail(email))
```
