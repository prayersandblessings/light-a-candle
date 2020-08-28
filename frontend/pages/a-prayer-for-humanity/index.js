import React from 'react'

import Layout from '../../components/layout'
import LightACandleLink from '../../components/LightACandleLink'
import PAGES from '../../constants/routes'

import styles from './index.module.scss'

const WhoWeAre = () => {
  return (
    <Layout classNameSection={PAGES.A_PRAYER_FOR_HUMANITY.className}>
        <div className={styles.container}>
          <span className={styles.caption + ' caption'}>A PRAYER</span>
          <h2 className={styles.title + ' title'}>For humanity</h2>
          <h3>LET US BE UNITED</h3>

          <p className={styles.prayerForHumanityText}> Lorem ipsum dolor sit amet</p>
          <p className={styles.prayerForHumanityText}> Lorem ipsum dolor sit amet</p>
          <p className={styles.prayerForHumanityText}> Lorem ipsum dolor sit amet</p>
          <p className={styles.prayerForHumanityText}> Lorem ipsum dolor sit amet</p>
          <p className={styles.prayerForHumanityText}> Lorem ipsum dolor sit amet</p>
          <p className={styles.prayerForHumanityText}> Lorem ipsum dolor sit amet</p>
          <p className={styles.prayerForHumanityText}> Lorem ipsum dolor sit amet</p>

          <LightACandleLink />
        </div>
    </Layout>
  );
};

export default WhoWeAre;