import React from 'react';
import clsx from 'clsx';
import styles from './MyFeature.module.css'; // Создаём отдельный CSS файл для стилей

const MyFeature = ({ title, description, image }) => {
    return (
        <div className={clsx('col col--4', styles.myFeature)}>
            <div className="text--center">
                <img src={image} alt={title} className={styles.featureImage} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default MyFeature;
