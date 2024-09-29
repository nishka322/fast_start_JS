import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import CustomNavbar from '@site/src/components/CustomNavbar'; // Импортируем новый компонент навигации
import HomepageFeatures from '@site/src/components/HomepageFeatures'; // Убедитесь, что этот компонент уже существует
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="docs/instruction/intro">
          Начать! 🚀 
        </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Тестовый проект для команды 1С:Предприятие.Элемент`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* Если у вас нет других компонентов для отображения, вы можете добавить здесь другой контент */}
      </main>
    </Layout>
  );
}
