import { lazy } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createLazyComponent = (importCallback: any) => {
	return lazy(() => {
		return Promise.all([
			importCallback(),
			new Promise((resolve) => setTimeout(resolve, 350)),
		]).then(([moduleExports]) => moduleExports)
	})
}
