import fs from 'fs';
import path from 'path';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { Background } from '../../background/Background';
import { Meta } from '../../layout/Meta';
import { Section } from '../../layout/Section';
import { Footer } from '../../templates/Footer';
import NavBar from '../../templates/NavBar';

export default function CodeWriter({ codeSnippet }: any) {
  const [typedInput, setTypedInput] = useState<string>('');
  const timer = useRef(0);
  const mistakes = useRef(0);

  const charStyle = {
    correct: 'font-bold bg-green-100/10 text-green-500',
    incorrect: 'font-bold bg-green-100/10 text-red-500',
  };

  useEffect(() => {
    let intervalId: NodeJS.Timer | null = null;
    if (typedInput) {
      if (!intervalId) {
        intervalId = setInterval(() => {
          timer.current += 1;
        }, 1000);
      }

      if (typedInput.at(-1) !== codeSnippet.at(typedInput.length - 1)) {
        mistakes.current += 1;
      }
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [typedInput, codeSnippet]);

  return (
    <div className="antialiased text-gray-900">
      <Meta title="Code Typer" />
      <Background color="bg-gray-900">
        <NavBar />
      </Background>
      <Section>
        <Link href="/code-typer">{'< Back'}</Link>
        <div className="flex space-x-2">
          <div className="static w-full min-w-3/4">
            <label htmlFor="typed-input">
              <pre className="font-mono rounded bg-slate-900 p-8 text-slate-100">
                <code>
                  {codeSnippet.split('').map((c: string, k: number) => {
                    return (
                      <span
                        key={k}
                        className={
                          // eslint-disable-next-line no-nested-ternary
                          k < typedInput.length
                            ? c === typedInput[k]
                              ? charStyle.correct
                              : charStyle.incorrect
                            : ''
                        }
                      >
                        {c}
                      </span>
                    );
                  })}
                </code>
              </pre>
              <textarea
                className="absolute top-1/2 left-0 h-0 w-0"
                name="typed"
                id="typed-input"
                value={typedInput}
                onChange={(e) => setTypedInput(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col w-1/4 max-w-1/4 justify-start space-y-4">
            <div className="border rounded-md  border-black p-4">
              Time: {timer.current}s
            </div>
            <div className="border rounded-md  border-black p-4">
              CPM: {((typedInput.length / timer.current) * 60).toFixed(2)}
            </div>
            <div className="border rounded-md  border-black p-4">
              Mistakes: {mistakes.current}
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export type SnippetConfig = Record<string, { name: string; url: string }>;

export async function getStaticPaths() {
  const SnippitsList: SnippetConfig = JSON.parse(
    fs.readFileSync(path.join('src/code-snippets', `snippets.json`), 'utf-8')
  );

  const paths = Object.entries(SnippitsList)
    .map(([cat, algo]: [string, any]) =>
      algo.map(({ name }: { name: string }) => ({
        params: { slug: `${cat}-${name}` },
      }))
    )
    .flatMap((x) => x);

  return {
    paths,
    fallback: false,
  };
}

type StaticProps = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const [catagory, algo] = slug.split('-');
  const req = await fetch(
    `https://raw.githubusercontent.com/TheAlgorithms/Python/master/${catagory}/${algo}.py`
  );

  const body = await req.text();

  return {
    props: { codeSnippet: body },
  };
}
