import { Fragment } from 'react';
import styles from '../../utils/styles/IssuesList.module.scss';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/constants/Routes';
function IssuesListPage() {
	const navigate = useNavigate();
	return (
		<div className={styles.listWrapper}>
			{new Array(20).fill(1).map((item, index) => (
				<Fragment key={index}>
					{index !== 0 && index % 4 === 0 && (
						<div
							className={styles.adBox}
							onClick={() => {
								window.location.href = `${ROUTES.WANTED}`;
							}}
						>
							<img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"></img>
						</div>
					)}
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
				</Fragment>
			))}
		</div>
	);
}

export default IssuesListPage;
