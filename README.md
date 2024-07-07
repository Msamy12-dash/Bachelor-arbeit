
## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [PartyKit](https://partykit.io)
- [Ollama](https://ollama.com/)

## How to Use

pull the branch 

### Install Ollama once per PC

https://ollama.com/


### (Unix script for executing everything down below)

#### Only once per PC:

```bash
chmod +x start-dev.sh
```

#### Starting dev server:

```bash
./start-dev.sh
```

#### Terminating dev server:

Press `Ctrl + C` in bash.


### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run Ollama

```bash
ollama run llama3
```

### Run partykit

```bash
npx partykit dev
```

### Run Next js

```bash
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-pages-template/blob/main/LICENSE).
