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
