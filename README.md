# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![make.fun rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Joppy26/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![make.fun reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Joppy26/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

Entry for [The Funniest One-Line Resignation Letter](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) on make.fun.

The entry is the one-line resignation letter of a cron job that has fired every
minute since March: invisible while it works, blamed the one morning it does not.

## The letter

> I fired every minute since March and nobody once said thanks; the one morning I slept in, the whole company did too.

## How it works

`main.ts` writes that single line, deterministically, to `/output/entry.txt`
(1–140 characters, UTF-8). No network calls, no randomness, no secrets.

Run it:

```sh
node main.ts
```

## License

MIT. See [LICENSE](LICENSE).
