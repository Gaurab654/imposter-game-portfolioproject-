import { savePlayer } from '@/app/actions/savePlayer';
import styles from './Host.module.css';

export default function Host() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Imposter Game</h1>

      <form action={savePlayer}>
        {/* Hidden inputs to handle database schema defaults */}
        <input type="hidden" name="is_host" value="true" />
        <input type="hidden" name="is_alive" value="true" />

        <div className={styles.grid}>
          <div className={styles.fieldGroup}>
            <span className={styles.label}>Game Server</span>
           <div className={styles.badge}>
  <label>
    <input
      type="radio"
      name="r"
      value="host"
      defaultChecked
    />
    👑 You are Host
  </label>
  <br />
  <br/>

  <label>
    <input
      type="radio"
      name="r"
      value="player"
    />
    👤 You are Player
  </label>
</div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="username" className={styles.label}>
              Host Profile
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Please provide your name"
              className={styles.input}
            />
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          ⚡ Let's Go!
        </button>
      </form>
    </div>
  );
}