import React from 'react';
import styles from '../../utils/styles/Layout.module.scss';

function LayoutPage(props: { children: React.ReactNode }) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.header}>
						<span className={styles.title}> Organization Name / Repository Name</span>
					</div>
					<div className={styles.contents}>{props.children}</div>
				</div>
			</div>
		</>
	);
}

export default LayoutPage;
