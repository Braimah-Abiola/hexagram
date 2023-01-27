import styles from "../style";
import BookNow from "./BookNow";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Want to start a project with us?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Book a free clarity call now with a us to discuss your project and needs
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <BookNow />
    </div>
  </section>
);

export default CTA;