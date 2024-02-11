import styles from "./Loading.module.css";

export default function LoadingComponent(props) {
  // Default values shown
  return (
    <div>
      <div className={styles.container}></div>
      <svg width="0" height="0" className={styles.svg}>
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
