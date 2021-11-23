import App from 'App'
import { render } from 'test-utils'

test('renders App', () => {
  const app = render(<App />)
  expect(app.getByText('Hello World!')).toBeInTheDocument()
  expect(app).toMatchSnapshot()
})
