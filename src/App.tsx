import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ROUTES from './utils/constants/Routes';
import './utils/styles/Common.scss';

const Layout = lazy(() => import('./components/layout/Layout'));
const LoadingPage = lazy(() => import('./pages/Loading/Loading'));
const IssuesListPage = lazy(() => import('./pages/issuesList/IssuesList'));
const IssuesDetailPage = lazy(() => import('./pages/issuesDetail/IssuesDetail'));
const ErrorPage = lazy(() => import('./pages/Error/Error'));

function App() {
	return (
		<>
			<Layout>
				<Suspense fallback={<LoadingPage />}>
					<Routes>
						<Route path={ROUTES.LIST}>
							<Route index element={<IssuesListPage />} />
							<Route path={ROUTES.DETAIL} element={<IssuesDetailPage />} />
							<Route path={ROUTES.ERROR} element={<ErrorPage />} />
						</Route>
					</Routes>
				</Suspense>
			</Layout>
		</>
	);
}

export default App;
