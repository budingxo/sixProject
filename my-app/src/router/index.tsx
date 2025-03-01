
import One from '../page/one.tsx'
import Cnm from '../page/cnm.tsx'
import Aaa from '../page/aaa.tsx'
import Bbb from '../page/bbb.tsx'
import Ccc from '../page/ccc.tsx'
import { Navigate } from "react-router-dom";

let routes = [
	{ path: '/', element: <Navigate to="/one"></Navigate> },
	{ path: '/one', element: <One></One> },
	{
		path: '/cnm',
		element: <Cnm></Cnm>,
		children: [
			{ index: true, element: <Aaa></Aaa> },
			{ path: 'bbb', element: <Bbb></Bbb> },
			{ path: 'ccc', element: <Ccc></Ccc> }
		]
	}
]

export default routes