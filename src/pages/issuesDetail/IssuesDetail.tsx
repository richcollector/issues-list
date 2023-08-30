import { useEffect, useState } from 'react';
import styles from '../../utils/styles/IssuesDetail.module.scss';
import { issuesDetail } from '../../api/Api';
import { useLocation } from 'react-router-dom';
import { getDate } from '../../utils/constants/getData';
import ReactMarkdown from 'react-markdown';

function IssuesDetailPage() {
	const [detail, setDetail] = useState<any>([]);
	const location = useLocation();

	useEffect(() => {
		issuesDetail(location.pathname)
			.then(res => {
				console.log('res::', res.data.body);
				setDetail(res.data);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	return (
		<div className={styles.listWrapper}>
			<div className={styles.itemBox}>
				<div className={styles.itemImage}>
					<img
						className={styles.userImg}
						src={detail.user?.avatar_url ? `${detail.user?.avatar_url}` : './icon/User.svg'}
						alt=""
					></img>
				</div>
				<div className={styles.item}>
					<div className={styles.itemTitle}>
						<span>#{detail.number}</span>
						<span>{detail.title}</span>
					</div>
					<div className={styles.itemContents}>
						<span>작성자: {detail.user?.login}</span>
						<span>작성일: {getDate(detail.created_at)}</span>
					</div>
				</div>
				<div className={styles.itemComment}>
					<span>코멘트: {detail.comments}</span>
				</div>
			</div>
			<div className={styles.contentsBox}>
				<ReactMarkdown>{detail.body}</ReactMarkdown>
			</div>
		</div>
	);
}

export default IssuesDetailPage;
