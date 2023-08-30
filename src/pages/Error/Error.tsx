import styles from '../../utils/styles/Error.module.scss';

function ErrorPage() {
	return (
		<>
			<div className={styles.errorBox}>
				<h1>관리자에게 문의해 주세요.</h1>
			</div>
		</>
	);
}

export default ErrorPage;
