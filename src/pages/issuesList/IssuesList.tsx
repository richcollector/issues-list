import styles from '../../utils/styles/IssuesList.module.scss';
import { useNavigate } from 'react-router-dom';
function IssuesListPage() {
	const navigate = useNavigate();
	return (
		<div className={styles.listWrapper}>
			{new Array(10).fill(1).map(item => (
				<div className={styles.itemBox} onClick={() => navigate(`/${item}`)}>
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
			))}
		</div>
	);
}

export default IssuesListPage;
