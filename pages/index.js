import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}> Home Page</h1>
        <p className={styles.text}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          maximus scelerisque urna, fringilla ultricies tellus. Donec auctor
          libero id magna pulvinar, ac consequat quam convallis. Nulla dignissim
          blandit nibh nec dapibus. Phasellus mattis, velit ut iaculis lacinia,
          nibh mi volutpat magna, et laoreet elit sapien et dolor. Quisque
          venenatis bibendum purus eu tincidunt. Ut consectetur augue eu
          tristique malesuada. Nulla sagittis pretium urna, sed mattis velit
          porta eget. Vestibulum id metus leo. Mauris egestas ligula orci, ut
          eleifend lacus sodales ac. Vestibulum vitae metus feugiat, varius
          risus vel, porta neque. Aliquam erat volutpat. Morbi congue diam et
          sollicitudin iaculis. Aliquam vel iaculis dui. Vestibulum non diam
          dictum, volutpat eros sit amet, molestie ante.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}> See Ninja Listing </a>
        </Link>
      </div>
    </>
  );
}

export default Home;
