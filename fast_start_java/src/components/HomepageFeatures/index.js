import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Первые шаги в мире JavaScript',
        image: require('@site/static/img/homepage.jpg').default,
        description: 'Простой и быстрый путь к освоению основ JavaScript. Настройте окружение и напишите свой первый код за несколько простых шагов!'

    },
];

function Feature({ image, title, description }) {
    return (
        <div className="col col--12">
            <div className="text--center">
                <img className={styles.featureSvg} src={image} alt={title} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={clsx('features', styles.features)}>
            <div className="container">
                <div className="row">
                    <Feature 
                        image={FeatureList[0].image} 
                        title={FeatureList[0].title} 
                        description={FeatureList[0].description} 
                    />
                </div>
            </div>
        </section>
    );
}
