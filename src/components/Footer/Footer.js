import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
    <footer class={styles.footer}>
        <h2>Sponsors</h2>
        <div class={styles.row}>
            <div><a href="https://www.cloudsign.jp/"><img src="/media/sponsors/01_cloudsign.png"></img></a></div>
            <div><a href="https://dena.com"><img src="/media/sponsors/02_dena.png"></img></a></div>
            <div><a href="https://www.freee.co.jp/"><img src="/media/sponsors/03_freee.png"></img></a></div>
            <div><a href="https://www.mediado.jp/"><img src="/media/sponsors/04_mediado.png"></img></a></div>
            <div><a href="https://about.mercari.com/"><img src="/media/sponsors/05_mercari.png"></img></a></div>
            <div><a href="https://www.recruit.co.jp/"><img src="/media/sponsors/06_recruit.png"></img></a></div>
            <div><a href="https://wantedlyinc.com/ja/presentations"><img src="/media/sponsors/07_wantedly.png"></img></a></div>
        </div>
    </footer>
)

export default Footer;
