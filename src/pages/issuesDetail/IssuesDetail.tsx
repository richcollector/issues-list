import styles from '../../utils/styles/IssuesDetail.module.scss';
// import { useNavigate } from 'react-router-dom';

function IssuesDetailPage() {
	return (
		<div className={styles.listWrapper}>
			<div className={styles.itemBox}>
				<div className={styles.itemImage}>
					<img src="./icon/User.svg" alt=""></img>
				</div>
				<div className={styles.item}>
					<div className={styles.itemTitle}>
						<span>#111</span>
						<span>issue title</span>
					</div>
					<div className={styles.itemContents}>
						<span>작성자: name</span>
						<span>작성일: 2019년 12월 31일</span>
					</div>
				</div>
				<div className={styles.itemComment}>
					<span>코멘트: 10</span>
				</div>
			</div>
			<div className={styles.contentsBox}></div>
		</div>
	);
}

export default IssuesDetailPage;
