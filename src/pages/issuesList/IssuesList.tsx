import { Fragment, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { issuesList } from '../../api/Api';
import { getDate } from '../../utils/constants/getDate';
import ROUTES from '../../utils/constants/Routes';
import styles from '../../utils/styles/IssuesList.module.scss';

function IssuesListPage() {
	const [list, setList] = useState([]);
	const navigate = useNavigate();
	const [page, setPage] = useState(1);
	const containerRef = useRef(null);

	useEffect(() => {
		issuesList(page)
			.then(res => {
				setList((prev): any => [...prev, ...res.data]);
			})
			.catch(error => {
				navigate(ROUTES.ERROR);
			});
	}, [page]);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '20px',
			threshold: 1.0,
		};

		const currentContainerRef = containerRef.current;

		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				setPage(prev => prev + 1);
			}
		}, options);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (currentContainerRef) {
				observer.unobserve(currentContainerRef);
			}
		};
	}, [list, containerRef]);

	return (
		<div className={styles.listWrapper}>
			{list.map((issues: any, index) => (
				<Fragment key={issues.id}>
					{index !== 0 && index % 4 === 0 && (
						<div
							className={styles.adBox}
							onClick={() => {
								window.open(`${ROUTES.WANTED}`, '_blank', 'fullscreen');
							}}
						>
							<img src={`${ROUTES.WANTED_IMG}`} alt=""></img>
						</div>
					)}
					<div className={styles.itemBox} onClick={() => navigate(`/${issues.number}`)}>
						<div className={styles.item}>
							<div className={styles.itemTitle}>
								<span>#{issues.number}</span>
								<span>{issues.title}</span>
							</div>
							<div className={styles.itemContents}>
								<span>작성자: {issues.user.login}</span>
								<span>작성일: {getDate(issues.created_at)}</span>
							</div>
						</div>
						<div className={styles.itemComment}>
							<span>코멘트: {issues.comments}</span>
						</div>
					</div>
				</Fragment>
			))}
			<div ref={containerRef} style={{ height: '10px' }}></div>
		</div>
	);
}

export default IssuesListPage;
