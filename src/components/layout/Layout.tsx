import React from 'react';
import styles from '../../utils/styles/Layout.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import ROUTES from '../../utils/constants/Routes';

function LayoutPage(props: { children: React.ReactNode }) {
	const navigate = useNavigate();
	const location = useLocation();

	console.log(location.pathname);
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.header}>
						<span className={styles.title}> Organization Name / Repository Name</span>
					</div>
					<div className={styles.contents}>{props.children}</div>
					{location.pathname !== '/' && (
						<div className={styles.moveListBox} onClick={() => navigate(ROUTES.LIST)}>
							리스트로 돌아가기
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default LayoutPage;
