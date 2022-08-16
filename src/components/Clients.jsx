import { clients } from "../constants";
import styles from "../styles";
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map(client => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt="logo"
            className="sm:w-[192px] w-[100px] object-contain p-2 logo-container rounded"
          />
        </div>
      ))}
    </div>
  </section>
);
export default Clients;
