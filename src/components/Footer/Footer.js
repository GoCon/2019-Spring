import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
    <footer class={styles.footer}>
        <h2>Sponsors</h2>
        <a href="https://www.freee.co.jp/"><img src="/media/sponsors/01_freee.png"></img></a>
        <a href="https://www.cloudsign.jp/"><img src="/media/sponsors/02_cloudsign.png"></img></a>
        <a href="https://wantedlyinc.com/ja/presentations"><img src="/media/sponsors/03_wantedly.png"></img></a>
    </footer>
)

export default Footer;
