import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Landing() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div>
          <img alt={"logo"} src="img/logo-landing.png"
               className="aspect-video overflow-hidden object-contain object-center"/>
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl lg:text-8xl">
            {siteConfig.title}
          </h1>
        </div>

        <p className="mx-auto md:text-xl dark:text-gray-400">
          {siteConfig.tagline}
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Link
          className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="https://github.com/descatal/ModdedBoost/releases"
        >
          Download Launcher
        </Link>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <main>
      <div className={"overflow-hidden h-screen w-screen"}>
        <div className={"absolute h-full w-full inset-0 text-center opacity-10"}>
          <div className="g-container">
            <div className="g-group">
              <div className="item item-right"></div>
              <div className="item item-left"></div>
              <div className="item item-top"></div>
              <div className="item item-bottom"></div>
              <div className="item item-middle"></div>
            </div>
            <div className="g-group">
              <div className="item item-right"></div>
              <div className="item item-left"></div>
              <div className="item item-top"></div>
              <div className="item item-bottom"></div>
              <div className="item item-middle"></div>
            </div>
          </div>
        </div>

        <Layout
          wrapperClassName={"h-full w-full"}
          title={siteConfig.title}
          description={siteConfig.tagline}
          noFooter={true}>
          <Landing/>
        </Layout>
      </div>
    </main>
  );
}
