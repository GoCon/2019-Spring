import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
    <footer class={styles.footer}>
        <h2>Sponsors</h2>
        <div class={styles.row}>
            <div><a href="https://www.freee.co.jp/"><img src="/media/sponsors/01_freee.png"></img></a></div>
            <div><a href="https://www.cloudsign.jp/"><img src="/media/sponsors/02_cloudsign.png"></img></a></div>
            <div><a href="https://wantedlyinc.com/ja/presentations"><img src="/media/sponsors/03_wantedly.png"></img></a></div>
            <div><a href="https://about.mercari.com/"><img src="/media/sponsors/04_mercari_logo_corporate.png"></img></a></div>
        </div>
    </footer>
)

export default Footer;
