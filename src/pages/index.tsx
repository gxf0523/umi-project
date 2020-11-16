import React from 'react';
import { Link } from 'umi';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <Link to="/home">
      <div className={styles.welcome} />
      </Link>
    </div>
  );
}
