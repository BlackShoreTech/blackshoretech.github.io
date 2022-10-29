import fs from 'fs';
import path from 'path';

import { useState } from 'react';

import Link from 'next/link';

import { Background } from '../../background/Background';
import { Meta } from '../../layout/Meta';
import { Section } from '../../layout/Section';
import { Footer } from '../../templates/Footer';
import NavBar from '../../templates/NavBar';
import { AppConfig } from '../../utils/AppConfig';

export default function CodeWriter({ SnippitsList }: any) {
  const [catFilter, setCatFilter] = useState<string>('strings');

  return (
    <div className="antialiased text-gray-900">
      <Meta
        title={`Code Typer - ${AppConfig.title}`}
        description={AppConfig.description}
      />
      <Background color="bg-gray-900">
        <NavBar />
      </Background>

      <Section className="min-h-screen bg-gradient-to-r ">
        <div className="text-center mb-4">
          <h2 className="text-2xl">Code Typer</h2>
          <p>Improve your typing skill while learning algorithyms</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded px-4 min-h-1/2">
            <h2 className="pb-4">Choose a Catagory</h2>
            <ul
              onChange={(e: any) => setCatFilter(e.target.value)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-1"
            >
              {Object.keys(SnippitsList).map(
                (catagory: string, key: number) => (
                  <li key={key}>
                    <input
                      type="radio"
                      id={`id-cat-${catagory}`}
                      name="catagory_radio"
                      value={catagory}
                      className="hidden peer"
                      defaultChecked={catagory === catFilter}
                      required
                    />
                    <label
                      htmlFor={`id-cat-${catagory}`}
                      className="flex justify-center capitalize items-center w-full bg-white rounded-lg border-2 cursor-pointer !peer-checked:bg-black peer-checked:border-red-400 peer-checked:text-black hover:text-gray-600 hover:bg-gray-100"
                    >
                      {catagory}
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-span-2 px-4 min-h-1/2">
            <h2 className="pb-4">Choose an Algorithym</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SnippitsList[catFilter].map(
                (
                  { name, description }: { name: string; description: string },
                  k: number
                ) => (
                  <Link
                    href={`/code-typer/${catFilter}-${name}`}
                    key={k}
                    passHref
                  >
                    <div className="flex justify-between w-full backdrop-blur-sm hover:drop-shadow-lg items-center border rounded-md p-8 cursor-pointer">
                      <div>
                        <h3 className="capitalize">{name}</h3>
                        <p className="text-sm font-mono">{description}</p>
                      </div>
                      <div className="w-4 px-2 font-bold">{'>'}</div>
                    </div>
                  </Link>
                )
              )}
            </ul>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export type SnippetConfig = Record<string, { name: string; url: string }>;

export async function getStaticProps() {
  const SnippitsList: SnippetConfig = JSON.parse(
    fs.readFileSync(path.join('src/code-snippets', `snippets.json`), 'utf-8')
  );

  return {
    props: { SnippitsList },
  };
}
