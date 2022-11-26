import styles from '../styles/components/about.module.scss';

  export default function About() {
    return (
      <main className={styles.mainWrap}>
        <div className={styles.contentWrap}>
          <div className={styles.logoWrap}>
            <div className={styles.logo}>
              <img src="/image/logo.svg" alt="about logo" />
            </div>
          </div>
          <div className='text-center'>
            <h2 className="font-bold">KONEKONE.</h2>
            <h3 className='mt-4'>Yusuke Mori.<br />
            Designer./Developer.</h3>
          </div>
          <div className='text-center mt-12 mb-20'>
            <p className='leading-relaxed'>KONEKONEという屋号で、デザイナーとフロントエンドをやってます。<br />
            ブランディングとコンセプトメイクの設計を大切にし、モノづくりをおこなっています。<br />
            こちらは日々インスピレーションを受けた作品のスクラップブックになっています🐱
            </p>
          </div>
        </div>
      </main>
    );
  }